import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { About } from './components/about/About.tsx';
import { Home } from  './components/home/Home.tsx';
import { Contact } from './components/contact/Contact.tsx';
 
import logo from './logo.svg';
import './App.scss';

export class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/contact" component={ Contact } />
        </div>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
