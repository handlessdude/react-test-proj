import {usersReducer} from "store/reducers/usersReducer";
import {userReducer} from "store/reducers/userReducer";
import {modalReducer} from "store/reducers/modalReducer";

import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    usersReducer,
    userReducer,
    modalReducer
})

export type RootState = ReturnType<typeof rootReducer>
