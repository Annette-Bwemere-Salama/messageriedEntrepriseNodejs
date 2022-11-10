import React, { useState, Fragment } from 'react'
import axios, { Axios } from "axios"
import { AxiosResponse } from 'axios'
export default function Login() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")


  const login = (e: any) => {
    e.preventDefault()
    axios.post("http://localhost:4000/login", {
      username,
      password
    }, {
      withCredentials: true
    }).then((res: AxiosResponse) => {
      if (res.data === "success") {
        window.location.href = "/"
      }
    }, () => {
      console.log("failure");
    })
  }


  return (
    <Fragment>
      <form>
        <h1>Login</h1>
        <div className="input-field">
          {/* <label htmlFor="username">Username</label> */}
          <input id="username" name="username" type="text" placeholder='Enter Username' onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          {/* <label htmlFor="current-password">Password</label> */}
          <input id="password" name="password" type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
        </div>
        <button onClick={(e) => login(e)} className="btn">Login</button>
        {/* <input onClick={(e) => login(e)} type="submit" value="LogIn" /> */}
      </form>

    </Fragment>

  )
}
