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

    axios.get(config.base + '/user').then(res => {
      
        this.setState({userData:res.data[0]});
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
    return (
     <div className="sd-about after-right before-bottom" id="sd-about">
        <div className="container">
          <div className="row center-wrapper">
            <div className="col-md-6">
              <div className="about-left">
              { this.state.profile_image.length > 0 ? <img src={config.my_api + this.state.profile_image} alt="IMG" /> : null}
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-right">
                <div className="header-wrap">
                  { this.state.first_name && this.state.last_name ? <h1>{this.state.first_name + ' ' + this.state.last_name}</h1> : null}
                  { this.state.quote_1 ? <p>{this.state.quote_1}</p> : null}
                </div>
                <div className="sd-post">
                  <ul>
                    <li>{this.state.department}</li>
                    <li className="one-dot"></li>
                    <li>{this.state.company}</li>
                  </ul>
                </div>
                <div className="sd-content">
                  {Parser(this.state.body)}
                </div>
                <div className="social-icons">
                  <ul>
                    {
                      Object.keys(this.state.profiles).map((key, index) => {
                        return <li className="user-icons-profile" key={index}> {Parser(this.state.profiles[key])}</li>
                      })
                    }
                  </ul>
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
