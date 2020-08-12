import React, {Component} from 'react'

class SelectedSongDisplay extends Component {


  render() {
    let trackImage;
    if(this.props.selectedSong.art.length !== 0){
      let imageURL = (this.props.selectedSong.art.length > 0 ? this.props.selectedSong.art : 'https://lastfm.freetls.fastly.net/i/u/64s/4128a6eb29f94943c9d206c08e625904.webp');
      trackImage = <img src={imageURL} alt="track art"></img>
    }
    return (  
        <div className="current-track">
          {trackImage}
          <div>
            <h2>{this.props.selectedSong.track}</h2>
            <h2>{this.props.selectedSong.artist}</h2>
          </div>
        </div>
    )
  }
}

export default SelectedSongDisplay