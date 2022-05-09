import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage: React.FC = () => {
    return (
        <div className="card">
            <h1>Page does not exist. Go <Link to="/">home</Link></h1>
        </div>
    );
};

export default NotFoundPage;