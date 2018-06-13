import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

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
