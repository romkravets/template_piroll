import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { About } from './components/about/About.jsx';
// import { Home } from  './components/home/Home.jsx';
// import { Contact } from './components/contact/Contact.jsx';
import  { Header } from './components/header/Header.jsx';
import  { Footer } from './components/footer/Footer.jsx';
import  { Main } from './components/main/Main.jsx';
 

import './App.scss';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Main/>
          <Footer/>
        </div>
        </Router>
    );
  }
}

export default App;
