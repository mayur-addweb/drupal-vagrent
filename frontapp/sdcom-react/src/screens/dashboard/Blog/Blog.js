import React, { Component } from 'react';

class Blog extends Component {

  render() {
    return (
      <section class="blog-wrap carousel slider carousel-multi-item" data-ride="carousel" id="blog">
        <div class="container">
          <h2 class="main-hea ding">BLOGS</h2>
          <ol class="carousel-indicators">
            <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
            <li data-target="#multi-item-example" data-slide-to="1"></li>
            <li data-target="#multi-item-example" data-slide-to="2"></li>
          </ol>

          <div class="blog-slider owl-carousel owl-theme">
            <div class="card">
              <div class="view overlay img-effect img-wave">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%287%29.jpg" class="img-fluid" alt="" />
              </div>
              <div class="card-body">
                <h4 class="card-title">Lorem ipsum dolor sit amet, consectetur </h4>
                <div class="auth-info center-wrapper">
                  <img src="build/assets/image/img.png" class="auth-img" />
                  <div class="auth-name">John P. Doe</div>
                </div>
                <div class="publish-info">
                  <span>24 December</span>
                  <span>5 min read</span>
                  <span></span>
                </div>
              </div>
            </div>
            <div class="card">

              <div class="view overlay img-effect img-wave">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%287%29.jpg" class="img-fluid" alt="" />
              </div>
              <div class="card-body">
                <h4 class="card-title">Lorem ipsum dolor sit amet, consectetur </h4>
                <div class="auth-info">
                  <img src="build/assets/image/img.png" class="auth-img" />
                  <div class="auth-name">John P. Doe</div>
                </div>
                <div class="publish-info">
                  <span>24 December</span>
                  <span>5 min read</span>
                  <span></span>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="view overlay img-effect img-wave">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%287%29.jpg" class="img-fluid" alt="" />
              </div>
              <div class="card-body">
                <h4 class="card-title">Lorem ipsum dolor sit amet, consectetur </h4>
                <div class="auth-info">
                  <img src="build/assets/image/img.png" class="auth-img" />
                  <div class="auth-name">John P. Doe</div>
                </div>
                <div class="publish-info">
                  <span>24 December</span>
                  <span>5 min read</span>
                  <span></span>
                </div>
              </div>
            </div>

            <a href="#" class="btn btn-primary">VIEW MORE</a>
        </div>
      </section>
    );
  }
}

export default Blog;
