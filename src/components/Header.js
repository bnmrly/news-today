import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <NavLink className="header-title-link" to="/">
          <img className="site-logo" src={logo} alt="site logo" />
        </NavLink>
      </header>
    );
  }
}

export default Header;
