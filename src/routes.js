import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from './pages/home';
import { ContactPage } from './pages/contact';
import  ErrorPage from './pages/error/index';


export default (
        <Switch>
            <Route exact path={ HomePage.path } component={ HomePage } />
            <Route path={ ContactPage.path } component={ ContactPage } />
            <Route path='*' component={ ErrorPage } />
        </Switch>
);
