import { combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import authReducer from './authReducer';
import categoryReducers from './categoryReducers';


const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoryReducers
});

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(
    rootReducer, 
);

export default store;