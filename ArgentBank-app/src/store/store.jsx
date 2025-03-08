//ArgentBank-app\src\store\store.jsx
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
const Store = configureStore({
    reducer: {
        user: userReducer,
    }, // Add your reducers here
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    // serializableCheck: false
    // })
});

export default Store;