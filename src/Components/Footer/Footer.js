import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
export default class Footer extends Component {
  render() {
    return (
      <div className="footer-items">
        <ul>
          <li key={1} className="icon">
            <img src="../../static/social-1_logo-twitter.svg" />
          </li>
          <li key={2} className="icon">icon</li>
          <li key={3} className="icon">icon</li>
        </ul>
      </div>
    );
  }
}
