import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NewComponent from './new';


class App extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1>App Component</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact  path={'/'} component={ App } />
            <Route path={'/new'} component={ NewComponent } />
        </Switch>
    </BrowserRouter>,
    document.getElementById('app')
);


