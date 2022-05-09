import React, {useEffect} from 'react';
import {useTypedSelector} from "hooks/useTypedSelector";
import {useActions} from "hooks/useActions";
import UserItem from "components/users/UserItem";

const UserList: React.FC = () => {
    const { users, loading, error } = useTypedSelector(state => state.userReducer)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
        console.log(`effect worked! users = ${users} | loading = ${loading} | error = ${error}`)
    }, [])

    if(loading) {
        return <h1>Загрузка...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

    const userItems = users.map(user => <UserItem user={user} key={user.id}/>)

    return (
        <div>
            {userItems}
        </div>
    );



};

export default UserList;