import * as React from 'react';
import signature  from '../../assets/image/signature.png';
import './AboutUs.scss';

export class AboutUs extends React.Component {
   render() {
      return (
         <section className="about-us">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                  <h2 className="title about-us__title">About Us</h2>
                  <p className="description about-us__description">Divide have don't man wherein air fourth. Own itself make have night won't make.<br />
                     A you under Seed appear which good give. Own give air without fowl moveth dry first<br />
                     heaven fruit, dominion she'd won't very all.</p>
                  </div>
                  <div className="col-12">
                     <div className="about-us__image-box">
                     <img className="about-us__image" src={signature} alt="signature"/>
                     </div>
                  </div>
               </div>
            </div>
            <div className="about-us-skills">
               <div className="container">
                  <div className="row">
                     <div className="col-6 about-us-skills__position">
                     <div className="about-us-skills__description">
                     <h3>Professional Skills</h3>
                        <p class="about-us-skills__text">UI/UX Design<span>75%</span></p>
                        <div class="about-us-skills__container">
                        <div class="about-us-skills__skills html"></div>
                        </div>

                        <p class="about-us-skills__text">web development<span>90%</span></p>
                        <div class="about-us-skills__container">
                        <div class="about-us-skills__skills css"></div>
                        </div>

                        <p class="about-us-skills__text">marketing<span>65%</span></p>
                        <div class="about-us-skills__container">
                        <div class="about-us-skills__skills js"></div>
                        </div>
                     </div>

                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}