import React, { Component } from 'react';
import myimg from '../../images/img-01.png';
import config from '../config/config';

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
    axios.get(config.my_api + '/session/token').then((res) => {
        this.setState({token:res.data})
        if(this.state.token !== '') {
          this.useLogin(this.state.token);
        }
    }).catch((error) => {
      console.log(error);
    })
    event.preventDefault();
  }

  useLogin = (token) => {
    axios({
      method: 'post',
      url: config.my_api +  '/user/login?_format=json',
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
      browserHistory.push('/home')
    });
 }
  render() {
    return (

  <div classNameName="limiter">
    <div classNameName="container-login100">
      <div classNameName="wrap-login100">
        <div classNameName="login100-pic js-tilt" data-tilt>
          <img src={myimg} alt="IMG" />
        </div>
        <form classNameName="login100-form validate-form" onSubmit={this.handleSubmit}>
          <span classNameName="login100-form-title">
            Member Login
          </span>
          <div classNameName="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
            <input classNameName="input100" id="email" type="text" name="email" placeholder="Email"  value={this.state.email} autoFocus onChange={this.handleChange} />
            <span classNameName="focus-input100"></span>
            <span classNameName="symbol-input100">
              <i classNameName="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
          <div classNameName="wrap-input100 validate-input" data-validate = "Password is required">
            <input classNameName="input100" id="password" type="password" name="pass" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
            <span classNameName="focus-input100"></span>
            <span classNameName="symbol-input100">
              <i classNameName="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>
          <div classNameName="container-login100-form-btn">
          <button disabled={!this.validateForm()} classNameName ="login100-form-btn" type="submit" >Login</button>
          </div>
          <div classNameName="text-center p-t-12">
            <span classNameName="txt1">Forgot</span>
          </div>
        </form>
      </div>
    </div>
  </div>
    );
  }
}


export default App;