import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import UserCard from "components/user/UserCard";
import { IUserState } from "types/UserTypes";
import {useTypedSelector} from "hooks/useTypedSelector";
import {useActions} from "hooks/useActions";

const UserPage: React.FC = () => {
    const {userId} = useParams()

    const userState: IUserState = useTypedSelector(state => state.userReducer)

    const {
        fetchUser,
    } = useActions()

    useEffect(() => {
        fetchUser(Number(userId))
    }, [])


    return (
        <>
            <UserCard userState={ userState }/>
        </>
    );
};

export default UserPage;