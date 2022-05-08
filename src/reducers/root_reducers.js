import userInfoReducer from "./userInfo";
import { combineReducers } from "redux";

const allReducer = combineReducers( {
    userInfoState: userInfoReducer
});

export default allReducer;