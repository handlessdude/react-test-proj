import React from 'react';
import {IUserProps} from "types/UserTypes";
import 'styles/UserStyles.css';
import {Link} from "react-router-dom";

/*
* {"id":1,
* "email":"george.bluth@reqres.in",
* "first_name":"George",
* "last_name":"Bluth",
* "avatar":"https://reqres.in/img/faces/1-image.jpg"}
* */

const UserItem: React.FC<IUserProps> = (props) => {
    return (
        <Link to={`/users/${props.user.id}`} className="user-item card hoverable">
            {/*<div className="user-item card hoverable">
                <img src={props.user.avatar} className="user-item--avatar" alt="user-avatar"/>
                <section className="user-item--info">
                    {`${props.user.first_name} ${props.user.last_name}`}
                    <hr style={{margin: '10px 0 10px',height : '1px', borderWidth: "0", color: '#ccc', backgroundColor:"#ccc", width: '100%'}}/>
                </section>
            </div>*/}
            <img src={props.user.avatar} className="user-item--avatar" alt="user-avatar"/>
            <section className="user-item--info">
                {`${props.user.first_name} ${props.user.last_name}`}
                <hr style={{margin: '10px 0 10px',height : '1px', borderWidth: "0", color: '#ccc', backgroundColor:"#ccc", width: '100%'}}/>
            </section>
        </Link>

    );
};

export default UserItem;