const http = require('http');

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
  return new Promise((resolve,reject) =>{ 
    getJson('http://private-anon-c9b97a7699-lyricsovh.apiary-proxy.com/v1/'+
              artist + '/' +
              track_title)
    .then(response =>{
      resolve(response);
    }, reason =>{
      reject(reason);
    })
  })
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
        console.error(error.message);
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
          //console.log(parsedData);
          resolve(parsedData);
        } 
        catch (e) {
          console.error(e.message);
          reject(e);
        }
      });
      }).on('error', (e) =>   {
        console.error(`Got error: ${e.message}`);
        reject(e);
      });
   })
}


module.exports = {
  getLastFmHistoryJson,getLyricsJson
}