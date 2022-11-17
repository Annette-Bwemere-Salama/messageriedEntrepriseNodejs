import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const infosUser = {
            email, username, password
        }
        try {
            const response = await axios.post("http://localhost:4000/register", infosUser)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">AnnyChatt</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on AnnyChatt.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleSubmit}
                    >

                        <input
                            placeholder="Username"
                            required
                            className="loginInput"
                            onChange={(e: any) => setUsername(e.target.value)}



                        />
                        <input
                            placeholder="Email"
                            required
                            className="loginInput"
                            type="email"
                            onChange={(e: any) => setEmail(e.target.value)}

                        />
                        <input
                            placeholder="Password"
                            required
                            className="loginInput"
                            type="password"
                            onChange={(e: any) => setPassword(e.target.value)}



                        />
                        <input
                            placeholder="Password Again"
                            required
                            className="loginInput"
                            type="password"
                            name="password"

                        />
                        <button className="loginButton" type="submit" >
                            Sign Up
                        </button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div >
    )
}
