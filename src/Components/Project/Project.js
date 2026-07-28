import React, { Component } from 'react'

import './Project.css'

export default class Project extends Component {
  state = {
    currScreenshotIdx: 0,
  }

  generateScreenshotNums() {
    let screenshotElems = []
    let numScreenshots = this.props.project.screenshotFiles.length
    for (let i = 0; i < numScreenshots; i++) {
      screenshotElems.push(
        <li
          key={i}
          className={`scr-shot-num ${
            i === this.state.currScreenshotIdx ? 'active-shot' : ''
          }`}
          aria-current={i === this.state.currScreenshotIdx ? 'true' : undefined}
        >
          {i + 1}
        </li>
      )
    }
    if (numScreenshots === 1) {
      return ''
    } else {
      return screenshotElems
    }
  }

  moveActiveScreenshot(increment) {
    let numScreenshots = this.props.project.screenshotFiles.length
    if (
      increment > 0 &&
      this.state.currScreenshotIdx + increment >= numScreenshots
    ) {
      this.setState({ currScreenshotIdx: 0 })
    } else if (increment < 0 && this.state.currScreenshotIdx + increment < 0) {
      this.setState({ currScreenshotIdx: numScreenshots - 1 })
    } else {
      this.setState({
        currScreenshotIdx: this.state.currScreenshotIdx + increment,
      })
    }
  }

  render() {
    // build numbered boxes that light up and indicate which screenshot is active
    // and how many screenshots there are total
    let screenshotElems = this.generateScreenshotNums()
    let activeScreenshot = this.props.project.screenshotFiles[this.state.currScreenshotIdx]
    let projectLabel = this.props.project.sourceCodeSide === 'back'
      ? 'Full-stack build'
      : 'Frontend product'

    // generate tech stack list elements
    let techList = this.props.project.tech.map((techItem, idx) => <li className="tech-item" key={idx}>{techItem}</li> )

    return (
      <article className="project-container">
        <div className="project-copy">
          <p className="project-label">{projectLabel}</p>
          <h2 className="project-title">{this.props.project.title}</h2>
          <p className="project-description">{this.props.project.description}</p>
          <ul className="tech-stack-list">{techList}</ul>
          <div className="site-links">
            <a
              href={this.props.project.demoLink}
              className="site-btn primary-site-btn"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="site-btn-icon" aria-hidden="true">&#8599;</span>
              Live demo
            </a>
            <a
              href={this.props.project.githubLink}
              className="site-btn source-site-btn"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="site-btn-icon" aria-hidden="true">{'{ }'}</span>
              Source code
            </a>
          </div>
        </div>

        <div className="photo-area">
          <div className="screenshot-frame">
            <picture className="picture-holder">
              <source className="project-screenshot" srcSet={`../../static/${activeScreenshot.name}`} media="(min-width: 768px)" />
              <source className="project-screenshot" srcSet={`../../static/${activeScreenshot.mobileName}`} media="(max-width: 769px)" />
              <img className="project-screenshot" src={`../../static/${activeScreenshot.name}`} alt={activeScreenshot.alt}></img>
            </picture>
          </div>
          {this.props.project.screenshotFiles.length !== 1 && (
            <div className="carousel-btns" aria-label={`${this.props.project.title} screenshot controls`}>
              <button
                onClick={() => this.moveActiveScreenshot(-1)}
                className="carousel-nav-btn"
                aria-label="Previous screenshot"
              >
                <span className="carousel-btn-icon" aria-hidden="true">&#10094;</span>
                Previous
              </button>
              <ul className="scr-shots-num-holder">{screenshotElems}</ul>
              <button
                onClick={() => this.moveActiveScreenshot(1)}
                className="carousel-nav-btn"
                aria-label="Next screenshot"
              >
                Next
                <span className="carousel-btn-icon" aria-hidden="true">&#10095;</span>
              </button>
            </div>
          )}
        </div>
      </article>
    )
  }
}
