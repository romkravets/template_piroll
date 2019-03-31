import * as React from 'react';
import './Gallery.scss';


import bottleImg from '../../assets/image/work/milk.jpg';
import flyers from '../../assets/image/work/flyers.png';
import bag from '../../assets/image/work/bag.jpg';
import phone from '../../assets/image/work/phone.png';
import pancil from '../../assets/image/work/pancil.jpg';
import book from '../../assets/image/work/book.jpg';
import she from '../../assets/image/work/she.jpg';
import honey from '../../assets/image/work/honey.jpg';
import eyeIcon from '../../assets/image/gallery/eye.svg';

export class Gallery extends React.Component {
   render() {
      return (
         <div className="gallery text-center">
            <div className="container-fluid">
            <div class="row no-gutter">
                  <div class="col-xs-6 col-sm-3 col-md-3">
                  <a href="#">
                     <div class="gallery__inner">
                           <img className="gallery__image" src={bottleImg} alt=""/>
                           <div class="gallery__overlay">
                              <img className="gallery__icon" src={eyeIcon} alt=""/>
                           </div>
                     </div>
                  </a>
                  </div>
                  <div class="col-xs-6 col-sm-3 col-md-3">
                     <a href="#">
                        <div class="gallery__inner">
                           <img className="gallery__image" src={flyers} alt=""/>
                           <div class="gallery__overlay">
                              <img className="gallery__icon" src={eyeIcon} alt=""/>
                           </div>
                        </div>
                     </a>
                  </div>
                  <div class="col-xs-6 col-sm-3 col-md-3">
                     <a href="#">
                        <div class="gallery__inner">
                           <img className="gallery__image" src={bag} alt=""/>
                           <div class="gallery__overlay">
                              <img className="gallery__icon" src={eyeIcon} alt=""/>
                           </div>
                        </div>
                     </a>
                  </div>
                  <div class="col-xs-6 col-sm-3 col-md-3">
                     <div class="gallery__inner">
                        <img className="gallery__image" src={phone} alt=""/>
                     <div class="gallery__overlay">
                        <img className="gallery__icon" src={eyeIcon} alt=""/>
                     </div>
                     </div>
                  </div>
                  <div class="col-xs-6 col-sm-3 col-md-3">
                     <a href="#">
                        <div class="gallery__inner">
                           <img className="gallery__image" src={book} alt=""/>
                           <div class="gallery__overlay">
                              <img className="gallery__icon" src={eyeIcon} alt=""/>
                           </div>
                        </div>
                     </a>
                  </div>
                  <div class="col-xs-6 col-sm-3 col-md-3">
                     <a href="#">
                        <div class="gallery__inner">
                           <img className="gallery__image" src={pancil} alt=""/>
                           <div class="gallery__overlay">
                              <img className="gallery__icon" src={eyeIcon} alt=""/>
                           </div>
                        </div>
                     </a>
                  </div>
                  <div class="col-xs-6 col-sm-3 col-md-3">
                     <a href="#">
                     <div class="gallery__inner">
                        <img className="gallery__image" src={honey} alt=""/>
                        <div class="gallery__overlay">
                           <img className="gallery__icon" src={eyeIcon} alt=""/>
                        </div>
                     </div>
                     </a>
                  </div>
                  <div class="col-xs-6 col-sm-3 col-md-3">
                     <a href="#">
                     <div class="gallery__inner">
                        <img className="gallery__image" src={she} alt=""/>
                        <div class="gallery__overlay">
                           <img className="gallery__icon" src={eyeIcon} alt=""/>
                        </div>
                     </div>
                     </a>
                  </div>
               </div>
                  <div className="col-12 text-center gallery__button">
                        <button className="button gallery__button_link" href="">load more work</button>
                  </div>
            </div>
         </div>
      );
   }
}