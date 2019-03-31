import * as React from 'react';

import { Button } from '../button/Button.jsx';
import { AboutUs } from '../aboutus/AboutUs.jsx';
import { Projects } from '../projects/Projects.jsx';
import { Gallery } from '../gallery/Gallery.jsx';
import { Work } from '../work/Work.jsx';
import { DirectionWork } from '../directionWork/DirectionWork.jsx';


import './Home.scss';

export class Home extends React.Component {
   render() {
      return (
         <div className="container-fluid">
            <header className="header-content">
            <div className="container">
            <div className="row">
               <div className="col-6 offset-6">
               <div className="header-content__description">
                  <h1 className="header-content__title">We Design and Develop</h1>
                  <p className="header-content__text">We are a new design studio based in USA. We have over 
                     20 years of combined experience, and know a thing or two 
                     about designing websites and mobile apps.</p>
                     <Button />
               </div>
               </div>
            </div>
            </div>
         </header>
         <AboutUs />
         <Projects />
         <Gallery />
         <Work />
         <DirectionWork />
         </div>
         
         
      );
   }
}
