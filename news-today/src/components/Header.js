import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo.png';

class SiteTitle extends Component {
  render() {
    return (
      <div className="header-title">
        <NavLink className="header-title-link" to="/">
          <img className="site-logo" src={logo} alt="site logo" />
        </NavLink>
      </div>
    );
  }
}

export default SiteTitle;
