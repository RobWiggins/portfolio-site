import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export default class Sidebar extends Component {

  render() {
    return (
      <div className="menu-container">
      <nav className="menu">
        <ul className="menu-links">
          <li key={1}><Link className="menu-item"to='/'>About</Link></li>
          <li key={2}><Link className="menu-item"to='/portfolio'>Portfolio</Link></li>
          <li key={3}><Link className="menu-item"to='/contact'>Contact</Link></li>
        </ul>
      </nav>
      </div>
    );
  }
  
}