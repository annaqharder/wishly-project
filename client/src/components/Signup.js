import React, { useState, useContext } from "react";
import { UserContext } from '../Context/UserProvider';
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [ errors, setErrors ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    let [ user, setUser ] = useContext(UserContext);
    let navigate = useNavigate();

    const [ credentials, setCredentials ] = useState({
        first_name: "",
        last_name: "",
        avatar_url: "",
        username: "",
        password: "",
        password_confirmation: ""
    })

    function handleChange(e) {
        setCredentials((prevCredentials) => {
            return {
                ...prevCredentials,
                [e.target.name]: e.target.value
            }
        })
    };

    function handleSignUp(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials)
            }).then((r) => {
                setIsLoading(false);
                    if (r.ok) {
                        r.json().then((user) => setUser(user));
                        navigate("/wishlists");
                    } else {
                        r.json().then((err) => setErrors(err.errors));
                    }
            },[]);
    }

    function handleToLoginPage(){
        navigate("/")
    }


    return (
        <div>
            <h1> Lets Get Started! </h1>
        <form onSubmit={handleSignUp}>
            <label>First Name: </label>
                <br></br>
        <input
            type="text"
            name="first_name"
            // placeholder="First Name"
            value={credentials.first_name}
            onChange={handleChange}
        />
            <br></br>
        <label>Last Name: </label>
        <br></br>
        <input
            type="text"
            name="last_name"
            // placeholder="Last Name"
            value={credentials.last_name}
            onChange={handleChange}
        />
            <br></br>
        <label>Username: </label>
        <br></br>
        <input
            type="text"
            name="username"
            // placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
        />
            <br></br>
        <label>Avatar Url: </label>
        <br></br>
        <input
            type="text"
            name="avatar_url"
            value={credentials.avatar_url}
            onChange={handleChange}
        />
            <br></br>
        <label>Password: </label>
        <br></br>
        <input
            type="password"
            name="password"
            // placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            autoComplete="current-password"
        />
            <br></br>
        <label>Confirm Password: </label>
        <br></br>
        <input
            type="password"
            name="password_confirmation"
            // placeholder="Confirm Password"
            value={credentials.password_confirmation}
            onChange={handleChange}
            autoComplete="current-password"
        />
            <br></br>
            <br></br>
        <button type="submit">
            Create Account
        </button>
            <br></br>
            <br></br>
        <label> Already Using Wishly? </label>
        <button onClick={handleToLoginPage}>Login</button>
        </form>
            <div>
                {errors.map((err) => (
                    <p key={err}>{err}</p>
                ))}
            </div>

        </div>
    );
}

export default Signup;