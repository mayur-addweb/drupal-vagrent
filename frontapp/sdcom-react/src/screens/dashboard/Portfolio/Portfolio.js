import React, { Component } from 'react';
import axios from 'axios';

class Portfolio extends Component {

  constructor(props){
    super(props)
    this.state ={
      portfolio_data: [],
      base_url: 'http://sdcom.weblocal.test/'
    }
    axios.get('http://sdcom.weblocal.test/portfolio/rest?_format=json').then((res) => {
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
        <div class="col-md-4">
        <div class="card card-body mb-4 text-center" data-toggle="modal" data-target={'#portfolio' + sample['nid']}>
          <img src={'http://sdcom.weblocal.test/' +  sample['field_banner_image']} />
          <div class="body-wrap">
            <h4 class="card-title">{sample['title']}</h4>
            <p class="card-text">{sample['body']}</p>
          </div>
        </div>
        <div class="modal fade popup-modal" id={'portfolio' + sample['nid']} tabindex="-1" role="dialog" aria-labelledby="ModalPortfolio" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="row">
                <div class="col-md-2">
                  <div class="icon-popup">
                    <img src={'http://sdcom.weblocal.test/' +  sample['field_banner_image']} />
                  </div>
                </div> 
                <div class="col-md-10">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Healthcare</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>{sample['body_1']}</p>
                    <h3>Technologies used : </h3>
                    <p>{sample['field_tags']}</p>
                    <h3>Portfolio : </h3>
                    <p>{sample['field_industries_tags']}</p>
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
