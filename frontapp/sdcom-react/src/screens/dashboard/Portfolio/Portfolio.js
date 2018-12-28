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
<section class="portfolio-wrap text-center" id="portfolio">
  <div class="container">
    <h2 class="main-heading">PORTFOLIO</h2>
    <div class="row">
    { 
      this.state.portfolio_data.map(sample => (
        <div class="col-md-6 col-lg-4 col-xs-12">
        <div class="card card-body mb-4 text-center" data-toggle="modal" data-target={'#portfolio' + sample['nid']}>
          <img src={config.my_api + sample['field_banner_image']} />
          <div class="body-wrap">
            <h4 class="card-title">{sample['title']}</h4>
            <p class="card-text">{sample['body']}</p>
          </div>
        </div>
        <div class="modal fade popup-modal show in" id={'portfolio' + sample['nid']} tabindex="-1" role="dialog" aria-labelledby="ModalPortfolio" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="row">
                <div class="col-md-12">
                  <div class="cross-img">
                    <div class="icon-popup">
                      <img src={config.my_api + sample['field_logo']} />
                    </div>
                    <div class="cross-wrap">
                      <button type="button" class="close cross-btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  </div> 
                  <div class="modal-image">
                    <img src={config.my_api + sample['field_banner_image']} />
                  </div>
                  <div class="dots">
                  </div>          
                  <div class="modal-header">
                    <h2 class="modal-title" id="exampleModalLabel">{sample['title']}</h2>
                  </div>
                  <div class="modal-body">
                    <p>{sample['body_1']}</p>
                  <div class="technology-used-wrap">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="line-right">
                        <h3 className="modal-sub-heading">Technologies: </h3>
                        <p>{sample['field_tags']}</p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="line-right">
                        <h3 className="modal-sub-heading">Portfolio: </h3>
                        <p>{sample['field_industries_tags']}</p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="line-right">
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
