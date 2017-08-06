import React, { Component } from 'react';
import './Header.css';
import { Logo } from './logo/Logo'
import { Nav } from './nav/Nav'

export class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Nav />
      </header>
    );
  }
}
