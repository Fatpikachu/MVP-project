const express = require('express')
const app = express()
const rp = require('request-promise');

var cors = require('cors')
app.use(cors())

var bodyParser = require('body-parser')
app.use(bodyParser.json())

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





app.listen(3010, () => console.log('~~movielist app listening on port 3010!~~'))