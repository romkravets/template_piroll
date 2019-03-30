import * as React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { About } from '../about/About.jsx';
import { Home } from  '../home/Home.jsx';
import { Contact } from '../contact/Contact';

import logo from '../../assets/image/logo.png';

import './Header.scss';

export class Header extends React.Component {
   render() {
      return (
           <nav className='global-nav'>
              <div className="container">
                  <div className="row">
                     <div className="col-4 align-content-center">
                     <a className="" href="#">
                        <img className="logo" src={logo} alt="logo"/>
                     </a>
                     </div>
                     <div className="col-4 offset-1">
                           <ul className="global-nav__items">
                              <li className="global-nav__item">
                                 <Link className="global-nav__link" to="/">Home</Link>
                              </li>
                              <li className="global-nav__item">
                                 <Link className="global-nav__link" to="/about">About</Link>
                              </li>
                              <li className="global-nav__item">
                                 <Link className="global-nav__link" to="/work">Work</Link>
                              </li>
                              <li className="global-nav__item">
                                 <Link  className="global-nav__link" to="/process">Process</Link>
                              </li>
                              <li className="global-nav__item">
                                 <Link className="global-nav__link" to="/testimons">Testimonials</Link>
                              </li>
                              <li className="global-nav__item">
                                 <Link className="global-nav__link" to="/contact">Contact</Link>
                              </li>
                           </ul>
                        </div>
               </div>
         </div>
      </nav>
      );
   }
}