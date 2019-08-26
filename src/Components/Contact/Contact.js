import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
  render() {
    return (
      <section className="contact-info">
         <h1>Get in touch</h1>
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
        <form className="message-area">
          <label>Drop me a message</label>
          <textarea className="formTextArea">

          </textarea>
        </form>
      </section>
    );
  }
}
