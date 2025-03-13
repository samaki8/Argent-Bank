//ArgentBank-app\src\store\store.jsx
import { configureStore } from '@reduxjs/toolkit';
//import userReducer from '../features/userSlice';
import rootReducer from '../reducers/index';
import { loginUser } from '../action/loginUser';
import { logoutUser } from '../action/loginUser';
import { getuser } from '../action/user.action';
import thunk from 'redux-thunk';
const Store = configureStore({
    //reducer: {
    // user: userReducer,
    //},
    reducer: rootReducer,
    devTools: true // Add your reducers here
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    // })
});
Store.dispatch(loginUser());
Store.dispatch(logoutUser());
Store.dispatch(getuser);

export default Store;
/*
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;*/