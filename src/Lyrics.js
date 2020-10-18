import React, {Component} from 'react'

class Lyrics extends Component {
  constructor(props){
    super(props);
    this.lyricDiv = React.createRef();
  }

  componentDidUpdate(prevprops){
    if(this.props){
      // Scroll lyrics to the top when a new track is loaded
      if(this.props.lyrics.lyrics !== prevprops.lyrics.lyrics){
        this.lyricDiv.current.scrollTop = 0;
      }
    }
  }
  render() {

    let lyricsText = <p></p>;
    if(this.props.lyrics && this.props.lyrics.lyrics){
      lyricsText = <p>{this.props.lyrics.lyrics}</p>;
    }
    else if(this.props.lyrics && this.props.lyrics.error){
      lyricsText = <p>{this.props.lyrics.error}</p>;
    }

    return (  
      <div className='lyrics-pane' ref={this.lyricDiv}>
        {lyricsText}
      </div>
    )
  }
}

export default Lyrics