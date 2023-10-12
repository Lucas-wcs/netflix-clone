import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {


    return (
        <div className={"header"}>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/movie">Movies</NavLink>
            <NavLink to="/serie">Series</NavLink>
        </div>
    );
};

export default Header;