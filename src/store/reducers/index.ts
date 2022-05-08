import {usersReducer} from "store/reducers/usersReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    userReducer: usersReducer
})