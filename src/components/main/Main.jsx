import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { About } from '../about/About';
import { Home } from  '../home/Home';
import { Contact } from '../contact/Contact';
import { Process } from '../pages/process/Process';

import './Main.scss';

export class Main extends React.Component {
   render() {
      return (
         <main>
            <div className="container-fluid">
               <div className="row">
               <Switch className="main">
                  <Route exact={true} path="/" component={ Home } />
                  <Route path="/about" component={ About } />
                  <Route path="/contact" component={ Contact } />
                  <Route path="/process" component={ Process } />
               </Switch>
               </div>
               </div>
         </main>

      );
   }
}