import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { NavLink, Link, useNavigate } from "react-router-dom";

function NavBar() {

    let [ user, setUser ] = useContext(UserContext);

    const navigate = useNavigate();

    function handleLogout(){
        fetch('/logout', {
            method: "DELETE",
        });
        setUser(null);
        // navigate("/")
    }

    return (
        <div className="NavBar">
            <div>
                <NavLink exact to="/">
                    Home
                </NavLink>
                <NavLink exact to="/">
                    Logout
                </NavLink>
            </div>

        </div>
    );
}

export default NavBar;