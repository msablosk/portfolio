import React, { Component } from 'react';
import './About.css';
import me from './me.png';

export class About extends Component {
  render() {
    return (
      <section className="About">
        <img src={ me } alt="Photograph of Mitch Sablosky"/>
        <h2>Hi, I'm Mitch</h2>
        <p>I'm a Front-end web developer. I got my start hacking around doing CSS changes for my parent's health food company. From there I taught myself all about HTML, JS and several Backend languages. I'm currently living in Germany working for <a href="http://limtec.de/">LimTec GmbH</a> where I work mostly on PHP based CMS solutions. In my freetime I like to play around with Full-stack Javascript and Javascript Front-end Frameworks.
        </p>
      </section>
    );
  }
}
