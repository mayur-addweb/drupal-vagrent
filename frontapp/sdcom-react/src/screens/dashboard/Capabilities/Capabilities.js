import React, { Component } from 'react';
import  OwlCarousel from  'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
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
      <section class="capailities-wrap text-center" id="capabilities">
          <h2 class="main-heading">CAPABILITIES</h2>
          <div class="bg-sky-blue">
            <div class="container">
              <div class="logo-slider">
              { 
              this.state.capabilities_data.map((sample,idx) => {
                return(
                  <div class="logo-icon">
                    <i key ={idx} class={sample['field_capabilities_icon']} aria-hidden="true" data-toggle="modal" data-target={'#capabilities' + sample['tid']}></i>
                    <div class="modal fade popup-modal" id={'capabilities' + sample['tid']} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="row">
                            <div class="col-md-2">
                              <div class="icon-popup">
                                 <i key ={idx} class={sample['field_capabilities_icon']} aria-hidden="true" data-toggle="modal"></i>
                              </div>
                            </div> 
                            <div class="col-md-10">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{sample['name']}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <p>{Parser(sample['field_description'])}</p>
                                <h3 class="modal-sub-heading">Portfolio : </h3>
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
