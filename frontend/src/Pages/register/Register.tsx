import axios from "axios";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {

    const [infosUser, setInfosUser] = useState({
        username: "",
        email: "",
        password: "",
        passwordAgain: ""
    });


    const handleChange = (e: any) => {
        setInfosUser({ ...infosUser, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // if (PasswordAgain.value !== password.value){
        //   passewodrAgain.value.ValidityState("passwords don't match!")
        // }else{
        //   const user = {
        //     username: username.value,
        //     email: email.value,
        //     password: password.value
        //   }try {
        //     await axios.post("/auth/register", user );
        //     ValidityState.push("/login");
        //   }catch (error) {
        //     console.log(error)
        //   }
        // }
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
                    <form className="loginBox" onSubmit={handleSubmit}>

                        <input
                            placeholder="Username"
                            required
                            className="loginInput"
                            onChange={handleChange}


                        />
                        <input
                            placeholder="Email"
                            required
                            className="loginInput"
                            type="email"
                        />
                        <input
                            placeholder="Password"
                            required
                            className="loginInput"
                            type="password"
                            onChange={handleChange}


                        />
                        <input
                            placeholder="Password Again"
                            required
                            className="loginInput"
                            type="password"
                            onChange={handleChange}
                            name="password"

                        />
                        <button className="loginButton" type="submit">
                            Sign Up
                        </button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div >
    )
}
