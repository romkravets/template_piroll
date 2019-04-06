import * as React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import './Footer.scss';

export class Footer extends React.Component {
   render() {
      return (
         <footer className="footer">
            <div className="container">
               <div className="row">
                  <div className="col-3">
                     <div className="footer__box">
                        <h5 className="footer__title">Piroll Design, Inc.</h5>
                        <p className="footer__designer">© 2017 Piroll. All rights reserved.<br />Designed by robirurk.</p>
                     </div>
                  </div>
                  <div className="col-3">
                  <div className="footer__box">
                        <a className="footer__email" href="mailto:hello@pirolltheme.com">hello@pirolltheme.com</a>
                        <p className="footer__phone">+44 987 065 908 </p>
                     </div>
                  </div>
                  <div className="col">
                  <div className="footer__box">
                        <ul className="footer__items">
                           <li className="footer__item">
                           <Link className="footer__link" to="/process">Projects</Link>
                           </li>
                           <li className="footer__item">
                           <Link className="footer__link" to="/about">About</Link>
                           </li>
                           <li className="footer__item">
                           <Link className="footer__link" to="/services">Services</Link>
                           </li>
                           <li className="footer__item">
                              <a className="footer__link" href="#" >Carreer</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col">
                  <div className="footer__box">
                        <ul className="footer__items">
                           <li className="footer__item">
                           <Link className="footer__link" to="/process">News</Link>
                           </li>
                           <li className="footer__item">
                           <Link className="footer__link" to="/about">Events</Link>
                           </li>
                           <li className="footer__item">
                           <Link className="footer__link" to="/services">Contact</Link>
                           </li>
                           <li className="footer__item">
                              <a className="footer__link" href="#" >Legals</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col">
                  <div className="footer__box">
                        <ul className="footer__items">
                           <li className="footer__item">
                           <Link className="footer__link" to="/process">Facebook</Link>
                           </li>
                           <li className="footer__item">
                           <Link className="footer__link" to="/about">Twitter</Link>
                           </li>
                           <li className="footer__item">
                           <Link className="footer__link" to="/services">Instagram</Link>
                           </li>
                           <li className="footer__item">
                              <a className="footer__link" href="#" >Dribbble</a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      );
   }
}