import React from 'react';
import {IUserProps} from "types/UserTypes";
import 'styles/UserStyles.css';
import UserCard from "components/user/UserCard";
import {useActions} from "hooks/useActions";

const UserItem: React.FC<IUserProps> = (props) => {

    const {
        showModal
    } = useActions()

    return (
        <div className="user-item card hoverable" onDoubleClick={()=>showModal(<UserCard user={props.user}/>)}>
            <img src={props.user.avatar} className="user-item--avatar" alt="user-avatar"/>
            <section className="user-item--info">
                {`${props.user.first_name} ${props.user.last_name}`}
                <hr style={{margin: '10px 0 10px',height : '1px', borderWidth: "0", color: '#ccc', backgroundColor:"#ccc", width: '100%'}}/>
            </section>

        </div>
    );
};

export default UserItem;