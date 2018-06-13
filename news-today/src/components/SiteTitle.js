import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class SiteTitle extends Component {
  render() {
    return (
      <div className="header-title">
        <NavLink to="/">News Today</NavLink>
      </div>
    );
  }
}

export default SiteTitle;
