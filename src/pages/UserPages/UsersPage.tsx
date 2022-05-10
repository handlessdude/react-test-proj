import React, {useEffect} from 'react';
import UserList from "components/user/UserList";
import {useTypedSelector} from "hooks/useTypedSelector";
import {useActions} from "hooks/useActions";
import {IUsersState} from "types/UserTypes";

const UsersPage: React.FC = () => {
    const usersState: IUsersState = useTypedSelector(state => state.usersReducer)

    const {
        fetchUsers,
        setUsersPage
    } = useActions()

    useEffect(() => {
        fetchUsers(usersState.page, usersState.per_page)
    }, [usersState.page])

    return (
         <UserList usersState={ usersState }
                   setUsersPage={ setUsersPage }
         />
    );
};

export default UsersPage;