import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './reducers';
import { DevTools } from './utils/index';

function _applyMiddleware() {
    const middleWare = [

    ];

    return applyMiddleware(...middleWare);
}

export default function configureStore(initialState) {
    const store = compose(
        _applyMiddleware(),
        DevTools.instrument()
    )(createStore)(rootReducers, initialState);

    return store;
}

