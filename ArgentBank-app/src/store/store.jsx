//ArgentBank-app\src\store\store.jsx
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import { sessionMiddleware } from '../middleware/sessionMiddleware'; // Importer le middleware de session
// Importer le middleware de session


const Store = configureStore({

    reducer: {

        user: userReducer,

    },
    devTools: true, //  Activer les outils de développement Redux -> à suuprimer en Production
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sessionMiddleware), // Ajouter le middleware de session


});

export default Store;
