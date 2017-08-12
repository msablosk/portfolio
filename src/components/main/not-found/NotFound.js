import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';

export class NotFound extends Component {
  render() {
    return (
      <section className="NotFound">
        <h2>404</h2>
        <p>Uh oh this doesn't look like the page you were looking for, maybe try <NavLink to='/'>Home</NavLink>?</p>
      </section>
    );
  }
}
