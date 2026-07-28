import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default class Sidebar extends Component {

  handleClickLink = (e, idx) => {
    this.props.handleNewRoute(idx);
  };

  generateNavLinks() {
    let linksInfo = [
      {
        path: '/',
        linkName: 'About',
      },
      {
        path: '/portfolio',
        linkName: 'Portfolio',
      },
      {
        path: '/contact',
        linkName: 'Contact',
      },
    ];
    return linksInfo.map((link, idx) => {
      return (
        <li
          className={`li-link-nav`}
          key={idx}
          onClick={e => this.handleClickLink(e, idx)}
        >
          <Link className={`menu-item ${idx === this.props.activePageIdx ? 'current-page-nav' : ''}`} to={link.path}>
            {link.linkName}
          </Link>
        </li>
      );
    });
  }

  render() {
    let navLinkElems = this.generateNavLinks();
    return (
      <div className="menu-container">
        <Link className="brand-mark" to="/" onClick={e => this.handleClickLink(e, 0)}>
          RW
        </Link>
        <nav className="menu">
          <ul className="menu-links">{navLinkElems}</ul>
        </nav>
      </div>
    );
  }
}
