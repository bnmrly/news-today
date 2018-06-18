import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <ul className="nav-list">
        <li className="nav-list__item">
          <NavLink className="nav-link" to="/topics/coding">
            Coding
          </NavLink>
        </li>
        <li className="nav-list__item">
          <NavLink className="nav-link" to="/topics/cooking">
            Cooking{' '}
          </NavLink>
        </li>
        <li className="nav-list__item last-child">
          <NavLink className="nav-link" to="/topics/football">
            Football{' '}
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Nav;
