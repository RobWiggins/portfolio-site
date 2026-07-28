import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
  componentDidMount() {
    // sets new active sidebar tab for notification styling
    this.props.handleNewRoute(0)
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <section className="about-info">
        <img
          className="headshot"
          src="../../static/cropped_headshot_1.jpeg"
          aria-hidden
          alt="Stunning headshot of Rob Wiggins."
        />
        <h1 className="tagline">Robert Wiggins</h1>
        <h1 className="vocation">Full Stack Software Engineer</h1>
        <h2 className="welcome-text">
          Welcome to my humble corner of the internet.
        </h2>
        <p className="summary">
          Hi, I'm Robert. I'm a full stack software engineer with a background in
          corporate advisory and investments. I have 3 years of experience as a
          Full Stack Software Engineer at a financial technology company.
          The technologies I know the best at the present are TypeScript (JavaScript),
          React, Node.js, Express, and PostgreSQL. I first learned to program on Java.
        </p>
        <Link className="action-link-text" to="/portfolio">Check out my work</Link>
      </section>
    )
  }
}
