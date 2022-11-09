import React, {useState, Fragment} from 'react'
import axios from "axios"
export default function Login() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")


  const login = (e: any) =>{
    e.preventDefault()
    axios.post("http://localhost:4000/login",{
      username,
      password
    }, {
      withCredentials: true
    }).then(res =>{
      console.log(res.data);
    })
  }


  const getUser = () =>{
    axios.get("http://localhost:4000/user", {
      withCredentials: true
    }).then(res =>{
      console.log(res.data);
      
    })
  }
  return (
    <Fragment>
        <h1>Login</h1>

    <div>
    <section>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" autoComplete="username" required autoFocus placeholder='username' onChange={e => setUsername(e.target.value)}/>
    </section>
    <section>
        <label htmlFor="current-password">Password</label>
        <input id="current-password" name="password" type="password" autoComplete="current-password" required placeholder="password" onChange={e => setPassword(e.target.value)}/>
    </section>
    <button onClick={(e) => login(e)}>Login</button>
    <button onClick={getUser}>Get User Thats Logged In</button>
</div>
    </Fragment>
  
  )
}
