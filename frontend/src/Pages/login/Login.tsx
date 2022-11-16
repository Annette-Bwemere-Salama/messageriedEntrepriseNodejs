import { useContext, useRef } from 'react';

import "./login.css";
// import { AuthContext } from '../../Component/context/AuthContext'
import CircularIndeterminate from "./progress"
// import { loginCall } from '../../apiCalls';

export default function Login() {

  // const email = useRef();
  // const password = useRef();
  // const { isFetching, dispatch: any} = useContext(AuthContext);

  // const handleClick = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();
  //   loginCall(
  //     { email: email.current.value, password: password.current.value },
  //     dispatch
  //   );
  // };

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
          <form className="loginBox" >
          {/* // onSubmit={handleClick} */}
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              // ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              className="loginInput"
              // ref={password}
            />
            {/* <button className="loginButton" type="submit" 
            // disabled={isFetching}>
            //   {isFetching ? (
            //     <CircularIndeterminate />
            //   ) : (
            //     "Log In"
            //   )}
            </button> */}
            <button className="loginButton" type="submit">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {/* {isFetching ? (
                <CircularIndeterminate />
              ) : (
                "Create a New Account"
              )} */}
            </button>
          </form>
        </div>
      </div>
    // </div>
  )
}
