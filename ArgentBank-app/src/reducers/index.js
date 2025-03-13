import { combineReducers } from "redux";
import userReducer from './user.reducer';
import { loginUser } from "./auth.reducer";


export default combineReducers({
    //REDUCERS
    userReducer,
    loginUser,
    });