import {IUsersState, IUser, UsersActionTypes, IUsersAction} from "types/UserTypes"

const initialState: IUsersState = {
    users: [] as IUser[],
    loading: false,
    error: null,
    page: 1,
    per_page: 6,
    total_pages: 2,
}

export const userReducer = (state = initialState, action: IUsersAction): IUsersState => {
    switch (action.type) {
        case UsersActionTypes.USERS_FETCH:
            return {
                ...state,
                loading: true
                }
        case UsersActionTypes.USERS_FETCH_SUCCESS:
            return {
                ...state,
                users: action.payload.users,
                per_page: action.payload.per_page,
                total_pages: action.payload.total_pages,
                loading: false,
                }
        case UsersActionTypes.USERS_FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                }
        case UsersActionTypes.USERS_SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        default:
            return state
    }
}