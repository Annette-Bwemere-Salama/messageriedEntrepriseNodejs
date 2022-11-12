import React, { useState, useRef } from 'react'
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
        window.location.href = "/home"
      }
      // }, () => {
      //   console.log("failure");
    })
  }


  return (
    <div className='container'>
      <div className='section'></div>
      <form>
        <h1>Login</h1>
        <div className="input-field">
          <input id="username" name="username" type="text" placeholder='Enter Username' onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          <input id="password" name="password" type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
        </div>
        <button onClick={(e) => login(e)} className="btn">Login</button>
      </form>
    </div>

  )
}
