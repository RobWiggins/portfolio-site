import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';

const links = [
  { path: '/', label: 'About', exact: true },
  { path: '/portfolio', label: 'Work', exact: false },
  { path: '/contact', label: 'Contact', exact: false },
];

export default class Sidebar extends Component {
  render() {
    return (
      <header className="site-header">
        <div className="menu-container">
          <Link className="brand-mark" to="/">
            Robert Wiggins
            <span>Software Engineer</span>
          </Link>
          <nav className="menu" aria-label="Primary">
            <ul className="menu-links">
              {links.map((link) => (
                <li className="li-link-nav" key={link.path}>
                  <NavLink
                    className="menu-item"
                    activeClassName="current-page-nav"
                    exact={link.exact}
                    to={link.path}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
