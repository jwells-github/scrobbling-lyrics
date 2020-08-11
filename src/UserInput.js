import React, {Component} from 'react'

class UserInput extends Component {
  onClickUpdateInterface(username){
    this.props.setUpdateLyricsState(true);
  }

  render() {
    return (  
      <div className="userinput">
      <UserNameField
        handleSubmit={this.props.handleSubmit}/>
       <h2>{this.props.username}</h2> 
      <InterfaceUpdateButton
        onClick={()=>this.onClickUpdateInterface(this.props.username)}
      />
      </div>
    )
  }
}

class UserNameField extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.initialState = {userinput: ''};
    this.state = this.initialState;
  }

  handleChange = (event) => { 
   this.setState({userinput: event.target.value});
  }

  onFormSubmit  = (event) => {
    event.preventDefault();
    if(this.state.userinput.length > 0){
      this.props.handleSubmit(this.state.userinput);
      this.setState(this.initialState);
    }
  }

  render() {
    return (  
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor="username">Username</label>
        <input      
          type="text"
          name="username"
          id="username"
          value={this.state.userinput}
          onChange={this.handleChange}/>
          <button type="submit">Submit</button>
      </form>
    )
  }
}

function InterfaceUpdateButton(props){
  return(
    <button onClick={props.onClick}>Update LastFM History</button>
  )
}
export default UserInput