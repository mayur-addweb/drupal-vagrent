import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import config from '../../config/config';
import {axios_get} from '../../config/config'


class Testimonial extends Component {

  constructor(props){
    super(props)
    this.state ={
      testimonial_data: [],
      base_url: config.my_api
    }
  }
  
   // Get the data for the testimonial
   async componentWillMount() {
    //const end_point = '/testimonial/rest?_format=json';
    this.setState({
      testimonial_data: await axios_get(config.base, '/testimonial')
    })    
  }
  
render() {
  return (
  <section className="testimonial-wrap text-center" id="testimonial">
    <div className="container">
    <h2 className="main-heading">TESTIMONIALS</h2>
    <h3 className="vertical-name left">TESTIMONIALS</h3>

    {this.state.testimonial_data.length > 0 ?
      <OwlCarousel
      className="owl-theme"
      loop
      margin={10}
      items={1}
      dots={true}
      >
    { 
      this.state.testimonial_data.map((sample, index) => (
        <div className="item" key="index">
          <div className="testimonial">
            <div className="rounded-circle">
              <img src={config.my_api + sample['field_author_img']} alt="testimonial"/>
            </div>
            <h3>{sample['title']}</h3>
            <ul>
              <li>{sample['field_author_company']}</li>
              <li>{sample['field_author_designation']}</li>
            </ul>
            <p>{sample['body']}</p>
          </div>
        </div>
      ))
    }
    </OwlCarousel> : ""}
    </div>
  </section>
    );
  }
}

export default Testimonial;
