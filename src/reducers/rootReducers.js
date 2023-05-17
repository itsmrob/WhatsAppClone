import { combineReducers } from "redux";
import oAuthSlice from "./oAuthSlice";

const rootReducer = combineReducers({
    auth: oAuthSlice
});

export default rootReducer;