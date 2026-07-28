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
          <p className="eyebrow">Product-minded full-stack engineer</p>
          <h1 className="tagline">Rob Wiggins</h1>
          <h2 className="vocation">
            I build thoughtful web products with a sharp eye for business context.
          </h2>
          <p className="summary">
            I am a full-stack software engineer with experience in financial
            technology, corporate advisory, and investments. I like turning
            fuzzy problems into clear interfaces, reliable systems, and product
            decisions that people can understand.
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
              Full-stack product engineering
            </li>
            <li>
              <span>Experience</span>
              Fintech and data-informed interfaces
            </li>
            <li>
              <span>Approach</span>
              Practical systems, polished user flows
            </li>
          </ul>
        </aside>
      </section>
    )
  }
}
