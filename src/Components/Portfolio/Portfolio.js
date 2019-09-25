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
        <h1 className="portfolio-title">My children</h1>
        <ul className="projects-list-container">
          {projects}
        </ul>
        <div className="btn-center-container">
        <Link className="action-link-text" to="/contact">Contact me!</Link>
        </div>
      </section>
    )
  }
}
