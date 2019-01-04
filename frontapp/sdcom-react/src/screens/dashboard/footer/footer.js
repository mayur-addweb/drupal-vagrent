import React, { Component } from 'react';
import config from '../../config/config';
import Loading from '../Spinner/LoadingSpinner';
import axios from 'axios';
import ReCaptcha from 'react-recaptcha'

class footer extends Component {

    constructor(props) {
        super(props);
        this.varify = this.varify.bind(this);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);

        this.state = {
          email: "",
          name: "",
          subject: "",
          description: "",
          loading: false,
          is_varified: false
        };
      }


    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    submission = (token) => {
        axios({
          method: 'post',
          url: config.my_api + '/webform_rest/submit?_format=json',
          data: {
            webform_id: "contact",
            name: this.state.email,
            subject: this.state.subject,
            email: this.state.email,
            message: this.state.description
          }
        }).then(result => this.setState({
          loading: false,
          data: result.data,
        }));
    }

    varify(event) {
      if(this.state.is_varified) {
        this.setState({ loading: true }, () => {
          axios.get(config.my_api + '/session/token').then((res) => {
            console.log(res);
              this.setState({token:res.data})
              if(this.state.token !== '') {
                this.submission(this.state.token);
                console.log(this.state.token);
              }
          }).catch((error) => {
            console.log(error);
          })
        });
        event.preventDefault();
        alert('Thanks for the submission!!');
      }
      else {
        alert('verify you are human!!');
        event.preventDefault();
      }
    }

    recaptchaLoaded() {
      console.log('captcha is loaded');
    }

    verifyCallback(response) {
      if(response) {
        this.setState ({
          is_varified: true
        })
      }
    }

  render() {
    const loader = this.state.loading;

    return (

        <div className="contact-us bg-blue text-center" id="connect">
        <div className="container-fluid">
          <div className="row center-wrapper after-right">
            <div className="col-md-7">
              <div className="left-connect">
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" required id="subject" placeholder="Subject" value={this.state.subject} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" required id="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" required id="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" id="description" rows="3" placeholder="Description" value={this.state.description} onChange={this.handleChange}></textarea>
                  </div>
                  <ReCaptcha
                    sitekey="6LeOboYUAAAAABUCnte067huZKgYKD8gpYnIzjEf"
                    render="explicit"
                    onloadCallback={this.recaptchaLoaded}
                    verifyCallback={this.verifyCallback}
                  />
                  <button type="submit" className="btn btn-primary" onClick={this.varify}>SUBMIT</button>
                </form>
                  {loader ? (<Loading />) : null}                  
              </div>
            </div>
            <div className="col-md-5 before-bottom">
              <div className="right-connect">
                <h2 className="main-heading">LET'S CONNECT!</h2>
                <div className="icon-wrap">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <a href="https://twitter.com/sdhariwal" target="_blank" rel="noopener noreferrer" className="connect-url"><h4>@sdhariwal</h4></a>
                </div>
                <div className="icon-wrap">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <a href="mailto://saurabhdhariwal.com@gmail.com" className="connect-url"><h4>saurabhdhariwal.com@gmail.com</h4></a>
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