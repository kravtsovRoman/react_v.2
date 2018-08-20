import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from './pages/home';
import { ContactPage } from './pages/contact';


export default (

        <Switch>
            <Route exact path={ HomePage.path } component={ HomePage } />
            <Route path={ ContactPage.path } component={ ContactPage } />
        </Switch>

);
