import * as React from 'react';
import './Projects.scss';

import projectsicon from '../../assets/image/projects/projects_compil.png';
import timeicon from '../../assets/image/projects/timeicon.png';
import staricon from '../../assets/image/projects/staricon.png';
import harticon from '../../assets/image/projects/harticon.png';

export class Projects extends React.Component {
   render() {
      return (
            <section className="projects">
               <div className="container">
                  <div className="row">
                     <div className="col-3">
                        <div className="projects__items">
                           <div className="projects__items_image">
                                 <img src={projectsicon} alt=""/>
                           </div>
                        <div className="projects__description">
                              <span>548</span>
                              <p>projects completed</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-3">
                        <div className="projects__items">
                           <div className="projects__items_image">
                                 <img src={timeicon} alt=""/>
                           </div>
                        <div className="projects__description">
                              <span>1465</span>
                              <p>WORKING HOURS</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-3">
                        <div className="projects__items">
                           <div className="projects__items_image">
                                 <img src={staricon} alt=""/>
                           </div>
                        <div className="projects__description">
                              <span>612</span>
                              <p>POSITIVE FEEDBACKS</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-3">
                        <div className="projects__items">
                           <div className="projects__items_image">
                                 <img src={harticon} alt=""/>
                           </div>
                        <div className="projects__description">
                              <span>548</span>
                              <p>HAPPY CLIENTS</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
      );
   }
}