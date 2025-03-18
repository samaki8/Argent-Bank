//ArgentBank-app\src\store\store.jsx
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';


const Store = configureStore({

    reducer: {

        user: userReducer,

    },
    devTools: true, //  Activer les outils de développement Redux -> à suuprimer en Production
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),

});

export default Store;
