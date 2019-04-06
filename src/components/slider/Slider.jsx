 import * as React from 'react';

 import  './Slider.scss';

export class Slider extends React.Component {
  render() {
    return (
      <div className="slick-slide">
        <div className="container-fluid">
          <div className="row">
            <h3 className="slick-slide__text">“ Outstanding job and exceeded all expectations. It was a pleasure<br />to work with them on a sizable first project and am looking<br/>forward to start the next one asap.”</h3>
            <p className="slick-slide__author">Michael Hopkins</p>
          </div>
        </div>
      </div>
    )
  }
}