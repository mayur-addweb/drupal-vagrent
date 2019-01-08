import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Parser from 'html-react-parser';
import config from '../../config/config';
import {axios_get} from '../../config/config'



class Capabilities extends Component {

  constructor(props){
    super(props)
    this.state ={
      capabilities_data: [],
      base_url: config.my_api
    }
  }

    // Get the data for the capabilities
    async componentWillMount() {
      const end_point = '/capabilities/rest?_format=json';
      this.setState({
        capabilities_data: await axios_get(this.state.base_url, end_point)
      })    
    }

  render() {
    return (
      <section className="capailities-wrap text-center" id="capabilities">
          <h2 className="main-heading">CAPABILITIES</h2>
          <div className="bg-sky-blue">
            <div className="container">
              <div className="logo-slider">

              {this.state.capabilities_data.length > 0 ?
                <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                items={5}
                nav
                dots={false}
                >
              { this.state.capabilities_data.map((data,idx) => {
                return(
                  <div className="item" key ={idx}>
                  <div className="logo-icon">
                    <i className={data['field_capabilities_icon']} aria-hidden="true" data-toggle="modal" data-target={'#capabilities' + data['tid']}></i>
                  </div>
                </div>
                )
              })
            }
            </OwlCarousel> : ""}            
            { this.state.capabilities_data.map((data,idx) => {
              return (
                      <div key={idx} className="modal fade popup-modal" id={'capabilities' + data['tid']} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="cross-wrap">
                          <button type="button" className="close cross-btn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                          <div className="row">
                            <div className="col-md-2">
                              <div className="icon-popup">
                                  <i className={data['field_capabilities_icon']} aria-hidden="true" data-toggle="modal"></i>
                              </div>
                              <div className="dots"></div>
                            </div> 
                            <div className="col-md-10">
                              <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{data['name']}</h5>
                              </div>
                              <div className="modal-body">
                                <p>{Parser(data['field_description'])}</p>
                                { data['field_banner_image'] ? <h3 className="modal-sub-heading">Portfolio</h3> : null }
                                { data['field_banner_image'] ?
                                <div className="portfolio-image-wrap">
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-xs-12">
                                      <div className="card card-body mb-4 text-center">
                                        {data['field_banner_image'] ? <img src={config.my_api +  data['field_banner_image']} alt="portfolio" /> : null}
                                        <div className="body-wrap">
                                          <h4 className="card-title">{data['title']}</h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                )})}    
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Capabilities;
