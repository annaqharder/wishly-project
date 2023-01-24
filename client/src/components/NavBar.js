import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import { NavLink, Link, useNavigate } from "react-router-dom";

function NavBar() {

    let [ user, setUser ] = useContext(UserContext);

    const navigate = useNavigate();

    function handleLogout(){
        fetch('/logout', {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                setUser(null)
            }
        },[]);
        navigate("/")
    }

    return (
        <div className="NavBar">
            <h3>
                <span>Wishly</span> | Wishlists in One Place
            </h3>
            {!user ? (<div></div>) : (
                <div>
                    <nav>
                    <NavLink exact to="/wishlists">
                        My Wishlists
                    </NavLink>
                    <NavLink exact to="/profile">
                        My Profile
                    </NavLink>
                    <NavLink exact to="/" onClick={handleLogout}>
                        Logout
                    </NavLink>
                </nav>
                <h2> Hello, {user.first_name}!</h2>
            </div>
            )}
        </div>
    );
}

export default NavBar;