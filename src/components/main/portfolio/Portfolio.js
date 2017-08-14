import React, { Component } from 'react';
import './Portfolio.css';
import paper from './paper.png';
import notey from './notey.png';
import onePage from './one-page.png';
import der from './der.png';
import weather from './weather.png';

export class Portfolio extends Component {
  render() {
    return (
      <section className="Portfolio">
        <ul>
          <li>
            <a href="./pages/paper/">
              <img src={ paper } alt="Newspaper Times website screenshot"/>
            </a>
            <p>Newspaper Times, a website I made to play around with Zurb Foundation and the Jquery plugin Animsition.</p>
          </li> 
          <li>
            <a href="./pages/notey/">
              <img src={ notey } alt="Notey note website screenshot"/>
            </a>
            <p>Notey Note, a single page application for taking notes I wrote using Angular.js, the Skeleton CSS framework, and the SlickNav Jquery plugin to handle mobile navigation.</p>
          </li>  
          <li>
            <a href="./pages/one-pager/">
              <img src={ onePage } alt="Bootstrap One Pager, is a simple one page brochure site I made with Bootstrap for a generic app/product/service."/>
            </a>
            <p>Bootstrap One Pager, is a simple one page brochure site I made with Bootstrap for a generic app/product/service.</p>
          </li>  
          <li>
            <a href="./pages/Der, Die, Das/">
              <img src={ der } alt="Der, Die, Das website screenshot"/>
            </a>
            <p>Der, Die, Das my first solo built Javascript/Jquery app for practicing German articles and learning how to use cookies.</p>
          </li>
          <li>
            <a href="./pages/weather/">
              <img src={ weather } alt="Super Simple Weather website screenshot"/>
            </a>
            <p>Super Simple Weather, a website I made to play around with browser geolocation and the OpenWeatherMap API.</p>
          </li>  
        </ul>
      </section>
    );
  }
}
