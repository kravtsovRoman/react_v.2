import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { TodoPage } from './pages/todo';
import { ContactPage } from './pages/contact';
import  ErrorPage from './pages/error/index';


export default (
        <Switch>
            <Route exact path={ TodoPage.path } component={ TodoPage } />
            <Route path={ ContactPage.path } component={ ContactPage } />
            <Route path='*' component={ ErrorPage } />
        </Switch>
);
