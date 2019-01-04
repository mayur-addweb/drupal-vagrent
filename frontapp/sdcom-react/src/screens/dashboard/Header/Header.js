import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Header extends Component {

  render() {
    return (
      <header className="sd-navbar">  
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <h3 className="uname">SAURABH DHARIWAL</h3>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto topnav">
                    <li className="nav-item">
                        <AnchorLink className="nav-link" href='#industries'>INDUSTRIES<span className="sr-only">(current)</span></AnchorLink>
                    </li>
                    <li className="nav-item">
                        <AnchorLink className="nav-link" href='#portfolio'>PORTFOLIO</AnchorLink>
                    </li>
                    <li className="nav-item">
                        <AnchorLink className="nav-link" href='#capabilities'>CAPABILITIES</AnchorLink>
                    </li>
                    <li className="nav-item">
                        <AnchorLink className="nav-link" href='#testimonial'>TESTIMONIALS</AnchorLink>
                    </li>
                    <li className="nav-item">
                        <AnchorLink className="nav-link" href='#blog'>BLOGS</AnchorLink>
                    </li>
                    <li className="nav-item">
                        <AnchorLink className="nav-link" href='#connect'>CONTACT</AnchorLink>
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
