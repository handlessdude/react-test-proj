import React from 'react';
import UserItem from "components/users/UserItem";
import 'styles/UserStyles.css';
import { IUsersProps} from "types/UserTypes";

const UserList: React.FC<IUsersProps> = (props) => {

    const pages = Array.from({length: props.usersState.total_pages},(v,k)=> k+1)

    if(props.usersState.loading) {
        return <h1>Загрузка...</h1>
    }

    if(props.usersState.error) {
        return <h1>{props.usersState.error}</h1>
    }

    const userItems = props.usersState.users.map(user => <UserItem user={user} key={user.id}/>)

    return (
        <div className="users-list">
            {userItems}
            <div className="users-list--pagination">
                <button className="goNext hoverable"
                        onClick={()=>props.setUsersPage(props.usersState.page-1)}
                        disabled={props.usersState.page===pages[0]}>&#10094;
                </button>

                {pages.map(p =>
                    <button
                        onClick={() => props.setUsersPage(p)}
                        key={p}
                        className={`btn hoverable ${p === props.usersState.page ? 'active': ''}`}
                    >
                        {p}
                    </button>
                )}

                <button className="goNext hoverable"
                        onClick={()=>props.setUsersPage(props.usersState.page+1)}
                        disabled={props.usersState.page===pages[pages.length-1]}>&#10095;
                </button>
            </div>
        </div>
    );
};

export default UserList;