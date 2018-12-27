import React, { Component } from 'react';
import config from '../../config/config';
import axios from 'axios';

class footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email: "",
          name: "",
          subject: "",
          description: ""
        };
      }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        axios.get(config.my_api + '/session/token').then((res) => {
          console.log(res);
            this.setState({token:res.data})
            if(this.state.token != '') {
              this.submission(this.state.token);
              console.log(this.state.token);
            }
        }).catch((error) => {
          console.log(error);
        })
        event.preventDefault();
    }

    submission = (token) => {
        axios({
          method: 'post',
          url: config.my_api + '/webform_rest/submit?_format=json',
          data: {
            webform_id: "contact",
            name: this.state.email,
            subject: this.state.password,
            email: this.state.email,
            message: this.state.description
          }
        }).then((responseEmail) => {
          
          console.log(responseEmail);

        });
    }

  render() {
    return (
        <div class="contact-us bg-blue text-center" id="connect">
        <div class="container-fluid">
          <div class="row center-wrapper">
            <div class="col-md-7">
              <div class="left-connect">
                <form onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <input type="text" class="form-control" id="subject" placeholder="Subject" value={this.state.subject} onChange={this.handleChange} />
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" id="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control" id="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" id="description" rows="3" placeholder="Description" value={this.state.description} onChange={this.handleChange}></textarea>
                  </div>
                    <button type="submit" class="btn btn-primary">SUBMIT</button>
                </form>
              </div>
            </div>
            <div class="col-md-5 after">
              <div class="right-connect">
                <h2 class="main-heading">LET'S CONNECT</h2>
                <div class="icon-wrap">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                  <h4>@Loremipsum</h4>
                </div>
                <div class="icon-wrap">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <h4>saurabhdhariwal.com@gmail.com</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;
