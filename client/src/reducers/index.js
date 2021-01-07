import { combineReducers } from "redux";
import errorReducer from './errorReducer';
import addressReducer from "./addressReducer";

export default combineReducers({
    errors: errorReducer,
    address: addressReducer,
});
