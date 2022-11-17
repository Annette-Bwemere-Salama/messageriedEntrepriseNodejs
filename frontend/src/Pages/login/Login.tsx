import axios from 'axios';
import { useState } from 'react';

import "./login.css";

export default function Login() {

  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const userInput = {
      email, username, password,
    }
    try {
      const res = await axios.post('http://localhost:4000/login', userInput)
      console.log(res.data)
    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">AnnyChat</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on AnnyChat.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit} >
            <input
              placeholder="Email"
              type="email"
              name='email'
              required
              className="loginInput"
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              required
              className="loginInput"
              name='password'
              onChange={(e: any) => setpassword(e.target.value)}
            />

            <button className="loginButton" type="submit" >Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
            </button>
          </form>
        </div>
      </div>
    // </div>
  )
}
