import React from 'react';
import {IUserStateProps} from "types/UserTypes";

const UserCard: React.FC<IUserStateProps> = (props) => {
    console.log(props.userState)

    if(props.userState.loading) {
        return <h3>Загрузка...</h3>
    }

    if(props.userState.error) {
        return <h3>{props.userState.error}</h3>
    }

    return (
        <div className="user-card card">
            <img src={props.userState.user.avatar} className="user-card--avatar" alt="user-avatar"/>
            <div className="user-item--info">
                <h1>{`${props.userState.user.first_name} ${props.userState.user.last_name}`}</h1>
                <hr style={{margin: '10px 0 10px',height : '1px', borderWidth: "0", color: '#ccc', backgroundColor:"#ccc", width: '100%'}}/>
                <div className="user-info--grid">
                    <div className="gc">
                        <h4>First name:</h4>
                    </div>
                    <div className="gc">
                        {props.userState.user.first_name}
                    </div>

                    <div className="gc">
                        <h4>Email:</h4>
                    </div>
                    <div className="gc">
                        <p>{props.userState.user.email}</p>
                    </div>

                    <div className="gc">
                        <h4>Last name:</h4>
                    </div>
                    <div className="gc">
                        <p>{props.userState.user.last_name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;