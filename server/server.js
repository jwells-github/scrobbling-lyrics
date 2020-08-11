require('dotenv').config({ path: '../.env' });
const express = require('express'); 
const apiGetRequest = require('./modules/apiGetRequest.js')
const app = express();
var path = require('path');


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/  /:username', function (req, res) {
  apiGetRequest.getLastFmHistoryJson(req.params.username).then(response => {
    return res.status(200).json(response);
  }, reason =>{
    return res.status(400).json({error: reason.message});
  })
});

app.get('/getLyrics/:artist/:track_title', function(req,res){
  apiGetRequest.getLyricsJson(req.params.artist,req.params.track_title).then(response =>{
    return res.status(200).json(response);
  }, reason =>{
    return res.status(400).json({error: reason.message});
  })
})

app.listen(process.env.PORT || '8080');