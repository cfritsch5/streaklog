import React from 'react';
import SessionFormContainer from '../session/session_form_container';

class Avatar extends React.Component{
  constructor(props){
    super(props);
    this.dropdown = this.dropdown.bind(this);
    this.login = this.login.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      show: false
    };
  }

  login(){
    if (this.props.loggedIn){
      this.props.logout();
    } else {
      this.setState({show: !this.state.show});
    }
  }

  close(e){
    e.preventDefault();
    console.log("out");
    this.setState({show: false});
  }

  dropdown() {
    // <div className="dropdown" onMouseLeave={this.close}>
    return (
      <div className="dropdown">
        <div className="dropdown-content">
          <SessionFormContainer />
        </div>
      </div>
    );
  }

  render(){
    let login; //= this.props.loggedIn ? "logout" : "Login";
    if (this.props.loggedIn){
      login = "logout";
    } else {
      if (this.state.show){
        login = "Hide Login";
      } else {
        login = "Login";
      }
    }
    let dropdown;
    if (this.state.show  && !this.props.loggedIn){
      dropdown = this.dropdown();
    } else {

      dropdown = (
        <div className="dropdown">
          <h3>{username}</h3>
          <button className="login-button" onClick={this.login}>{login}</button>

        </div>
      );
    }

    let username = this.props.currentUser ? this.props.currentUser.username : null;
    return(
      <div className='avatar' >
          <div className="avatar-content">
            <img src="assets/spark.jpg"/>
            <div className="avatar-overlay">
              {dropdown}
            </div>
          </div>
      </div>
    );
  }
}
export default Avatar;
