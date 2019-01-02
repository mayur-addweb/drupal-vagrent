import React, { Component } from 'react';
// import  OwlCarousel from  'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import Parser from 'html-react-parser';
import config from '../../config/config';
import axios from 'axios';


class Testimonial extends Component {

  constructor(props){
    super(props)
    this.state ={
      testimonial_data: [],
      base_url: config.my_api
    }
    axios.get(config.my_api + '/testimonial/rest?_format=json').then((res) => {
      this.setState({testimonial_data: res.data[0]});
  
    }).catch((error) => {
      console.log(error);
    })
  }

  
  render() {
    
return (
  <section className="testimonial-wrap text-center" id="testimonial">
    <div className="container">
    <h2 className="main-heading">TESTIMONIAL</h2>
        <div className="item">
          <div className="testimonial">
            <div className="rounded-circle">
              <img src={config.my_api + this.state.testimonial_data['field_author_img']} alt="testimonial"/>
            </div>
            <h3>{this.state.testimonial_data['title']}</h3>
            <ul>
              <li>{this.state.testimonial_data['field_author_company']}</li>
              <li>{this.state.testimonial_data['field_author_designation']}</li>
            </ul>
            <p>{this.state.testimonial_data['body']}</p>
          </div>
        </div>
    </div>
  </section>
    );
  }
}

export default Testimonial;
