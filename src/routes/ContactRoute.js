import React, { Component } from 'react';
import Contact from '../Components/Contact/Contact'

export default class ContactRoute extends Component {


  render() {
    return (
      <div className="contact-pane">
        <Contact handleNewRoute={this.props.handleNewRoute}></Contact>
      </div>
    )
  }
}