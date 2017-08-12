import React, { Component } from 'react';
import './Main.css';
import { Portfolio } from './portfolio/Portfolio';
import { About } from './about/About';
import { Contact } from './contact/Contact';
import { NotFound } from './not-found/NotFound';
import { Switch, Route } from 'react-router-dom';

export class Main extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
           <Route exact path='/' component={ Portfolio }/>
           <Route path='/about' component={ About }/>
           <Route path='/contact' component={ Contact }/>
           <Route component={ NotFound }/>
        </Switch>
      </div>
    );
  }
}
