import React, { Component } from 'react';
// import  OwlCarousel from  'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import Parser from 'html-react-parser';
import axios from 'axios';
import config from '../../config/config';


class Capabilities extends Component {

  constructor(props){
    super(props)
    this.state ={
      capabilities_data: [],
      base_url: config.my_api
    }
    axios.get(config.my_api + '/capabilities/rest?_format=json').then((res) => {
      this.setState({capabilities_data: res.data});
  
    }).catch((error) => {
      console.log(error);
    })

  }

  render() {
    return (
      <section className="capailities-wrap text-center" id="capabilities">
          <h2 className="main-heading">CAPABILITIES</h2>
          <div className="bg-sky-blue">
            <div className="container">
              <div className="logo-slider">
              { 
              this.state.capabilities_data.map((sample,idx) => {
                return(
                  <div className="logo-icon" key ={idx}>
                    <i className={sample['field_capabilities_icon']} aria-hidden="true" data-toggle="modal" data-target={'#capabilities' + sample['tid']}></i>
                    <div className="modal fade popup-modal" id={'capabilities' + sample['tid']} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="row">
                            <div className="col-md-2">
                              <div className="icon-popup">
                                 <i key ={idx} className={sample['field_capabilities_icon']} aria-hidden="true" data-toggle="modal"></i>
                              </div>
                            </div> 
                            <div className="col-md-10">
                              <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{sample['name']}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <p>{Parser(sample['field_description'])}</p>
                                <h3 className="modal-sub-heading">Portfolio : </h3>
                                <p>{sample['field_industries']}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Capabilities;
