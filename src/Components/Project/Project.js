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
    return screenshotElems
  }

  moveActiveScreenshot(increment) {}

  render() {
    console.log('PROJECT: ', this.props.project)

    // build numbered boxes that light up and indicate which screenshot is active
    // and how many screenshots there are total
    let screenshotElems = this.generateScreenshotNums()

    return (
      <div className="project-container">
        <div className="photo-area">
        <img
          className="project-screenshot"
          src={`../../static/${this.props.project.screenshotFiles[this.state.currScreenshotIdx].name}`}
          alt={
            this.props.project.screenshotFiles[this.state.currScreenshotIdx].alt
          }
        ></img>
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
        <ul className="scr-shots-num-holder">{screenshotElems}</ul>
        </div>
        <p className="project-description">
          {this.props.project.description}
        </p>
      </div>
    )
  }
}
