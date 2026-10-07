import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <section className="contact-info">
        <header className="page-intro">
          <p className="kicker">Contact</p>
          <h1 className="page-title">Let's build something useful.</h1>
          <p className="lede">
            I am currently open to new software engineering roles and opportunities.
            The fastest way to reach me is email.
          </p>
        </header>

        <a className="email-hero" href="mailto:wigginsro11@gmail.com">
          wigginsro11@gmail.com
        </a>

        <ul className="contact-panel">
          <li className="contact-card">
            <span>LinkedIn</span>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/robert-wiggins-7782b071/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Robert Wiggins
            </a>
          </li>
          <li className="contact-card">
            <span>GitHub</span>
            <a
              className="contact-link"
              href="https://github.com/RobWiggins"
              rel="noopener noreferrer"
              target="_blank"
            >
              @RobWiggins
            </a>
          </li>
        </ul>
      </section>
    )
  }
}
