const express = require('express')
const app = express()
const rp = require('request-promise');

var cors = require('cors')
app.use(cors())

var bodyParser = require('body-parser')
app.use(bodyParser.json())

var save = require('./database.js').save

app.get('/hello', (req, res) => {
  let options = {
    url: 'https://api.imgur.com/3/gallery/hot/viral/week/?showViral=true&mature=false&album_previews=true',
    method: 'GET',
    headers: {
      'Authorization': 'Client-ID 7035bdda2c027da',
    }
  };
  rp(options).then((response)=>{
    return JSON.parse(response)
  }).then((data)=>{
    res.send(data.data)
  })
})

app.post('/favorite', (req, res) => {
  var title = req.body.title;
  var imgArr = req.body.imgArr;
  var gifArr = req.body.gifArr;
  save(imgArr, gifArr, title).then((apple)=>{
    res.send(apple)
  });
})

console.log(save)



app.listen(3010, () => console.log('~~simpleImgur app listening on port 3010!~~'))