import React, { useState, Fragment } from 'react'
import axios, { AxiosResponse } from "axios"

export default function Register() {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")


    const Register = (e: any) => {
        e.preventDefault()
        axios.post("http://localhost:4000/register", {
            username,
            password
        }, {
            withCredentials: true
        }).then((res: AxiosResponse) => {
            if (res.data === "success") {
                window.location.href = "/home"
            }
            console.log(res.data);
        })
    }
    return (
        <Fragment>
            <h1>Register</h1>

            <div>
                <section>
                    {/* <label htmlFor="username">Username</label> */}
                    <input id="username" name="username" type="text" autoComplete="username" required autoFocus placeholder='username' onChange={e => setUsername(e.target.value)} />
                </section>
                <section>
                    {/* <label htmlFor="current-password">Password</label> */}
                    <input id="current-password" name="password" type="password" autoComplete="current-password" required placeholder="password" onChange={e => setPassword(e.target.value)} />
                </section>
                <button onClick={(e) => Register(e)}>Login</button>
            </div>
        </Fragment>

    )
}
