import React, { useState, useContext} from "react";
import { UserContext } from '../Context/UserProvider';
import { useNavigate } from "react-router-dom";

function Login() {
    const [ errors, setErrors ] = useState([]);

    let [ user, setUser ] = useContext(UserContext);

    let navigate = useNavigate();

    const [ credentials, setCredentials ] = useState({
        username: "",
        password: ""
    });

    function handleChange(e){
        setCredentials((prevCredentials) => {
            return {
                ...prevCredentials,
                [e.target.name]: e.target.value
            }
        })
    };

    function handleSubmit(e) {
        e.preventDefault();

        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
                navigate("/wishlists")
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        },[])
    }

    function handleToSignupPage(){
        navigate("/signup")
    }

    return (
        <div>
            <h1> Welcome to Wishly! </h1>
            <h2> Please Login </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
            <br></br>
            <label> New to Splitsy?</label>
            <button onClick={handleToSignupPage}> Sign Up </button>
                <div>
                    {errors.map((err) => (
                        <p key={err}>{err}</p>
                    ))}
                </div>
        </div>
    );
}

export default Login;