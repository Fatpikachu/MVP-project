const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/local');
const Schema = mongoose.Schema;

let postSchema = new Schema({
  id: String,
  title: String,
  images: [{url: String, description: String}],
  gifs: [{url: String, description: String}],
});

let Post = mongoose.model('Post', postSchema);

let save = (imgArr, gifArr, title) => {
  return new Promise(function(resolve, reject){
    var id = imgArr[0].id || gifArr[0].id;
    imgArr = imgArr.map((item)=>{
      return {url: item.link, description: item.description || ''}
    })
    gifArr = gifArr.map((item)=>{
      return {url: item.link, description: item.description || ''}
    })
    var aPost = new Post({id: id, title: title, images: imgArr, gifs: gifArr});
    aPost.save(function (err, apple) {
            if (err) {
              reject(err);
            } else {
              resolve(apple);
            }
          })
  })
}

module.exports.save = save;