import React, { Component } from 'react';
import config from '../../config/config';
import {axios_get} from '../../config/config'
import Loading from '../Spinner/Loader';
import { browserHistory } from 'react-router';
import Parser from 'html-react-parser';

class BlogListing extends Component {

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
   // const end_point = '/blog/rest?_format=json';
    this.setState({
      blog_data: await axios_get(config.base, 'blog/rest')
    })    
    if(this.state.blog_data) {
      this.setState({loading: false});
    }
  }

  render() {
    return (
      <div>
    {this.state.loading ? <Loading />
    :
    <section className="blog-page-wrap" id="blog-listing">
    <div className="container">
    <h2 className="main-heading">BLOGS</h2>
      <div className="blog-page">
        <div className="row">
        {
          this.state.blog_data.map((data, index) => {
            return(
          <div className="col-md-6" key={index}>
            <div className="blog-grid">
            <div className="blog-image">
              <img src={config.my_api + data['field_blog_image']} className="img-fluid" alt="blog-listin" />
            </div>
            <div className="wrapper-td">
              <div className="title">
                <a href={data['field_blog_url']} className="blog-heading" target="_blank" rel="noopener noreferrer">{data['title']}</a>
              </div>
              <div className="blog-desc">
              {Parser(data['body'])}
                <a href={data['field_blog_url']} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
              </div>
            </div>
            <div className="blog-main-bootom auth-info center-wrapper">
              <img src={config.my_api + data['user_picture']} className="auth-img" alt="auth-img"/>
              <p className="auth-name">{data['field_first_name'] + ' ' + data['field_last_name']}</p>
              
              <div className="publish-info">
                {data['field_blog_date']}
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
    }
    </div>
    );
  }
}

export default BlogListing;
