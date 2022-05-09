import {IUsersAction, UsersActionTypes} from "types/UserTypes";
import {Dispatch} from "redux";
import axios from "axios";

/*async action creator*/
export const fetchUsers = () => {
    return async (dispatch: Dispatch<IUsersAction>) => {
        try {
            dispatch({type: UsersActionTypes.USERS_FETCH})
            const res = await axios.get('https://reqres.in/api/users')
            dispatch({type: UsersActionTypes.USERS_FETCH_SUCCESS, payload: res.data.data })
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