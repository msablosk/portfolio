import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

let year = new Date().getFullYear();


export class Footer extends Component {
  render() {
    return (
      <footer>
        <NavLink exact to='/' activeClassName="active"><i className="fa fa-home fa-lg"></i></NavLink>
        <a href="mailto:sabloskymitchell@gmail.com"><i className="fa fa-envelope"></i></a>
        <a href="https://github.com/msablosk"><i className="fa fa-github-square fa-lg"></i></a>
        <p>&copy; { year } Mitchell Sablosky</p>
      </footer>
    );
  }
}
