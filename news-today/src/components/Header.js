import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class SiteTitle extends Component {
  render() {
    return (
      <div className="header-title">
        <NavLink className="header-title-link" to="/">
          {/* <img
            className="logo"
            src="https://fontmeme.com/permalink/180614/fa7002ea0aaca91c89a03015b0fc30f3.png"
            alt=""
          /> */}
          <img className="site-logo" src="site-logo.png" alt="site logo" />
        </NavLink>
      </div>
    );
  }
}

export default SiteTitle;
