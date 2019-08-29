import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default class Sidebar extends Component {
  state = {
    activePane: 0,
  };

  handleClickLink = (e, idx) => {
    e.preventDefault();
    this.setState({ activePane: idx });
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
          <Link className={`menu-item ${idx === this.state.activePane && 'current-page-nav'}`} to={link.path}>
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
        <nav className="menu">
          <ul className="menu-links">{navLinkElems}</ul>
        </nav>
      </div>
    );
  }
}
