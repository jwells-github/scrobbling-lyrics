import React, {Component} from 'react'

class Header extends Component {

  render() {
    return (  
        <div className="header">
          <h1>Scrobbling Lyrics</h1>
          <button id='toggleHistory' onClick={this.props.toggleTrackHistory}>History</button>
        </div>
    )
  }
}

export default Header