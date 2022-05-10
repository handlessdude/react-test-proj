import {IUser, IUserState,  UserActionTypes, IUserAction} from "types/UserTypes"

const initialState: IUserState = {
    user: {
        id: 1,
        email: "",
        first_name: "",
        last_name:  "",
        avatar: "",
    } as IUser,
    loading: true,
    error: null,
}

export const userReducer = (state = initialState, action: IUserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.USER_FETCH:
            return {
                ...state,
                loading: true
                }
        case UserActionTypes.USER_FETCH_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                loading: false,
                }
        case UserActionTypes.USER_FETCH_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
                }
        default:
            return state
    }
}