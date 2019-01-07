import React, { Component } from 'react';
import config from '../../config/config';
import Loading from '../Spinner/LoadingSpinner';
import axios from 'axios';
import Modal from 'react-modal';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import ReCaptcha from 'react-recaptcha'

class footer extends Component {


    constructor(props) {
        super(props);
        this.varify = this.varify.bind(this);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.submission = this.submission.bind(this);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        
        this.state = {
          email: "",
          name: "",
          subject: "",
          description: "",
          loading: false,
          is_varified: false,
          errors: {},
          modalIsOpen: false
        };
      }

      // To open the modal
      openModal() {
        this.setState({modalIsOpen: true});
      }

      // To close the modal
      closeModal() {
        window.location.reload(); 
        this.setState({modalIsOpen: false});
        
      }

      // To check the validations for the form
      handleValidation(){
        let errors = {};
        let formIsValid = true;

        //Subject Validation
        if(!this.state.subject){
           formIsValid = false;
           errors["subject"] = "Can't be empty";
        }

        //Name Validation
        if(!this.state.name){
          formIsValid = false;
          errors["name"] = "Can't be empty";
        }

        //Email Validation
        if(!this.state.email){
           formIsValid = false;
        }

        if(typeof this.state.email !== "undefined"){
           let lastAtPos = this.state.email.lastIndexOf('@');
           let lastDotPos = this.state.email.lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') === -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
        }
        //Description Validation
        if(!this.state.description){
          formIsValid = false;
          errors["description"] = "Cannot be empty";
        }  

       this.setState({errors: errors});
      return formIsValid;
    }

    // To set the value for the form element  
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    // Drupal Submission of the form
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
        }).then(async (result) =>  {

          // Check if data is added to varible
          if(result.data) {
            const data = result.data
            this.setState({loading:false})
            if(data !== true) {
              this.openModal();
            } 
          }
        })
    }

    // This is form submit event
    async varify(event) {
      event.preventDefault();
      
      // To check the validations
      if(this.handleValidation()){

        // To check the loading state
        if(this.state.is_varified) {
          this.setState({ loading: true }, () => {

            // To get the drupal site token
            axios.get(config.my_api + '/session/token').then((res) => {

                this.setState({token:res.data})
                
                // Check if token is not empty
                if(this.state.token !== '') {
                  this.submission(this.state.token);
                }

            }).catch((error) => {
              console.log(error);
            })
            
          });
        }
        else {
          // Validation for the captcha
          alert('verify you are human!!');
        }
     }
    }

    // Captcha function for load
    recaptchaLoaded() {
      console.log('captcha is loaded');
    }

    // Captcha function for the flag
    verifyCallback(response) {
      if(response) {
        this.setState ({
          is_varified: true
        })
      }
    }

  render() {

    //Modal.setAppElement('#form');
    const loader = this.state.loading;

    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };
    

    return (
        <div className="contact-us bg-blue text-center" id="connect">
        <div className="container-fluid">
          <div className="row center-wrapper after-right">
            <div className="col-md-7">
              <div className="left-connect">
                <form id="modal-open">
                  <div className="form-group text-left">
                    <input type="text"  className="form-control" required id="subject" placeholder="Subject" value={this.state.subject} onChange={this.handleChange} />
                    <span style={{color: "red"}}>{this.state.errors["subject"]}</span>
                  </div>
                  <div className="form-group text-left">
                    <input type="text"  className="form-control" required id="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                    <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                  </div>
                  <div className="form-group text-left">
                    <input type="email"  className="form-control" required id="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                    <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                  </div>
                  <div className="form-group text-left">
                    <textarea className="form-control" id="description" rows="3" placeholder="Description" value={this.state.description} onChange={this.handleChange}></textarea>
                    <span style={{color: "red"}}>{this.state.errors["description"]}</span>
                  </div>
                  
                  <ReCaptcha
                    sitekey={config.recptcha_key}
                    render="explicit"
                    onloadCallback={this.recaptchaLoaded}
                    verifyCallback={this.verifyCallback}
                  />
                  <button type="submit" className="btn btn-primary" onClick={this.varify}>SUBMIT</button>
                </form>
                  {loader ? (<Loading />) : null }    
                  <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    style={customStyles}
                  >
          
                    <div class="cross-wrap">
                      <button onClick={this.closeModal} class="close cross-btn"><span>X</span></button>
                    </div>
                    <h2>Thanks for the submission</h2>
                  </Modal>              
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