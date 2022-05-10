import React from 'react';
import {IUserProps} from "types/UserTypes";

const UserCard: React.FC<IUserProps> = (props) => {
    //console.log('list usersstate = ', props.user)

    return (
        <div className="user-card card">
            <img src={props.user.avatar} className="user-card--avatar" alt="user-avatar"/>
            <div className="user-item--info">
                <h1>{`${props.user.first_name} ${props.user.last_name}`}</h1>
                <hr style={{margin: '10px 0 10px',height : '1px', borderWidth: "0", color: '#ccc', backgroundColor:"#ccc", width: '100%'}}/>
                <div className="user-info--grid">
                    <div className="gc">
                        <h4>First name:</h4>
                    </div>
                    <div className="gc">
                        {props.user.first_name}
                    </div>

                    <div className="gc">
                        <h4>Email:</h4>
                    </div>
                    <div className="gc">
                        <p>{props.user.email}</p>
                    </div>

                    <div className="gc">
                        <h4>Last name:</h4>
                    </div>
                    <div className="gc">
                        <p>{props.user.last_name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;