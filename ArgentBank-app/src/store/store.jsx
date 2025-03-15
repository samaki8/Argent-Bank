//ArgentBank-app\src\store\store.jsx
import { configureStore } from '@reduxjs/toolkit';
//import userReducer from '../features/userSlice';
//import rootReducer from '../reducers/index';
import authReducer from '../features/authSlice';
//import { loginUser } from '../action/loginUser';
//import { logoutUser } from '../action/logoutUser';
//import { getuser } from '../action/user.action';
import { thunk } from 'redux-thunk';
const Store = configureStore({

    reducer: {
        auth: authReducer,

    },
    devTools: true, //  Activer les outils de développement Redux -> à suuprimer en Production
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),

});

export default Store;
