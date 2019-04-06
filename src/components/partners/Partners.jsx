import * as React from 'react';
import './Partners.scss';

import handmade  from "../../assets/image/partners/handmade.png"
import monntain  from "../../assets/image/partners/monntain.png"
import regularfit  from "../../assets/image/partners/regularfit.png"
import handmadeetwo  from "../../assets/image/partners/handmadeetwo.png"
import mountainbike  from "../../assets/image/partners/mountainbike.png"

export class Partners extends React.Component {
   render() {
      return (
            <div className="partner-box">
               <div className="container">
                  <div className="row">
                     <div className="col">
                        <div className="partner-box__container">
                           <img className="partner-box__image" src={handmade} alt=""/>
                        </div>
                     </div>
                     <div className="col">
                        <div className="partner-box__container">
                           <img className="partner-box__image" src={monntain} alt=""/>
                        </div>
                     </div>
                     <div className="col">
                        <div className="partner-box__container">
                           <img className="partner-box__image" src={regularfit} alt=""/>
                        </div>
                     </div>
                     <div className="col">
                        <div className="partner-box__container">
                           <img className="partner-box__image" src={handmadeetwo} alt=""/>
                        </div>
                     </div>
                     <div className="col">
                        <div className="partner-box__container">
                           <img className="partner-box__image" src={mountainbike} alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

      );
   }
}
