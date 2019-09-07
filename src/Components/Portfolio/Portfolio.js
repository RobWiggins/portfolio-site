import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Project from '../Project/Project'
import projectData from '../../projectData'
import Sidebar from '../Sidebar/Sidebar'

import './Portfolio.css'

export default class Portfolio extends Component {

  handleClick() {
    Sidebar.setState({activePane: 2});
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
        <Link to="/contact">
          <button className="call-action-contact">Contact me!</button>
        </Link>
        </div>
      </section>
    )
  }
}
