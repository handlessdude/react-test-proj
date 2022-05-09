export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface IUsersState {
    users: IUser[];
    loading: boolean;
    error: null | string;
    page: number;
    per_page: number;
    total_pages: number;
}

export enum UsersActionTypes {
    USERS_FETCH= "FETCH_USERS",
    USERS_FETCH_SUCCESS = "FETCH_USERS_SUCCESS",
    USERS_FETCH_ERROR = "FETCH_USERS_ERROR",
    USERS_SET_PAGE = "SET_USERS_PAGE",
}

/*interfaces for _users_reducer_*/
interface IUsersFetchAction {
    type: UsersActionTypes.USERS_FETCH;
}
interface IUsersFetchSuccessAction {
    type: UsersActionTypes.USERS_FETCH_SUCCESS;
    payload: {
        users: IUser[],
        per_page: number,
        total_pages: number,
    }

}
interface IUsersFetchErrorAction {
    type: UsersActionTypes.USERS_FETCH_ERROR;
    payload: string;
}
interface IUsersSetPageAction {
    type: UsersActionTypes.USERS_SET_PAGE;
    payload: number;
}

export type IUsersAction = IUsersFetchAction | IUsersFetchSuccessAction | IUsersFetchErrorAction | IUsersSetPageAction;
