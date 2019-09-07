import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './Contact.css'

export default class Contact extends Component {
  render() {
    return (
      <section className="contact-info">
        <h1>Work with me! Maybe!</h1>
        <p>
          Thanks for taking the time to learn more about me. I am currently
          seeking exciting, challenging, and fulfilling full stack development
          roles. I'd love to hear from you at <a href="mailto:wigginsro11@gmail.com">wigginsro11@gmail.com</a>.</p>
          <p>You can learn more about me by visiting my{' '}
          <a
            href="https://www.linkedin.com/in/robert-wiggins-7782b071/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>{' '}
          and{' '}
          <a
            href="https://github.com/RobertWiggins"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a> {' '}
          <a
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
