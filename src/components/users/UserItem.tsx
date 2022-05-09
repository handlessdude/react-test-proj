import React from 'react';
import {IUser} from "types/UserTypes";

const UserItem = (props: { user: IUser}) => {
    return (
        <div>
            {`${props.user.first_name} ${props.user.last_name}`}
        </div>
    );
};

export default UserItem;