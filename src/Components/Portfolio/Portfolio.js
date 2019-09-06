import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Project from '../Project/Project'
import projectData from '../../projectData'

import './Portfolio.css'

export default class Portfolio extends Component {
  

  render() {

    let projects = projectData.map( (project, idx) => {
      return <li className="project-li" key={idx}><Project project={project} /></li>
    })

    return (
      <section className="portfolio-info">
        <h1>My children</h1>
        <ul className="projects-list-container">
          {projects}
        </ul>
        <Link to="/contact">
          <button className="call-action">Talk to me!</button>
        </Link>
      </section>
    )
  }
}
