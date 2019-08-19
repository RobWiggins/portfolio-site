import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <section className="about-info">
        <img
          className="headshot"
          src="../../static/headshot.png"
          aria-hidden
          alt="Beautiful photo headshot of Rob Wiggins."
        />
        <h1>I'm Rob Wiggins and I love full-stack web development.</h1>
        <h1>Welcome to my humble corner of the internet.</h1>
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
        
        <Link to="/portfolio">
          <button className="call-action">Check out my work</button>
        </Link>
      </section>
    );
  }
}
