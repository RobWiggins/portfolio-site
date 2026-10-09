import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import projectData from '../../projectData'
import './About.css'

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <article className="about-info">
        <header className="hero">
          <div className="hero-copy">
            <p className="kicker">Full-stack software engineer</p>
            <h1 className="tagline">Robert Wiggins</h1>
            <p className="vocation">
              I build thoughtful web products with a sharp eye for business context.
            </p>
            <p className="summary">
              I am a full stack software engineer with experience in financial
              technology, corporate advisory, and investments. I find immense joy
              in building things. I'm most inspired when building products that create
              meaningful value in people's lives.
            </p>
            <div className="hero-actions">
              <Link className="action-link-text" to="/portfolio">View selected work</Link>
              <Link className="secondary-action-link" to="/contact">Get in touch</Link>
            </div>
          </div>
          <figure className="portrait">
            <img
              className="headshot"
              src="/static/cropped_headshot_1.jpeg"
              alt="Rob Wiggins"
            />
          </figure>
        </header>

        <div className="profile-band">
          <section className="profile-copy" aria-labelledby="background-heading">
            <p className="kicker">Background</p>
            <h2 id="background-heading" className="section-heading">Engineering with a finance foundation</h2>
            <p>
              Most recently, I spent three years as a full-stack software engineer
              at a financial technology company. Before that, I spent three years
              in finance and investments. That mix shapes how I design systems:
              clear data, durable APIs, and products that hold up in real business workflows.
            </p>
            <p>
              I hold a B.S. in Business Administration from UNC Chapel Hill, with
              concentrations in Corporate Finance and Investments.
            </p>
          </section>

          <section className="resume-band" aria-labelledby="experience-heading">
            <p className="kicker">Experience</p>
            <h2 id="experience-heading" className="section-heading">Where I have focused</h2>
            <dl className="timeline">
              <div>
                <dt>Full-stack software engineer</dt>
                <dd>Financial technology · 3 years</dd>
              </div>
              <div>
                <dt>Finance and investments</dt>
                <dd>Corporate advisory and investing · 3 years</dd>
              </div>
              <div>
                <dt>UNC Chapel Hill</dt>
                <dd>B.S. Business Administration · Corporate Finance and Investments</dd>
              </div>
            </dl>
          </section>
        </div>

        <section className="skills-band" aria-labelledby="skills-heading">
          <p className="kicker">Capabilities</p>
          <h2 id="skills-heading" className="section-heading">Tools I work with</h2>
          <ul className="skill-list">
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>React</li>
            <li>PostgreSQL</li>
            <li>RESTful APIs</li>
            <li>RPC APIs</li>
            <li>ORMs</li>
            <li>Third-party integrations</li>
          </ul>
        </section>

        <section className="featured-work" aria-labelledby="featured-heading">
          <div className="featured-intro">
            <p className="kicker">Selected work</p>
            <h2 id="featured-heading" className="section-heading">A few products I have shipped</h2>
            <p className="lede">
              Product planning, civic data, learning systems, and real-time sentiment — each built as a shipped application.
            </p>
          </div>
          <ol className="featured-list">
            {projectData.map((project, idx) => (
              <li key={project.slug}>
                <Link
                  className="featured-card"
                  to={{ pathname: '/portfolio', hash: `#${project.slug}` }}
                >
                  <span className="featured-index">{String(idx + 1).padStart(2, '0')}</span>
                  <strong className="featured-title">{project.title}</strong>
                  <span className="featured-cta">
                    View work
                    <span aria-hidden="true">→</span>
                  </span>
                  <span className="featured-lede">{project.lede}</span>
                </Link>
              </li>
            ))}
          </ol>
          <Link className="text-link" to="/portfolio">See the full case studies</Link>
        </section>
      </article>
    )
  }
}
