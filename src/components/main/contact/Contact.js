import React, { Component } from 'react';
import './Contact.css';

export class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <section>
          <h2>General Information</h2>
          <p>I am currently working full-time, but am always open for small side projects.</p>
        </section>
        <section>
          <h2>Contact Details</h2>
          <ul>
            <li><i className="fa fa-phone"></i><a href="tel:+49 160 93244582">+49 160 93244582</a></li>
            <li><i className="fa fa-envelope"></i><a href="mailto:sabloskymitchell@gmail.com">sabloskymitchell@gmail.com</a></li>
          </ul>
        </section>
      </div>
    );
  }
}
