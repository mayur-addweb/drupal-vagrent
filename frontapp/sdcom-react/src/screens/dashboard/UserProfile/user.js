import React, { Component } from 'react';
import Parser from 'html-react-parser';
import config from '../../config/config';
import axios from 'axios';


class user extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      body: "",
      position: "",
      image: "",
      company: "",
      profile_image: "",
      profiles: []
    };

    axios.get(config.my_api + '/user/rest?_format=json').then((res) => {
      console.log('mydata', res.data);
       this.setState({profiles:res.data[0]['field_profile_links'].split(',')});
       this.setState({company:res.data[0]['field_company']});
       this.setState({quote_1:res.data[0]['field_tagline']});
       this.setState({body:res.data[0]['field_user_bio']});
       this.setState({profile_image:res.data[0]['user_picture']});
       this.setState({first_name:res.data[0]['field_first_name']});
       this.setState({last_name:res.data[0]['field_last_name']});
       this.setState({department:res.data[0]['field_profile_department']});
      
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    console.log(this.state.profiles);
    return (
     <div class="sd-about" id="sd-about">
        <div class="container">
          <div class="row center-wrapper">
            <div class="col-md-6">
              <div class="about-left">
                <img src={config.my_api + this.state.profile_image} alt="IMG" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="about-right">
                <div class="header-wrap">
                  <h1>{this.state.first_name + ' ' + this.state.last_name}</h1>
                  <p>{this.state.quote_1}</p>
                </div>
                <div class="sd-post">
                  <ul>
                    <li>{this.state.department}</li>
                    <li class="one-dot"></li>
                    <li>{this.state.company}</li>

                  </ul>
                </div>
                <div class="sd-content">
                  <p>{ Parser(this.state.body)}</p>
                </div>
                <div class="social-icons">
                {
                  Object.keys(this.state.profiles).map(key => {
                    return Parser(this.state.profiles[key]);
                  })
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default user;
