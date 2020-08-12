import React, {Component} from 'react'

var numberOfTracks;

class TrackHistory extends Component {
  onClickSetLyrics(track, updateLyricsBool){
    this.props.setLyrics(track);
    this.props.setUpdateLyricsState(updateLyricsBool);
  }
  renderTrack(trackNumber){
    const track = this.props.trackHistory.recenttracks.track[trackNumber];
    if(trackNumber === 0){
      return(
        <Track
        key={trackNumber}
        trackNumber={trackNumber} 
        trackinfo={track}
        onClick={()=>this.onClickSetLyrics(track, true)}
        />
      )
    }
    else{
      return(
        <Track 
        key={trackNumber}
        trackNumber={trackNumber} 
        trackinfo={track}
        onClick={()=>this.onClickSetLyrics(track, false)}
        />
      )
    }

  }

  render() {
    let  trackHistoryClass = 'trackHistory';
    if(this.props.hideTrackHistory){
      trackHistoryClass += ' mobile-hide'
    }

    if(this.props.trackHistory && 
    this.props.trackHistory.recenttracks &&
    this.props.trackHistory.recenttracks.track.length > 0){
      numberOfTracks = this.props.trackHistory.recenttracks.track.length;
      const tracks = []
      for(var i = 0; i < numberOfTracks; i++){
        tracks.push(this.renderTrack(i))
      }
      return (  
        <div className={trackHistoryClass}>
          {tracks}
        </div>
      )
    }
    else{
      return(
      <div className={trackHistoryClass}>
      </div>
      )
    }
  }
}

class Track extends Component{  
  render(){
    let trackIcon
    if(this.props.trackinfo.image[1]){
      trackIcon = <TrackIcon image={this.props.trackinfo.image[1]['#text']}/>
    }
    else{
      trackIcon = <TrackIcon image={''}/>
    }

    if(this.props.trackNumber === numberOfTracks){
      return(
        <div className={'track track' + this.props.trackNumber}
        id='last-track'
        onClick={this.props.onClick}>
          {trackIcon}
          <div className='track-details'>
            <TrackTitle title={this.props.trackinfo.name}/>
            <TrackArtist artist={this.props.trackinfo.artist['#text']}/>
          </div>
        </div>
      )
    }
    else{
      return(
        <div className={'track track'+this.props.trackNumber}  
        onClick={this.props.onClick}>
          {trackIcon}
          <div className='track-details'>
            <TrackTitle title={this.props.trackinfo.name}/>
            <TrackArtist artist={this.props.trackinfo.artist['#text']}/>
          </div>
  
        </div>
      )
    }

  }
}

function TrackIcon(props){
  let imageURL = (props.image.length > 0 ? props.image : 'https://lastfm.freetls.fastly.net/i/u/64s/4128a6eb29f94943c9d206c08e625904.webp');
    return(
      <img src={imageURL} alt='track art'></img>
    )
}

function TrackTitle(props){
  return(
    <span>{props.title}</span>
  )
}

function TrackArtist(props){
  return(
    <span>{props.artist}</span>
  )
}

export default TrackHistory