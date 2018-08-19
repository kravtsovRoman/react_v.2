import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import { HashRouter } from 'react-router-dom';
import configureStore from './store';



const store = configureStore({});

ReactDOM.render((
    <Provider store={ store }>
        <HashRouter>
            { routes }
        </HashRouter>
    </Provider>
),
    document.getElementById('app'));

