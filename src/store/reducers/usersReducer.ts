import {IUsers, UsersActionTypes, IUsersAction} from "types/UserTypes"

const initialState: IUsers = {
    users: [],
    loading: false,
    error: null,
}

export const usersReducer = (state = initialState, action: IUsersAction): IUsers => {
    switch (action.type) {
        case UsersActionTypes.USERS_FETCH:
            return { users: [],
                loading: true,
                error: null,
                }
        case UsersActionTypes.USERS_FETCH_SUCCESS:
            return { users: action.payload,
                loading: false,
                error: null,
                }
        case UsersActionTypes.USERS_FETCH_ERROR:
            return { users: [],
                loading: false,
                error: action.payload,
                }
        default:
            return state
    }
}