import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
            <li><NavLink exact to='/' activeClassName="active">Portfolio</NavLink></li>
            <li><NavLink to='/about' activeClassName="active">About</NavLink></li>
            <li><NavLink to='/contact' activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
    );
  }
}
