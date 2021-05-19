import React from 'react';
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <h1>Main Page</h1>
            <Link to="/boards/board_page">Board</Link>
        </div>
    );
};

export default MainPage;