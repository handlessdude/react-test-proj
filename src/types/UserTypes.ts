export interface IUsers {
    users: object[];
    loading: boolean;
    error: null | string;
}
export enum UsersActionTypes {
    USERS_FETCH= "FETCH_USERS",
    USERS_FETCH_SUCCESS = "FETCH_USERS_SUCCESS",
    USERS_FETCH_ERROR = "FETCH_USERS_ERROR",
}

/*interfaces for _users_reducer_*/
interface IUsersFetchAction {
    type: UsersActionTypes.USERS_FETCH;
}
interface IUsersFetchSuccessAction {
    type: UsersActionTypes.USERS_FETCH_SUCCESS;
    payload: any[]
}
interface IUsersFetchErrorAction {
    type: UsersActionTypes.USERS_FETCH_ERROR;
    payload: string;
}
export type IUsersAction = IUsersFetchAction | IUsersFetchSuccessAction | IUsersFetchErrorAction;
