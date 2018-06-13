import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <NavLink to="/topics/coding">
          <button type="submit">Coding</button>
        </NavLink>
        <NavLink to="/topics/cooking">
          <button type="submit">Cooking</button>
        </NavLink>
        <NavLink to="/topics/football">
          <button type="submit">Football</button>
        </NavLink>
      </nav>
    );
  }
}

export default Nav;
