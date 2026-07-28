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
        <div className="hero-copy">
          <h2 className="vocation eyebrow">Full Stack Software Engineer</h2>
          <h1 className="tagline">Robert Wiggins</h1>
          <h2 className="vocation">
            I build thoughtful web products with a sharp eye for business context.
          </h2>
          <p className="summary">
            I am a full stack software engineer with experience in financial
            technology, corporate advisory, and investments. I find immense joy
            in building things. I'm most inspired when building products that create
            meaningful value in people's lives.
          </p>
          <div className="hero-actions">
            <Link className="action-link-text" to="/portfolio">View projects</Link>
            <Link className="secondary-action-link" to="/contact">Contact me</Link>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Rob Wiggins portfolio highlights">
          <img
            className="headshot"
            src="../../static/cropped_headshot_1.jpeg"
            alt="Rob Wiggins"
          />
          <ul className="hero-highlights">
            <li>
              <span>Focus</span>
              Full Stack Software Engineer with a lean towards backend
            </li>
            <li>
              <span>Skills</span>
              TypeScript, Node.js, React, PostgreSQL, RESTful APIs, third-party integrations
            </li>
            <li>
              <span>Experience</span>
                Most recently, worked 3 years as a Full Stack Software Engineer at
                a financial techology company. Spent 3 years working in finance/investments
                prior to that role. Possess a B.S. in Business Administration w/ concentrations
                in Corporate Finance and Investments from UNC Chapel Hill.
            </li>
          </ul>
        </aside>
      </section>
    )
  }
}
