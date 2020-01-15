import { combineReducers } from "redux";
import { ProfileReducer, PhotoReducer } from "./reducer/profile";

export default combineReducers({
    profile: ProfileReducer,
    photoUri: PhotoReducer
})