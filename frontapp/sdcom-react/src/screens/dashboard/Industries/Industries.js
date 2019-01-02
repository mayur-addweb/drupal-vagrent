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
      }).catch((error) => {
        console.log(error);
      })

    }

  render() {
    return (
      <section className="industries-wrap text-center" id="industries">
        <div className="container">
          <h2 className="main-heading">INDUSTRIES</h2>
          <div className="row">
            { 
              this.state.industries_data.map((sample, index) => (
            <div className="col-md-3" key={index}>
              <div className="industries" data-toggle="modal" data-target={'#industries' +sample['tid']}>
                <img src={config.my_api +  sample['field_icon_image']} alt="industries" />
                <h5>{sample['name']}</h5>                  
              </div>
              <div className="modal fade popup-modal" id={'industries' + sample['tid']} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="icon-popup">
                          <img src={config.my_api +  sample['field_icon_image']}   alt="industries" />
                        </div>
                        <div className="dots"></div>
                      </div> 
                      <div className="col-md-10">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">{sample['name']}</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>{sample['field_description']}</p>
                          <h3 className="modal-sub-heading">Technologies used : </h3>
                          <p>{sample['field_tag']}</p>
                          <h3 className="modal-sub-heading">Portfolio : </h3>
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
