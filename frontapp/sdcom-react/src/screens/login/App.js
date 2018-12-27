import React, { Component } from 'react';
import myimg from '../../images/img-01.png';

import { browserHistory } from 'react-router';
import axios from 'axios';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token: "",
      user_data: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    axios.get('http://rest_drupal.weblocal.test/session/token').then((res) => {
      console.log(res);
        this.setState({token:res.data})
        if(this.state.token != '') {
          this.useLogin(this.state.token);
          console.log(this.state.token);
        }
    }).catch((error) => {
      console.log(error);
    })
    event.preventDefault();
  }

  useLogin = (token) => {
    axios({
      method: 'post',
      url: 'http://rest_drupal.weblocal.test/user/login?_format=json',
      headers: { 
        'content-type': 'application/x-www-form-urlencoded',
        'X-CSRF-Token': token
     },
      data: {
        name: this.state.email,
        pass: this.state.password
      }
    }).then((responseUser) => {
      this.setState({user_data:responseUser});
      console.log(this.state.user_data);
      browserHistory.push('/home')
      console.log(this.props);
    });
 }
  render() {
    return (

  <div className="limiter">
    <div className="container-login100">
      <div className="wrap-login100">
        <div className="login100-pic js-tilt" data-tilt>
          <img src={myimg} alt="IMG" />
        </div>
        <form className="login100-form validate-form" onSubmit={this.handleSubmit}>
          <span className="login100-form-title">
            Member Login
          </span>
          <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
            <input className="input100" id="email" type="text" name="email" placeholder="Email"  value={this.state.email} autoFocus onChange={this.handleChange} />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
          <div className="wrap-input100 validate-input" data-validate = "Password is required">
            <input className="input100" id="password" type="password" name="pass" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
              <i className="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>
          <div className="container-login100-form-btn">
          <button disabled={!this.validateForm()} className ="login100-form-btn" type="submit" >Login</button>
          </div>
          <div className="text-center p-t-12">
            <span className="txt1">Forgot</span>
          </div>
        </form>
      </div>
    </div>
  </div>
    );
  }
}


export default App;