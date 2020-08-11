require('dotenv').config({ path: '../.env' });
const express = require('express'); 
const apiGetRequest = require('./modules/apiGetRequest.js')
const app = express();


app.get('/getlastfm/:username', function (req, res) {
  apiGetRequest.getLastFmHistoryJson(req.params.username).then(response => {
    console.log("lastfm success")
    return res.status(200).json(response);
  }, reason =>{
    console.log("lastfm fail")
    return res.status(400).json({error: reason.message});
  })
});

app.get('/getLyrics/:artist/:track_title', function(req,res){
  apiGetRequest.getLyricsJson(req.params.artist,req.params.track_title).then(response =>{
    console.log("lyrics success")
    return res.status(200).json(response);
  }, reason =>{
    console.log("lyrics fail")
    return res.status(400).json({error: reason.message});
  })
})

app.listen(process.env.PORT || '8080');