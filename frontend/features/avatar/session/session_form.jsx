import React from 'react';
// import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      signup: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  //
  // handleSubmit(e) {
  //   e.preventDefault();
  //   const user = {
  //     username: this.state.username,
  //     email: this.state.email,
  //     password: this.state.password
  //   };
  //   console.log("submit");
  //   console.log(e.currentTarget.value);
  //   }
  //   if( e.currentTarget.value === 'login'){
  //     console.log("login");
  //   } else {
  //     console.log("signup");
  //   }
  // }

  handleSignup(e){
    e.preventDefault();
    if(this.state.signup === true){
      const user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        time_zone: -(new Date).getTimezoneOffset()/60
      };
      this.props.signup({user});
    } else {
      this.setState({signup: !this.state.signup});
    }
  }

  handleLogin(e){
    e.preventDefault();
    if(this.state.signup === true){
      this.setState({signup: !this.state.signup});
    }
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    this.props.login({user});
  }

  renderErrors() {
    if (this.props.errors.length === 0) {
      // console.log("err true");
    } else {
      // console.log("err flase");
    }
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let signup;
    if (this.state.signup === true){
      signup = (
          <div className="login-item">
              <input type="text"
                value={this.state.email}
                placeholder='email'
                onChange={this.update('email')}
                className="login-input"
              />
          </div>
      );
    }
    return (
      <div className="session">
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="login-form">
            <div className="login-item">
              <input type="text"
                value={this.state.username}
                placeholder='Username'
                onChange={this.update('username')}
                className="login-input"
                />
            </div>
            <div className="login-item">
              <input type="password"
                value={this.state.password}
                placeholder='Password'
                onChange={this.update('password')}
                className="login-input"
                />
            </div>
            {signup}
          </div>
          <div className="">
            <button className="session-button"
              onClick={this.handleLogin}
              value='login'>Login</button>
            <button className="session-button"
              onClick={this.handleSignup}
              value='signup'>signup</button>
          </div>
            {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default SessionForm;
