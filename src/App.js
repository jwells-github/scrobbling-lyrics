import React, {Component} from 'react'

import UserInput from './UserInput'
import Header from './Header'
import TrackHistory from './TrackHistory'
import Lyrics from './Lyrics'
import SelectedSongDisplay  from './SelectedSongDisplay'
import Spinner from 'react-bootstrap/Spinner' 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '', 
      lastFmHistory:[],
      lyrics: [],
      updateLyrics: true,
      mostRecentScrobbleId: '',
      selectedSong: {'artist': '', 'track':'', 'art': ''},
      hideTrackHistory: true,
    };
    this.updateInterface = this.updateInterface.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setLyrics = this.setLyrics.bind(this);
    this.setUpdateLyricsState = this.setUpdateLyricsState.bind(this);
    this.toggleTrackHistory = this.toggleTrackHistory.bind(this);
    this.interval = null;
    this.gettingLyrics = false; 
  }

  handleSubmit(username){
    this.setState({username: username})
    this.updateInterface(username);
    this.clearInterval();
    this.interval = setInterval(e => this.updateInterface(username),60000);
  }

  setUpdateLyricsState(booleanValue){
    this.setState({updateLyrics:booleanValue},()=>{
      this.updateInterface(this.state.username);
    });
  }

  updateInterface(username){
    getLastFmHistoryJson(username).then(response =>{
      // Check if any tracks
      if(response.recenttracks){
        this.updateLyricsPane(response)
        this.setState({lastFmHistory: response})
      }
      else{
        this.setState({username:'No User Found'})
      }
    })
  }

  updateLyricsPane(response){
    if(this.state.updateLyrics){
      // If there are any scrobbled tracks
      if(response.recenttracks.track.length > 0){
        // If the most recent scrobble hasn't already had its lyrics fetched
        let responseId = response.recenttracks.track[0].mbid;
        if(responseId !== this.state.mostRecentScrobble || responseId === ' '){
          let mostRecentTrack = response.recenttracks.track[0]
          this.setLyrics(mostRecentTrack);
          this.setState({mostRecentScrobble: responseId});
        }
      } 
      else{
        this.setState({lyrics:{'error':'No Tracks Found'}})
      }
    }
  }

  setLyrics(track){
    // check if already fetching lyrics
    if(!this.gettingLyrics){
      this.gettingLyrics = true;
      getTrackLyricsJson(track.artist['#text'], track.name)
      .then(response =>{
        if(response.error){
          // If no lyrics are returned, search again with the last word removed from the track title
          // This solves the problem of 'London Calling - Remastered' returning no lyrics
          // When lyrics are available for 'London Calling'
          let shortenedTrackName = track.name.substring(0, track.name.lastIndexOf(" "));
          if(shortenedTrackName.length > 0){
            let newTrack = track;        
            newTrack.name = shortenedTrackName;
            this.gettingLyrics = false;
            this.setLyrics(newTrack);
          }
          else{
            this.gettingLyrics = false;
            this.setState({lyrics:{'error':'No Lyrics Found'}})
            this.setState({selectedSong:{'artist': '', 'track': '', 'art': ''}})
          }
        } 
        else{
          this.gettingLyrics = false;
          console.log('this is our response')
          console.log(response);
          console.log(response.lyrics)
          console.log(response.lyrics === "");
          if(response.lyrics === ""){
            this.setState({lyrics:{'error':'Unable to process request. \n Please try again Shortly. \n If you continue to see this message then lyrics may not be avaiable for this song'}})
          }
          else{
            let trackArt = (track.image[2] ? track.image[2]['#text'] : '');
            this.setState({selectedSong:{'artist': track.artist['#text'], 'track':track.name, 'art':trackArt}})
            this.setState({lyrics:response})
          }

        }
      })
    }
  }

  toggleTrackHistory(){
    this.setState({hideTrackHistory:!this.state.hideTrackHistory});
  }

  clearInterval(){
    if(this.interval){
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  render() {
    const username = this.state.username;
    const lastFmHistory = this.state.lastFmHistory;
    const trackLyrics = this.state.lyrics
    const selectedSong = this.state.selectedSong;
    const hideTrackHistory = this.state.hideTrackHistory;

    let mainContent = <Lyrics lyrics={trackLyrics}/>
    if(this.gettingLyrics){
      mainContent = 
      <div className='spinner-container'>
        <Spinner id='loading-spinner' animation="border" role="status">
        <span className="sr-only">Loading...</span>
        </Spinner> 
      </div>
    }
    return (
      <div className="appContainer">
        <Header toggleTrackHistory ={this.toggleTrackHistory}/>
        <TrackHistory
          hideTrackHistory={hideTrackHistory}
          trackHistory={lastFmHistory}
          setLyrics={this.setLyrics}
          setUpdateLyricsState={this.setUpdateLyricsState}/>
        <div className='top-display'>
          <UserInput  
            handleSubmit={this.handleSubmit}
            username={username}
            updateInterface={this.updateInterface}
            setUpdateLyricsState={this.setUpdateLyricsState}/>
          <SelectedSongDisplay selectedSong={selectedSong}/>
        </div>
        {mainContent}
      </div>
    )
  }
}

function getLastFmHistoryJson (username){
  return new Promise((resolve,reject) =>{
    fetch ('/getlastfm/' + username)
    .then(res => {
      resolve(res.json());  
    });
  })
}

function getTrackLyricsJson(artist,track_title){ 
  return new Promise((resolve,reject) =>{
    fetch('/getlyrics/' + artist +'/' + track_title)
    .then(res =>{
     resolve(res.json()); 
    })
  })
} 

export default App