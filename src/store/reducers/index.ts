import {userReducer} from "store/reducers/userReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    userReducer: userReducer
})

export type RootState = ReturnType<typeof rootReducer>
