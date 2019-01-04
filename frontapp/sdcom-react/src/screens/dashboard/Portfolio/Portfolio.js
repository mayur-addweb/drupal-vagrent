import React, { Component } from 'react';
import config from '../../config/config';
import axios from 'axios';

class Portfolio extends Component {

  constructor(props){
    super(props)
    this.state ={
      portfolio_data: [],
      base_url: config.my_api
    }
    axios.get(config.my_api + '/portfolio/rest?_format=json').then((res) => {
      this.setState({portfolio_data: res.data});
  
    }).catch((error) => {
      console.log(error);
    })

  }

  render() {
    return (
<section className="portfolio-wrap text-center" id="portfolio">
  <div className="container">
    <h2 className="main-heading">PORTFOLIO</h2>
    <h3 className="vertical-name right">PORTFOLIO</h3>
    <div className="grid-container">
    { 
      this.state.portfolio_data.map((sample, index) => (
        <div key={index} className="grid-item">
        <div className="card card-body mb-4 text-center" data-toggle="modal" data-target={'#portfolio' + sample['nid']}>
          <img src={config.my_api + sample['field_banner_image']} alt="portfolio"/>
          <div className="body-wrap">
            <a href={sample['field_portfolio_url']} target='_blank' rel="noopener noreferrer"><h4 className="card-title">{sample['title']}</h4></a>
            <p className="card-text">{sample['body']}</p>
          </div>
        </div>
        <div className="modal fade popup-modal show in" id={'portfolio' + sample['nid']} tabIndex="-1" role="dialog" aria-labelledby="ModalPortfolio" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="row">
                <div className="col-md-12">
                  <div className="cross-img">
                    <div className="icon-popup">
                      <img src={config.my_api + sample['field_logo']} alt="portfolio"/>
                    </div>
                    <div className="cross-wrap">
                      <button type="button" className="close cross-btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  </div> 
                  <div className="modal-image">
                    <img src={config.my_api + sample['field_banner_image']} alt="portfolio"/>
                  </div>
                  <div className="dots">
                  </div>          
                  <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalLabel">{sample['title']}</h2>
                  </div>
                  <div className="modal-body">
                    <p>{sample['body_1']}</p>
                  <div className="technology-used-wrap">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="line-right">
                        <h3 className="modal-sub-heading">Technologies: </h3>
                        <p>{sample['field_tags']}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="line-right">
                        <h3 className="modal-sub-heading">Portfolio: </h3>
                        <p>{sample['field_industries_tags']}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="line-right">
                        <h3 className="modal-sub-heading">Industries : </h3>
                        <p>{sample['field_industries_tags']}</p>
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
