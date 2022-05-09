import React from 'react';
import 'styles/UserStyles.css';
import {IUserProps} from "types/UserTypes";

const UserCard: React.FC<IUserProps> = (props) => {
    return (
        <div className="user-card card">
            <img src={props.user.avatar} className="user-item--avatar" alt="user-avatar"/>
            {/*<section className="user-item--info">
                {`${props.user.first_name} ${props.user.last_name}`}
                <hr style={{margin: '10px 0 10px',height : '1px', borderWidth: "0", color: '#ccc', backgroundColor:"#ccc", width: '100%'}}></hr>
            </section>*/}
        </div>
    );
};

export default UserCard;