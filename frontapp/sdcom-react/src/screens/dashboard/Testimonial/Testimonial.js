import React, { Component } from 'react';
import  OwlCarousel from  'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Testimonial extends Component {


  
  render() {
    
return (
  <section class="testimonial-wrap text-center" id="testimonial">
    <div class="container">
    <h2 class="main-heading">TESTIMONIAL</h2>

        <div class="item">
          <div class="testimonial">
            <div class="rounded-circle">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" />
            </div>
            <h3>Jenna Doe</h3>
            <ul>
              <li>Manager</li>
              <li>Spectrum Industries</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab.</p>
          </div>
        </div>
    </div>
  </section>
    );
  }
}

export default Testimonial;
