import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Project from '../Project/Project'
import projectData from '../../projectData'
import './Portfolio.css'

export default class Portfolio extends Component {
  componentDidMount() {
    const hash = window.location.hash.replace('#', '')
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    window.requestAnimationFrame(() => {
      const target = document.getElementById(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }

  render() {
    const projects = projectData.map((project, idx) => (
      <li className="project-li" key={project.slug}>
        <Project project={project} index={idx} />
      </li>
    ))

    return (
      <section className="portfolio-info">
        <header className="page-intro">
          <p className="kicker">Selected work</p>
          <h1 className="page-title">Case studies</h1>
          <p className="lede">
            Four products spanning product planning, civic data, language learning, and
            real-time sentiment analysis.
          </p>
        </header>
        <ul className="projects-list-container">
          {projects}
        </ul>
        <div className="portfolio-cta">
          <p>Want to connect and explore what we could build together?</p>
          <Link className="action-link-text" to="/contact">Start a conversation</Link>
        </div>
      </section>
    )
  }
}
