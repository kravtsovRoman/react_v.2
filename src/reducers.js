import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { TodoReducers } from './pages/todo/index';
import { ListReducer } from './pages/list/index';

export default combineReducers({
    routing: routerReducer,
    ...TodoReducers,
    ...ListReducer
});
