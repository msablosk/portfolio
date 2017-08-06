import React, { Component } from 'react';
import './Footer.css';

let year = new Date().getFullYear();


export class Footer extends Component {
  render() {
    return (
      <footer className="App">
        <p>&copy; { year } Mitchell Sablosky</p>
      </footer>
    );
  }
}
