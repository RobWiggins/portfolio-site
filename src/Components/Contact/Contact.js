import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    // sets new active tab on sidebar styling
    this.props.handleNewRoute(2)
  }

  render() {
    return (
      <section className="contact-info">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h1 className="contact-header">Let's build something useful.</h1>
          <p className="contact-para">
            I am currently open to new software engineering roles and opportunities.
            I would love to connect or catch up.  I can be reached via any of the following
            methods.
          </p>
        </div>

        <div className="contact-panel">
          <div className="contact-card">
            <span>Email</span>
            <a
              className="contact-link"
              href="mailto:wigginsro11@gmail.com"
            >
              wigginsro11@gmail.com
            </a>
          </div>
          <div className="contact-card">
            <span>LinkedIn</span>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/robert-wiggins-7782b071/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Robert Wiggins
            </a>
          </div>
          <div className="contact-card">
            <span>GitHub</span>
            <a
              className="contact-link"
              href="https://github.com/RobWiggins"
              rel="noopener noreferrer"
              target="_blank"
            >
              @RobWiggins
            </a>
          </div>
        </div>
      </section>
    )
  }
}
