import React, { Component } from 'react'
import './Project.css'

export default class Project extends Component {
  state = {
    currScreenshotIdx: 0,
  }

  setScreenshot = (idx) => {
    this.setState({ currScreenshotIdx: idx })
  }

  moveActiveScreenshot(increment) {
    const numScreenshots = this.props.project.screenshotFiles.length
    this.setState((prev) => {
      const next = prev.currScreenshotIdx + increment
      if (next >= numScreenshots) return { currScreenshotIdx: 0 }
      if (next < 0) return { currScreenshotIdx: numScreenshots - 1 }
      return { currScreenshotIdx: next }
    })
  }

  render() {
    const { project, index } = this.props
    const activeScreenshot = project.screenshotFiles[this.state.currScreenshotIdx]
    const projectLabel = project.sourceCodeSide === 'back'
      ? 'Full-stack product'
      : 'Frontend product'
    const techList = project.tech.map((techItem) => (
      <li className="tech-item" key={techItem}>{techItem}</li>
    ))
    const hasCarousel = project.screenshotFiles.length > 1

    return (
      <article className="project-container" id={project.slug}>
        <div className="project-copy">
          <p className="project-label">
            <span>{String(index + 1).padStart(2, '0')}</span>
            {projectLabel}
          </p>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-lede">{project.lede}</p>
          <div className="site-links">
            <a
              href={project.demoLink}
              className="site-btn primary-site-btn"
              rel="noopener noreferrer"
              target="_blank"
            >
              Live demo
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={project.githubLink}
              className="site-btn source-site-btn"
              rel="noopener noreferrer"
              target="_blank"
            >
              Source code
            </a>
          </div>
          <p className="project-description">{project.description}</p>
          <ul className="tech-stack-list">{techList}</ul>
        </div>

        <div className="photo-area">
          <figure className="screenshot-frame">
            <picture className="picture-holder">
              <source srcSet={`/static/${activeScreenshot.name}`} media="(min-width: 768px)" />
              <source srcSet={`/static/${activeScreenshot.mobileName}`} media="(max-width: 767px)" />
              <img
                className="project-screenshot"
                src={`/static/${activeScreenshot.name}`}
                alt={activeScreenshot.alt}
              />
            </picture>
            <figcaption className="screenshot-caption">{activeScreenshot.alt}</figcaption>
          </figure>
          {hasCarousel && (
            <div className="carousel-btns" aria-label={`${project.title} screenshot controls`}>
              <button
                type="button"
                onClick={() => this.moveActiveScreenshot(-1)}
                className="carousel-nav-btn"
                aria-label="Previous screenshot"
              >
                Previous
              </button>
              <div className="scr-shots-num-holder" role="tablist" aria-label="Screenshots">
                {project.screenshotFiles.map((shot, i) => (
                  <button
                    type="button"
                    role="tab"
                    key={shot.name}
                    className={`scr-shot-num ${i === this.state.currScreenshotIdx ? 'active-shot' : ''}`}
                    aria-selected={i === this.state.currScreenshotIdx}
                    aria-label={`Show screenshot ${i + 1}: ${shot.alt}`}
                    onClick={() => this.setScreenshot(i)}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => this.moveActiveScreenshot(1)}
                className="carousel-nav-btn"
                aria-label="Next screenshot"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </article>
    )
  }
}
