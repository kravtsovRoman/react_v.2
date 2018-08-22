import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { TodoReducers } from './pages/todo/index';

export default combineReducers({
    routing: routerReducer,
    ...TodoReducers
});
