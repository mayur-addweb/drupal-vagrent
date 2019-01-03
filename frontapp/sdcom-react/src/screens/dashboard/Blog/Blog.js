import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config/config';

class Blog extends Component {

  constructor(props){
    super(props)
    this.state ={
      blog_data: [],
      base_url: config.my_api
    }
    axios.get(config.my_api + '/blog/rest?_format=json').then((res) => {
      this.setState({blog_data: res.data});
    }).catch((error) => {
      console.log(error);
    })

  }

  render() {
    return (
      <section className="blog-wrap carousel slider carousel-multi-item" data-ride="carousel" id="blog">
      <div className="container">
        <h2 className="main-heading">BLOGS</h2>
        <div className="blog-slider">
          <div className="row">
          { 
            this.state.blog_data.map((sample,index) => {
              return(
          <div className=" col-md-4" key={index}>
            <div className="card">
              <div className="view overlay img-effect img-wave">
              <a href={sample['field_blog_url']}><img src={config.my_api + sample['field_blog_image']} className="img-fluid" alt="" target='_blank' rel="noopener noreferrer"/></a>
              </div>
              <div className="card-body">
                <a href={sample['field_blog_url']} target='_blank' rel="noopener noreferrer"><h4 className="card-title">{sample['title']}</h4></a>
                <div className="auth-info center-wrapper">
                  <img src={config.my_api + sample['field_author_img']} className="auth-img" alt="blog"/>
                  <div className="auth-name">{sample['field_blog_author']}</div>
                </div>
                <div className="publish-info">
                  <span>{sample['field_blog_date']}</span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
              )}
            )
          }
         </div>
        </div>
      </div>
    </section>
  
    );
  }
}

export default Blog;
