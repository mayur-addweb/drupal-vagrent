import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import config from '../../config/config';
import Loading from '../Spinner/Loader';
import {axios_get} from '../../config/config'
import { browserHistory } from 'react-router';

class Blog extends Component {

  constructor(props){
    super(props)
    this.state ={
      blog_data: [],
      base_url: config.my_api,
      loading: true
    }
  }

  blogsListing =() => {
    browserHistory.push('/blogs')
  }
  
  // Get the data for the blogs
  async componentWillMount() {
    //const end_point = '/blog/rest?_format=json';
    this.setState({
      blog_data: await axios_get(config.base, 'blog/rest')
    })    
    if(this.state.blog_data) {
      this.setState({loading: false});
    }
  }

  render() {

    const options = {
      loop: true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          767:{
              items:2
          },
          1000:{
              items:3
          }
      }
    }

    return (
      <div>
      {this.state.loading ? <Loading/> : 
    <section className="blog-wrap carousel slider carousel-multi-item" data-ride="carousel" id="blog">
     <div className="container">
     <h2 className="main-heading">BLOGS</h2>
     <h2 className="vertical-name right">BLOGS</h2>
     <div className="blog-slider">
       {this.state.blog_data.length > 0 ?
         <OwlCarousel
         className="owl-theme"
         loop
         margin={15}
         items={3}
         nav={true}
         dots={false}
         {...options}
         >
       { 
         this.state.blog_data.map((data,index) => {
           return(
       <div className="item" key={index}>
         <div className="card">
           <div className="view overlay img-effect img-wave">
           <a href={data['field_blog_url']}><img src={config.my_api + data['field_blog_image']} className="img-fluid" alt="" target='_blank' rel="noopener noreferrer"/></a>
           </div>
           <div className="card-body">
             <a href={data['field_blog_url']} target='_blank' rel="noopener noreferrer"><h4 className="card-title">{data['title']}</h4></a>
             <div className="auth-info center-wrapper">
               <img src={config.my_api + data['user_picture']} className="auth-img" alt="blog"/>
               <div className="auth-name">{data['field_first_name'] + ' ' + data['field_last_name']}</div>
             </div>
             <div className="publish-info">
               <span>{data['field_blog_date']}</span>
               <span></span>
             </div>
           </div>
         </div>
       </div>
           )}
         )
       }
       </OwlCarousel> : ""}
       <button className="btn btn-primary" onClick={this.blogsListing}>View More</button>
     </div>
   </div>
   </section>
      }
  </div>
    
    );
  }
}

export default Blog;
