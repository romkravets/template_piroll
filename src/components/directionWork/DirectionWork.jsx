import * as React from 'react';
import './DirectionWork.scss';

import diamond from '../../assets/image/directionwork/diamond.svg';
import phone from '../../assets/image/directionwork/smartphone.svg';
import cupid from '../../assets/image/directionwork/cupid.svg';
import gamepad from '../../assets/image/directionwork/gamepad.svg';
import aeroplane from '../../assets/image/directionwork/aeroplane.svg';
import star from '../../assets/image/directionwork/star.svg';
import magicwand from '../../assets/image/directionwork/magic-wand.svg';
import paint from '../../assets/image/directionwork/paint.svg';


export class DirectionWork extends React.Component {
   render() {
      return (
         <div className="direction-work text-center">
            <div className="container-fluid">
               <div class="row no-gutter">
                     <div class="col-xs-6 col-sm-3 col-md-3">
                        <div class="direction-work__container">
                           <img className="direction-work__icon" src={diamond} alt=""/>
                           <span className="direction-work__title">UI / UX DESIGN</span>
                           <p className="direction-work__description">Be set fourth land god darkness<br /> make it wherein own</p>
                        </div>
                     </div>
                     <div class="col-xs-6 col-sm-3 col-md-3">
                        <div class="direction-work__container">
                           <img className="direction-work__icon" src={cupid} alt=""/>
                           <span className="direction-work__title">web development</span>
                           <p className="direction-work__description">A she'd them bring void moving<br /> third she'd kind fill</p>
                        </div>
                     </div>
                     <div class="col-xs-6 col-sm-3 col-md-3">
                        <div class="direction-work__container">
                           <img className="direction-work__icon" src={ phone} alt=""/>
                           <span className="direction-work__title">app / mobile</span>
                           <p className="direction-work__description">Morning his saying moveth it <br /> multiply appear life be</p>
                        </div>
                     </div>
                     <div class="col-xs-6 col-sm-3 col-md-3">
                        <div class="direction-work__container">
                           <img className="direction-work__icon" src={gamepad} alt=""/>
                           <span className="direction-work__title">game design</span>
                           <p className="direction-work__description">Dominion man second spirit he,<br /> earth they're creeping</p>
                        </div>
                     </div>
                     </div>
                  </div>
            <div className="container-fluid">
               <div class="row no-gutter direction-work__padding-row">
                     <div class="col-xs-6 col-sm-3 col-md-3">
                        <div class="direction-work__container">
                           <img className="direction-work__icon" src={aeroplane} alt=""/>
                           <span className="direction-work__title">SEO / marketing</span>
                           <p className="direction-work__description">Morning his saying moveth it <br /> multiply appear life be</p>
                        </div>
                     </div>
                     <div class="col-xs-6 col-sm-3 col-md-3">
                        <div class="direction-work__container">
                           <img className="direction-work__icon" src={star} alt=""/>
                           <span className="direction-work__title">photography</span>
                           <p className="direction-work__description">Creepeth one seas cattle grass <br /> give moving saw give</p>
                        </div>
                     </div>
                     <div class="col-xs-6 col-sm-3 col-md-3">
                        <div class="direction-work__container">
                           <img className="direction-work__icon" src={magicwand} alt=""/>
                           <span className="direction-work__title">graphic design</span>
                           <p className="direction-work__description">Open, great whales air rule for,<br /> fourth life whales</p>
                        </div>
                     </div>
                     <div class="col-xs-6 col-sm-3 col-md-3">
                        <div class="direction-work__container">
                           <img className="direction-work__icon" src={paint} alt=""/>
                           <span className="direction-work__title">illustrations</span>
                           <p className="direction-work__description">Whales likeness hath, man kind<br />>for them air two won't</p>
                        </div>
                  </div>
               </div>
         </div>
      </div>
      );
   }
}
