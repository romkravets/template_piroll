import * as React from 'react';

import './Footer.scss';

export class Footer extends React.Component {
   render() {
      return (
         <footer className="footer">
            <div className="container">
               <div className="row">
                  <div className="col-3">1</div>
                  <div className="col-3">2</div>
                  <div className="col">3</div>
                  <div className="col">4</div>
                  <div className="col">5</div>
               </div>
            </div>
         </footer>
      );
   }
}