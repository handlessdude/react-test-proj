import React from 'react';
import {useParams} from "react-router-dom";

const UserPage: React.FC = () => {
    const {userId} = useParams()
    console.log(userId)

    return (
        <div className="card">
            <h1>this is user_{userId} page.</h1>
        </div>
    );
};

export default UserPage;