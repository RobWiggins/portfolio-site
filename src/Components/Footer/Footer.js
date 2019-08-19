import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export default class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <ul>
        <li key={1}><img src="../../static/social-1_logo-twitter.svg"></img></li>
          <li key={2}>icon</li>
          <li key={3}>icon</li>
        </ul>
      </div>
    );
  }
  
}