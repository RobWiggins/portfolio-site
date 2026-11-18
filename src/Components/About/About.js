import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import projectData from '../../projectData'
import './About.css'

const Sparkle = ({ style }) => (
  <svg className="hero-sparkle" style={style} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C12.8 7.2 16.8 11.2 24 12C16.8 12.8 12.8 16.8 12 24C11.2 16.8 7.2 12.8 0 12C7.2 11.2 11.2 7.2 12 0Z" fill="currentColor" />
  </svg>
)

const sparkles = [
  { top: '18%', left: '12%', width: 14, animationDelay: '0s' },
  { top: '30%', right: '14%', width: 18, animationDelay: '1.2s' },
  { top: '68%', left: '20%', width: 10, animationDelay: '2.1s' },
  { top: '76%', right: '22%', width: 12, animationDelay: '0.6s' },
  { top: '10%', right: '32%', width: 8, animationDelay: '3s' },
]

const skills = [
  'TypeScript',
  'Node.js',
  'React',
  'PostgreSQL',
  'RESTful APIs',
  'RPC APIs',
  'ORMs',
  'Third-party integrations',
]

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <article className="about-info">
        <header className="hero">
          <div className="hero-bg" aria-hidden="true">
            <div className="hero-glow hero-glow--blue" />
            <div className="hero-glow hero-glow--cyan" />
            <div className="hero-grid" />
            <svg className="hero-orbits" viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice">
              <ellipse cx="600" cy="320" rx="520" ry="170" />
              <ellipse cx="600" cy="320" rx="400" ry="250" transform="rotate(-14 600 320)" />
              <ellipse cx="600" cy="320" rx="300" ry="110" transform="rotate(10 600 320)" />
            </svg>
            {sparkles.map((s, i) => (
              <Sparkle key={i} style={s} />
            ))}
          </div>

          <img
            className="headshot"
            src="/static/cropped_headshot_1.jpeg"
            alt="Rob Wiggins"
          />
          <p className="kicker">Full-stack software engineer</p>
          <h1 className="tagline">
            Robert Wiggins
            <span className="tagline-sub text-gradient">
              builds thoughtful web products.
            </span>
          </h1>
          <p className="summary">
            I am a full stack software engineer with experience in financial
            technology, corporate advisory, and investments. I find immense joy
            in building things. I'm most inspired when building products that create
            meaningful value in people's lives.
          </p>
          <div className="hero-actions">
            <Link className="action-link-text" to="/portfolio">
              View selected work <span aria-hidden="true">→</span>
            </Link>
            <Link className="secondary-action-link" to="/contact">Get in touch</Link>
          </div>
          <p className="hero-meta">TypeScript · Node.js · React · PostgreSQL</p>
        </header>

        <section className="about-section" aria-labelledby="background-heading">
          <div className="section-head">
            <p className="kicker">Background</p>
            <h2 id="background-heading" className="section-heading">
              Engineering with a finance foundation
            </h2>
          </div>
          <div className="about-grid">
            <div className="card card--highlight profile-copy">
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
            </div>
            <dl className="card timeline">
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
          </div>
        </section>

        <section className="about-section" aria-labelledby="skills-heading">
          <div className="section-head">
            <p className="kicker">Capabilities</p>
            <h2 id="skills-heading" className="section-heading">Tools I work with</h2>
          </div>
          <ul className="skill-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="about-section section-glow" aria-labelledby="featured-heading">
          <div className="section-head section-head--split">
            <div>
              <p className="kicker">Selected work</p>
              <h2 id="featured-heading" className="section-heading">
                A few products I have shipped
              </h2>
              <p className="lede">
                Product planning, civic data, learning systems, and real-time sentiment — each built as a shipped application.
              </p>
            </div>
            <Link className="link-arrow" to="/portfolio">
              See the full case studies <span aria-hidden="true">→</span>
            </Link>
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
                  <span className="featured-lede">{project.lede}</span>
                  <span className="featured-cta link-arrow">
                    View work <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <aside className="cta-band">
          <div>
            <h2>Let's build something useful.</h2>
            <p>I'm open to new software engineering roles and opportunities.</p>
          </div>
          <div className="cta-band-actions">
            <Link className="action-link-text btn-light" to="/contact">Get in touch</Link>
          </div>
        </aside>
      </article>
    )
  }
}
