import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './reducers';

function _applyMiddleware() {
    const middleWare = [

    ];

    return applyMiddleware(...middleWare);
}

export default function configureStore(initialState) {
    const store = compose(
        _applyMiddleware()
    )(createStore)(rootReducers, initialState);

    return store;
}

