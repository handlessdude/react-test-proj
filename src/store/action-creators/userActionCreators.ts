import {IUsersAction, UsersActionTypes} from "types/UserTypes";
import {Dispatch} from "redux";
import axios from "axios";

/*async action creator*/
export const fetchUsers = (page: number = 1, per_page: number = 6) => {
    return async (dispatch: Dispatch<IUsersAction>) => {
        try {
            dispatch({type: UsersActionTypes.USERS_FETCH})
            //console.log(`firing ${page} page | ${per_page} per_page`)
            const res = await axios.get('https://reqres.in/api/users', {
                params: {page: page, per_page: per_page}
            })
            dispatch({type: UsersActionTypes.USERS_FETCH_SUCCESS, payload: {
                per_page: res.data.per_page,
                total_pages: res.data.total_pages,
                users: res.data.data
                } })
        } catch (e) {
            dispatch({type: UsersActionTypes.USERS_FETCH_ERROR, payload: 'Error during users fetch'})
        }
        /*dispatch({type: UsersActionTypes.USERS_FETCH})
        axios.get('https://reqres.in/api/users?page=1')
            .then(res => {
                console.log(res)
                dispatch({type: UsersActionTypes.USERS_FETCH_SUCCESS, payload: res.data.data })
        })*/
    }
}

export const setUsersPage = (page: number): IUsersAction => {
    //console.log(`firing ${page} page`)
    return {type: UsersActionTypes.USERS_SET_PAGE, payload: page}
}