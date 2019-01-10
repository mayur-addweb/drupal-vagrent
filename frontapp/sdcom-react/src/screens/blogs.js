import React, { Component } from 'react';
import Header from '../screens/dashboard/Header/HeaderBlog';
import Footer from '../screens/dashboard/footer/footer';
import Subfooter from '../screens/dashboard/footer/subfooter'
import Blog from '../screens/dashboard/Blog/BlogListing'

class Pages extends Component {


  render() {
    return (
      <div className="limiter">
        <Header />
        <Blog />
        <Footer />
        <Subfooter />
      </div>
    );
  }
}

export default Pages;
