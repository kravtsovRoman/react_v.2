import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { TodoPage } from './pages/todo';
import { ContactPage } from './pages/contact';
import { ListPage } from './pages/list';
import { ItemDetails } from './pages/list';
import  ErrorPage from './pages/error/index';


export default (
        <Switch>
            <Route exact path={ TodoPage.path } component={ TodoPage } />

            <Route path={ ListPage.path + '/:id' } component={ ItemDetails } />

            <Route path={ ListPage.path } component={ ListPage } />

            <Route path={ ContactPage.path } component={ ContactPage } />

            <Route component={ ErrorPage } />
        </Switch>
);
