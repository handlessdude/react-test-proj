import React, {useEffect} from 'react';
import {useTypedSelector} from "hooks/useTypedSelector";
import {useActions} from "hooks/useActions";
import UserItem from "components/users/UserItem";

const UserList: React.FC = () => {
    const { users, loading, error, page, per_page, total_pages } = useTypedSelector(state => state.userReducer)
    const pages = Array.from({length: total_pages},(v,k)=> k+1)

    const {fetchUsers, setUsersPage} = useActions()

    useEffect(() => {
        fetchUsers(page, per_page)
        //console.log(`effect worked! users = ${users} | loading = ${loading} | error = ${error}`)
    }, [page])

    if(loading) {
        return <h1>Загрузка...</h1>
    }

    if(error) {
        return <h1>{error}</h1>
    }

    const userItems = users.map(user => <UserItem user={user} key={user.id}/>)

    return (
        <div className="users-list">
            {userItems}
            <div className="users-list--pagination">
                {pages.map(p =>
                    <div
                        onClick={() => setUsersPage(p)}
                        key={p}
                        className="users-list--pagination-btn"
                        style={{border:p === page ? '2px solid green' : '1px solid gray', padding: 10}}
                    >
                        {p}
                    </div>
                )}
            </div>
        </div>
    );



};

export default UserList;