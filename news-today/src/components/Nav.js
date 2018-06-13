import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav-list">
          {/* <NavLink to="/topics/coding">
            <li className="nav-list__item">Coding</li>
          </NavLink> */}

          <li className="nav-list__item">
            <NavLink to="/topics/coding">Coding</NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink to="/topics/cooking">Cooking </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink to="/topics/football">Football </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

// class Nav extends Component {
//   render() {
//     return (
//       <nav className="nav">
//         <NavLink to="/topics/coding">
//           <button type="submit">Coding</button>
//         </NavLink>
//         <NavLink to="/topics/cooking">
//           <button type="submit">Cooking</button>
//         </NavLink>
//         <NavLink to="/topics/football">
//           <button type="submit">Football</button>
//         </NavLink>
//       </nav>
//     );
//   }
// }

export default Nav;
