//ArgentBank-app\src\store\store.jsx
import { configureStore } from '@reduxjs/toolkit';
//import userReducer from '../features/userSlice';
import rootReducer from '../reducers/index';
import { loginUser } from '../action/loginUser';
import { logoutUser } from '../action/loginUser';
const Store = configureStore({
    //reducer: {
    // user: userReducer,
    //},
    reducer: rootReducer,
    devTools: true // Add your reducers here
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    // serializableCheck: false
    // })
});
Store.dispatch(loginUser());
Store.dispatch(logoutUser());
export default Store;