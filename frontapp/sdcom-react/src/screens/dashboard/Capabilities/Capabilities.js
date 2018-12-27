import React, { Component } from 'react';
import  OwlCarousel from  'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';


class Capabilities extends Component {

  constructor(props){
    super(props)
    this.state ={
      capabilities_data: [],
      base_url: 'http://sdcom.weblocal.test/'
    }
    axios.get('http://sdcom.weblocal.test/capabilities/rest?_format=json').then((res) => {
      this.setState({capabilities_data: res.data});
  
    }).catch((error) => {
      console.log(error);
    })

  }

  render() {
    return (
      <section class="capailities-wrap text-center" id="capabilities">
          <h2 class="main-heading">CAPABILITIES</h2>
          <div class="logo-slider  bg-sky-blue">
          
            
            <OwlCarousel className="owl-carousel owl-theme"
            loop = {1}
            margin={10}
            items={5}
            nav
            nestedItemSelector="true" 
            >
              { 
              this.state.capabilities_data.map((sample,idx) => {
                return(
                <div class="owl-item">
                  <i key ={idx} class={sample['field_capabilities_icon']} aria-hidden="true" data-toggle="modal" data-target="#ModalLogo"></i>
                </div>
                )
              })
            }
            </OwlCarousel>
          </div>
      </section>
    );
  }
}

export default Capabilities;
