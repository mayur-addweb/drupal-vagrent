import React, { Component } from 'react';
import Header from '../screens/dashboard/Header/Header';
import User from '../screens/dashboard/UserProfile/user';
import Industries from '../screens/dashboard/Industries/Industries';
import Capabilities from '../screens/dashboard/Capabilities/Capabilities';
import Portfolio from '../screens/dashboard/Portfolio/Portfolio';
import Testimonial from '../screens/dashboard/Testimonial/Testimonial';
import Footer from '../screens/dashboard/footer/footer';
import Subfooter from '../screens/dashboard/footer/subfooter'
import Blog from '../screens/dashboard/Blog/Blog'



class Pages extends Component {

  render() {
    return (
      <div className="limiter">
        <Header />
        <User />
        <Industries />
        <Portfolio />
        <Capabilities />
        <Testimonial />
        <Blog />
        <Footer />
        <Subfooter />
      </div>
    );
  }
}

export default Pages;
