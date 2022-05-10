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
        console.log(userState.user, userState.loading, userState.error)
    }, [])


    if(userState.loading) {
        return <h3>Загрузка...</h3>
    }

    if(userState.error) {
        return <h3>{userState.error}</h3>
    }

    return (
        <>
            {userState.user && <UserCard user={ userState.user }/>}
        </>
    );
};

export default UserPage;