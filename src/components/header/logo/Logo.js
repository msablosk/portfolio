import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Logo.css';

export class Logo extends Component {
  render() {
    return (
      
      <div className="Logo">
        <NavLink exact to='/'>
          <h2>Mitchell Sablosky</h2>
          <h4>Web Developer</h4>
        </NavLink>
      </div>
    );
  }
}
