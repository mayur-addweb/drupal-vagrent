import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header class="sd-navbar">  
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto topnav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#industirs">INDUSTRIES <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio">PORTFOLIO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#capabilities">CAPABILITY</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#testimonial">TESTIMONIALS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#blog">BLOGS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#connect">CONTACT</a>
                    </li>
                </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
