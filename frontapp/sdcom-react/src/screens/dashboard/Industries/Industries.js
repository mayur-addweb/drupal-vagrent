import React, { Component } from 'react';
import config from '../../config/config';
import {axios_get} from '../../config/config'



class Industries extends Component {

    constructor(props){
      super(props)
      this.state ={
        industries_data: [],
        base_url: config.my_api
      }
    }

   // Get the data for the industries
  async componentWillMount() {
    //const end_point = '/industries/rest?_format=json';
    this.setState({
      industries_data: await axios_get(config.base, '/industries')
    })    
  }

  render() {
    return (
      <section className="industries-wrap text-center" id="industries">
        <div className="container">
          <h2 className="main-heading">INDUSTRIES</h2>
          <h2 className="vertical-name left">INDUSTRIES</h2>
          <div className="row">
            { 
              this.state.industries_data.map((data, index) => (
            <div className="col-md-3" key={index}>
              <div className="industries" data-toggle="modal" data-target={'#industries' +data['tid']}>
                <img src={config.my_api +  data['field_icon_image']} alt="industries" />
                <h5>{data['name']}</h5>                  
              </div>
              <div className="modal fade popup-modal" id={'industries' + data['tid']} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="icon-popup">
                          <img src={config.my_api +  data['field_icon_image']}   alt="industries" />
                        </div>
                        <div className="dots"></div>
                      </div> 
                      <div className="col-md-10">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">{data['name']}</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>{data['field_description']}</p>
                          <h3 className="modal-sub-heading">Technologies Used</h3>
                          <p>{data['field_tag']}</p>
                          <h3 className="modal-sub-heading">Portfolio</h3>
                          <p>{data['field_portfolios']}</p>
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
