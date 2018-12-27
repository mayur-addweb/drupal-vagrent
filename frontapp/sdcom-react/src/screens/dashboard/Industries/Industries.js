import React, { Component } from 'react';
import config from '../../config/config';
import axios from 'axios';


class Industries extends Component {

    constructor(props){
      super(props)
      this.state ={
        industries_data: [],
        base_url: config.my_api
      }
      axios.get(config.my_api + '/industries/rest?_format=json').then((res) => {
        this.setState({industries_data: res.data});
        console.log(this.state.industries_data);
    
      }).catch((error) => {
        console.log(error);
      })

    }

  render() {
    return (
      <section class="industries-wrap text-center" id="industries">
        <div class="container">
          <h2 class="main-heading">INDUSTRIES</h2>
          <div class="row">
            { 
              this.state.industries_data.map(sample => (
            <div class="col-md-3">
              <div class="industries" data-toggle="modal" data-target={'#industries' +sample['tid']}>
                <img src={config.my_api +  sample['field_icon_image']} alt="img" />
                <h5>{sample['name']}</h5>                  
              </div>
              <div class="modal fade popup-modal" id={'industries' + sample['tid']} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="row">
                      <div class="col-md-2">
                        <div class="icon-popup">
                          <img src={config.my_api +  sample['field_icon_image']}   alt="image" />
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
                          <p>{sample['field_description']}</p>
                          <h3 class="modal-sub-heading">Technologies used : </h3>
                          <p>{sample['field_tag']}</p>
                          <h3 class="modal-sub-heading">Portfolio : </h3>
                          <p>{sample['field_industries']}</p>
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

export default Industries;
