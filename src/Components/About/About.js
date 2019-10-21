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
        <h1 className="tagline">Rob Wiggins</h1>
        <h1 className="vocation">Full Stack Software Engineer</h1>
        <h2 className="welcome-text">
          Welcome to my humble corner of the internet.
        </h2>
        <p className="summary">
          Hi, I'm Rob. I'm a full stack software engineer with a background in
          corporate advisory and investments. I’m a strong believer that
          tackling the most difficult endeavors and leaping from failure to failure with
          undiminished enthusiasm fosters the greatest performance and astonishing
          growth. Don’t take this too personally, but I hope to fail with you
          too. Then we can create something wonderful.
        </p>

        <Link className="action-link-text" to="/portfolio">Check out my work</Link>

        {/* <Link to="/portfolio">
          <button className="call-action">Check out my work</button>
        </Link> */}
      </section>
    )
  }
}
