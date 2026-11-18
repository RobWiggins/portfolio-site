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
            <svg className="brand-glyph" viewBox="0 0 32 32" aria-hidden="true">
              <defs>
                <linearGradient id="brand-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#7d86ff" />
                  <stop offset="1" stopColor="#22e3e6" />
                </linearGradient>
              </defs>
              <rect x="1" y="1" width="30" height="30" rx="8" fill="#141a45" stroke="#2f3a9e" />
              <path d="M16 6c.6 5.4 3.6 8.4 9 9-5.4.6-8.4 3.6-9 9-.6-5.4-3.6-8.4-9-9 5.4-.6 8.4-3.6 9-9z" fill="url(#brand-grad)" />
            </svg>
            <span>
              <span className="brand-name">Robert Wiggins</span>
              <span className="brand-tag">Software Engineer</span>
            </span>
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
