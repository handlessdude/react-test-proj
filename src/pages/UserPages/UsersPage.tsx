import React, {useEffect} from 'react';
import UserList from "components/user/UserList";
import {useTypedSelector} from "hooks/useTypedSelector";
import {useActions} from "hooks/useActions";
import {IUsersState} from "types/UserTypes";
import Modal from "components/Modal";

const UsersPage: React.FC = () => {
    const usersState: IUsersState = useTypedSelector(state => state.usersReducer)

    const {
        fetchUsers,
        setUsersPage,
    } = useActions()

    useEffect(() => {
        fetchUsers(usersState.page, usersState.per_page)
    }, [usersState.page])

    if(usersState.loading) {
        return <h3>Загрузка...</h3>
    }

    if(usersState.error) {
        return <h3>{usersState.error}</h3>
    }

    return (
        <>
            {usersState.users && <UserList usersState={ usersState }
                                           setUsersPage={ setUsersPage }/>}
            <Modal/>
        </>

    );
};

export default UsersPage;