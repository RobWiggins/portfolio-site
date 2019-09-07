import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

export default class Contact extends Component {

  componentDidMount() {
    // sets new active tab on sidebar styling
    // TODO fix inconsistent scrolling behavior
    window.scrollTo(0,0)
    this.props.handleNewRoute(2)
  }

  render() {
    return (
      <section className="contact-info">
        <h1 className="contact-header">Work with me! Maybe!</h1>
        <p className="contact-para">
          Thanks for taking the time to learn more about me. I am currently
          seeking exciting, challenging, and fulfilling full stack development
          roles. I'd love to hear from you at <a className="mail-link contact-link" href="mailto:wigginsro11@gmail.com">wigginsro11@gmail.com</a>.</p>
          <p className="contact-para">You can learn more about me by visiting my{' '}
          <a className="contact-link"
            href="https://www.linkedin.com/in/robert-wiggins-7782b071/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>{' '}
          and{' '}
          <a className="contact-link"
            href="https://github.com/RobertWiggins"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a> {' '}
          <a className="contact-link"
            href="https://github.com/RobertWiggins"
            rel="noopener noreferrer"
            target="_blank"
          >
            (@RobertWiggins)
          </a>.
        </p>
        <img src='../../static/toys-3644073_1280.png' className="hello-space-img"></img>
      </section>
    )
  }
}
