import React, { Component } from 'react';
import config from '../../config/config';
import axios from 'axios';


class user extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      small_quote: "",
      body: "",
      position: "",
      image: "",
      company: "",
      profile_image: ""
    };
  }

  componentDidMount (){
    
    axios.get(config.my_api + '/node/2?_format=json').then((res) => {
      this.setState({position:res.data.field_position[0]['value']});
      this.setState({name:res.data.field_full_name[0]['value']});
      this.setState({small_quote:res.data.field_small_[0]['value']});
      this.setState({company:res.data.field_company_name[0]['value']});
      this.setState({quote_1:res.data.field_bold_line_1[0]['value']});
      this.setState({quote_2:res.data.field_bold_line_2[0]['value']});
      this.setState({body:res.data.field_description[0]['value']});
      this.setState({profile_image:res.data.field_user_image[0]['url']});
  
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
     <div class="sd-about" id="sd-about">
        <div class="container">
          <div class="row center-wrapper">
            <div class="col-md-6">
              <div class="about-left">
                <img src={this.state.profile_image} alt="IMG" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="about-right">
                <div class="header-wrap">
                  <h1>{this.state.name}</h1>
                  <p>{this.state.small_quote}</p>
                </div>
                <div class="sd-post">
                  <ul>
                    <li>{this.state.position}</li>
                    <li>{this.state.company}</li>
                  </ul>
                </div>
                <div class="sd-content">
                  <p class="bold">{this.state.quote_1}</p>
                  <p class="bold">{this.state.quote_2}</p>
                  <p>{this.state.body.replace (/(^")|("$)/g, '')}</p>
                </div>
                <div class="social-icons">
                  <a><i class="fa fa-facebook" aria-hidden="true"></i></a>
                  <a><i class="fa fa-stack-overflow" aria-hidden="true"></i></a>
                  <a><i class="fa fa-wordpress" aria-hidden="true"></i></a>
                  <a><i class="fa fa-twitter" aria-hidden="true"></i></a>
                  <a><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                  <a><i class="fa fa-drupal" aria-hidden="true"></i></a>
                  <a><i class="fa fa-github" aria-hidden="true"></i></a>
                  <a><i class="fa fa-skype" aria-hidden="true"></i></a>
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
