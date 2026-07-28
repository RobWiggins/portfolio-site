import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Project from '../Project/Project'
import projectData from '../../projectData'

import './Portfolio.css'

export default class Portfolio extends Component {

  componentDidMount() {
    // sets new active tab on sidebar styling
    this.props.handleNewRoute(1)
    window.scrollTo(0,0)
  }

  render() {

    let projects = projectData.map( (project, idx) => {
      return <li className="project-li" key={idx}><Project project={project} /></li>
    })

    return (
      <section className="portfolio-info">
        <div className="section-intro">
          <p className="eyebrow">Selected work</p>
          <h1 className="portfolio-title">Products with a point of view</h1>
          <p className="portfolio-subtitle">
            A few projects that show how I approach full-stack systems,
            user-facing workflows, and data-rich interfaces.
          </p>
        </div>
        <ul className="projects-list-container">
          {projects}
        </ul>
        <div className="btn-center-container">
          <Link className="action-link-text portfolio-contact-cta" to="/contact">
            <span className="portfolio-contact-text">Start a conversation</span>
            <span className="portfolio-contact-arrow" aria-hidden="true">&#8594;</span>
          </Link>
        </div>
      </section>
    )
  }
}
