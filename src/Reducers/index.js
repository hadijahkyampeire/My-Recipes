import { combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import authReducer from './authReducer';


const rootReducer = combineReducers({
    auth: authReducer
});

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(
    rootReducer, 
);

export default store;