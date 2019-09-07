import React, { Component } from 'react';
import About from '../Components/About/About';
import '../Components/About/About.css';

export default class AboutRoute extends Component {
  render() {
    return (
      <div className="about-pane">
        <About handleNewRoute={this.props.handleNewRoute}/>
      </div>
    );
  }
}
