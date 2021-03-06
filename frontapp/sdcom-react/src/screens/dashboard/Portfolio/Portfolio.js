import React, { Component } from 'react';
import config from '../../config/config';
import {axios_get} from '../../config/config'

class Portfolio extends Component {

   constructor(props){
    super(props)
    this.state ={
      portfolio_data: [],
      base_url: config.my_api
    }
  }

  // Get the data for the portfolio
  async componentWillMount() {
          //const end_point = '/portfolio/rest?_format=json';
          this.setState({
            portfolio_data: await axios_get(config.base, '/portfolio')
          })    
        }

  render() {
    return (
      <section className="portfolio-wrap text-center" id="portfolio">
        <div className="container">
          <h2 className="main-heading">PORTFOLIO</h2>
          <h3 className="vertical-name right">PORTFOLIO</h3>
          <div className="row">
            {
            this.state.portfolio_data.map((data, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-xs-12">
              <div className="card card-body mb-4 text-center" data-toggle="modal" data-target={'#portfolio' + data['nid']}>
                <img src={config.my_api + data['field_banner_image']} alt="portfolio"/>
                <div className="body-wrap">
                  <a href={data['field_portfolio_url']} target='_blank' rel="noopener noreferrer"><h4 className="card-title">{data['title']}</h4></a>
                  <p className="card-text">{data['body']}</p>
                </div>
              </div>
              <div className="modal fade popup-modal show in" id={'portfolio' + data['nid']} tabIndex="-1" role="dialog" aria-labelledby="ModalPortfolio" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="cross-img">
                          <div className="icon-popup">
                            <img src={config.my_api + data['field_banner_image']} alt="portfolio"/>
                          </div>
                          <div className="cross-wrap">
                            <button type="button" className="close cross-btn" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                        </div> 
                        <div className="modal-image">
                          <img src={config.my_api + data['field_banner_image']} alt="portfolio"/>
                        </div>
                        <div className="dots">
                        </div>          
                        <div className="modal-header">
                          <h2 className="modal-title" id="exampleModalLabel">{data['title']}</h2>
                        </div>
                        <div className="modal-body">
                          <p>{data['body_1']}</p>
                        <div className="technology-used-wrap">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="line-right">
                              <h3 className="modal-sub-heading">Technologies </h3>
                              <p>{data['field_capabilities']}</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="line-right">
                              <h3 className="modal-sub-heading">Industries </h3>
                              <p>{data['field_industries_tags']}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>               
                      </div>              
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))
          }
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
