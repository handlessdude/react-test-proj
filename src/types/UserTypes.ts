/**
 * Declares User entity
 * */
export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

/**
 * Declares state of User fetching
 * */
export interface IUserState {
    user: IUser;
    loading: boolean;
    error: null | string;
}

export interface IUserProps {
    user: IUser
}

/**
 * Declares state of User List fetching
 * */
export interface IUsersState {
    users: IUser[];
    loading: boolean;
    error: null | string;
    page: number;
    per_page: number;
    total_pages: number;
}

/**
 * Declares props type for User List
 * */
export interface IUsersProps {
    usersState: IUsersState,
    setUsersPage: Function
}

/**
 * Types of actions for User fetching
 * */
export enum UsersActionTypes {
    USERS_FETCH= "FETCH_USERS",
    USERS_FETCH_SUCCESS = "FETCH_USERS_SUCCESS",
    USERS_FETCH_ERROR = "FETCH_USERS_ERROR",
    USERS_SET_PAGE = "SET_USERS_PAGE",
}

/**
 * Fetch User action type
 * */
interface IUsersFetchAction {
    type: UsersActionTypes.USERS_FETCH;
}

/**
 * Successful User fetch action type
 * */
interface IUsersFetchSuccessAction {
    type: UsersActionTypes.USERS_FETCH_SUCCESS;
    payload: {
        users: IUser[],
        per_page: number,
        total_pages: number,
    }
}

/**
 * Erroneous User fetch action type
 * */
interface IUsersFetchErrorAction {
    type: UsersActionTypes.USERS_FETCH_ERROR;
    payload: string;
}
/**
 * Set User List page of given number action
 * */
interface IUsersSetPageAction {
    type: UsersActionTypes.USERS_SET_PAGE;
    payload: number;
}

/**
 * Declares User action type
 * */
export type IUsersAction = IUsersFetchAction
    | IUsersFetchSuccessAction
    | IUsersFetchErrorAction
    | IUsersSetPageAction;
