import {usersReducer} from "store/reducers/usersReducer";
import {userReducer} from "store/reducers/userReducer";

import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    usersReducer,
    userReducer
})

export type RootState = ReturnType<typeof rootReducer>
