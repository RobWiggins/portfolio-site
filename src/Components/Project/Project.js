import React, { Component } from 'react'

import 'Project.css'

export default class Project extends Component {

  state = {
    currScreenshotIdx : 0,
  }


  render() {
    console.log('PROJECT: ', this.props.project)

    return (
      



      <div className="project-container">
        <img
          className="project-screenshot barometer-screenshot"
          src="../../static/barometer_full.png"
          alt="barometer home search page screenshot, containing a list of tweets and a bar graph of different emotions."
        ></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          deserunt, doloremque consequatur enim ducimus dolorum molestiae, nobis
          adipisci expedita sequi dignissimos quaerat nisi saepe laudantium
          nihil nesciunt quidem consectetur! Culpa. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Cumque tenetur nisi nostrum, assumenda
          accusantium minima dolorem consequuntur, itaque laboriosam deleniti,
          non repudiandae tempora ex ut tempore inventore perspiciatis?
          Distinctio, non!
        </p>
      </div>
    )
  }


}