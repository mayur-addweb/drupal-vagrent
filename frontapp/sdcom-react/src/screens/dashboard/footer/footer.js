import React, { Component } from 'react';
import config from '../../config/config';
import Loading from '../Spinner/LoadingSpinner';
import axios from 'axios';

class footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email: "",
          name: "",
          subject: "",
          description: "",
          loading: false,
        };
      }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
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

  render() {

    const loader = this.state.loading;

    return (

        <div className="contact-us bg-blue text-center" id="connect">
        <div className="container-fluid">
          <div className="row center-wrapper after-right">
            <div className="col-md-7">
              <div className="left-connect">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" value={this.state.subject} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" id="description" rows="3" placeholder="Description" value={this.state.description} onChange={this.handleChange}></textarea>
                  </div>
                    <button type="submit" className="btn btn-primary">SUBMIT</button>
                </form>
                  {loader ? (<Loading />) : null}                  
              </div>
            </div>
            <div className="col-md-5 before-bottom">
              <div className="right-connect">
                <h2 className="main-heading">LET'S CONNECT!</h2>
                <div className="icon-wrap">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <a href="https://twitter.com/sdhariwal" className="connect-url"><h4>Saurbh Dhariwal</h4></a>
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