import {IUsers, IUser, UsersActionTypes, IUsersAction} from "types/UserTypes"

const initialState: IUsers = {
    users: [] as IUser[],
    loading: false,
    error: null,
}

export const userReducer = (state = initialState, action: IUsersAction): IUsers => {
    switch (action.type) {
        case UsersActionTypes.USERS_FETCH:
            return { users: [] as IUser[],
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