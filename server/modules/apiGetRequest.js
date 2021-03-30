const http = require('http');
const https = require('https');
const { resolve } = require('path');

function getLastFmHistoryJson(username){
  return new Promise((resolve,reject) =>{ 
    getJson('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user='+
              username + '&api_key=' +
              process.env.REACT_APP_LAST_FM_API_KEY + '&format=json')
    .then(response =>{
      resolve(response);
    }, reason =>{
      reject(reason);
    })
  })
}

function getLyricsJson(artist,track_title){ 
  let lyricsJson = new Promise((resolve,reject) =>{ 
    getJsonSecure('https://api.lyrics.ovh/v1/'+
              artist + '/' +
              track_title)
    .then(response =>{
      resolve(response);
    }, reason =>{
      reject(reason);
    })
  })
  let timeout = new Promise((resolve,reject) =>{
    let timer = setTimeout(() =>{
      clearTimeout(timer);
      let error = new Error('Request took too long and was timed out');
      reject(error)
    }, 5000)
  })
  let race = Promise.race([
    lyricsJson,
    timeout
  ])
  return race
}

function getJson(url){
  return new Promise((resolve,reject) =>{
    http.get(url, (res) => {  
      const { statusCode } = res;
      const contentType = res.headers['content-type'];
  
      let error;
  
      if (statusCode !== 200){
        error = new Error('Request Failed.' +
                          `Status Code: ${statusCode}`);
      } 
      else if(!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
                          `Expected application/json but received ${contentType}`);
      }
      if(error){
        //console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        reject(error);
      }
  
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          resolve(parsedData);
        } 
        catch (e) {
          //console.error(e.message);
          reject(e);
        }
      });
      }).on('error', (e) =>   {
        //console.error(`Got error: ${e.message}`);
        reject(e);
      });
   })
}

function getJsonSecure(url){
  return new Promise((resolve,reject) =>{
    https.get(url, (res) => {  
      const { statusCode } = res;
      const contentType = res.headers['content-type'];
  
      let error;
  
      if (statusCode !== 200){
        error = new Error('Request Failed.' +
                          `Status Code: ${statusCode}`);
      } 
      else if(!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
                          `Expected application/json but received ${contentType}`);
      }
      if(error){
        //console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        reject(error);
      }
  
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          resolve(parsedData);
        } 
        catch (e) {
          //console.error(e.message);
          reject(e);
        }
      });
      }).on('error', (e) =>   {
        //console.error(`Got error: ${e.message}`);
        reject(e);
      });
   })
}

module.exports = {
  getLastFmHistoryJson,getLyricsJson
}