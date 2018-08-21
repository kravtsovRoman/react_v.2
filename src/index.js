import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import configureStore from './store';
import { Header } from './components/index';
import { DevTools } from './utils/index';


const store = configureStore({});

ReactDOM.render((
    <Provider store={ store }>
        <HashRouter>
            <div>
                <Header />

                <div className='container'>
                    { routes }
                </div>

                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        </HashRouter>
    </Provider>
),
    document.getElementById('app'));

