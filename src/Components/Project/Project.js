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

    return (
      <div className="project-container">
        <h2 className="project-title">{this.props.project.title}</h2>

        <div className="photo-area">
          <img
            className="project-screenshot"
            src={`../../static/${this.props.project.screenshotFiles[this.state.currScreenshotIdx].name}`}
            alt={
              this.props.project.screenshotFiles[this.state.currScreenshotIdx]
                .alt
            }
          ></img>
          {this.props.project.screenshotFiles.length !== 1 && (
            <div className="carousel-btns">
              <button
                onClick={() => this.moveActiveScreenshot(-1)}
                className="carousel-nav-btn"
              >
                &#10094; Prev
              </button>
              <button
                onClick={() => this.moveActiveScreenshot(1)}
                className="carousel-nav-btn"
              >
                Next &#10095;
              </button>
            </div>
          )}
          <ul className="scr-shots-num-holder">{screenshotElems}</ul>
        </div>
        <p className="project-description">{this.props.project.description}</p>
        <div className="site-links">
          <a
            href={this.props.project.demoLink}
            className="site-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="site-btn">Visit Site</button>
          </a>
          <a
            href={this.props.project.githubLink}
            className="site-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="site-btn">Github</button>
          </a>
        </div>
      </div>
    )
  }
}
