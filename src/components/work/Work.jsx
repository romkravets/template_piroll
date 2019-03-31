import * as React from 'react';
import { Player, BigPlayButton, LoadingSpinner, ControlBar, PlayToggle } from 'video-react';
import './Work.scss';


import videoMp4 from '../../assets/video/person.mp4';
import poster from '../../assets/video/pexels.jpg'

export class Work extends React.Component {
   render() {
      return (
            <section className="work">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-12">
                     <h2 className="title work__title">Our Work Process</h2>
                     <p className="description work__description">Was years it seasons was there form he in in them together over that,<br />
                        third sixth gathered female creeping bearing behold years.</p>
                     </div>
                  </div>
               </div>
               <div className="container">
                  <div className="row">
                     <div className="col">
                        <Player className="work__player" src={videoMp4} poster={poster} fluid={true} >
                           <BigPlayButton className="work__play" position="center" />
                           <LoadingSpinner />
                           <ControlBar autoHide={true} disableDefaultControls={true} >
                           <PlayToggle />
                           </ControlBar>
                        </Player>
                     </div>
                  </div>
               </div>
            </section>
      );
   }
}