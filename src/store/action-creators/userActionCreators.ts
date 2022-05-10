import {IUserAction, IUsersAction, UserActionTypes, UsersActionTypes} from "types/UserTypes";
import {Dispatch} from "redux";
import axios from "axios";
const { REACT_APP_API } = process.env;

export const fetchUser = (userId: string | number) => {
    return async (dispatch: Dispatch<IUserAction>) => {
        try {
            dispatch({type: UserActionTypes.USER_FETCH})
            const res = await axios.get(`${REACT_APP_API}/users/${userId}`)
            //console.log(res)
            dispatch({type: UserActionTypes.USER_FETCH_SUCCESS,
                            payload: {
                    user: res.data.data
            }})
        } catch (e) {
            dispatch({type: UserActionTypes.USER_FETCH_ERROR,
                            payload: 'Error during user fetch'})
        }
    }
}

export const fetchUsers = (page: number = 1, per_page: number = 6) => {
    return async (dispatch: Dispatch<IUsersAction>) => {
        try {
            dispatch({type: UsersActionTypes.USERS_FETCH})
            const res = await axios.get(`${REACT_APP_API}/users`, {
                params: {page: page, per_page: per_page}
            })
            dispatch({type: UsersActionTypes.USERS_FETCH_SUCCESS, payload: {
                per_page: res.data.per_page,
                total_pages: res.data.total_pages,
                users: res.data.data
                } })
        } catch (e) {
            dispatch({type: UsersActionTypes.USERS_FETCH_ERROR,
                            payload: 'Error during users fetch'})
        }
    }
}

export const setUsersPage = (page: number): IUsersAction => {
    return {type: UsersActionTypes.USERS_SET_PAGE, payload: page}
}

