import React from 'react';
import App from './app';
import { Route } from 'react-router-dom';


export default (
    <Route exact path={ App.path } component={ App } />
);
