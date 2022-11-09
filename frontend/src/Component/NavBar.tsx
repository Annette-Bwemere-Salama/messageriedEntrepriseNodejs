import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {myContext} from "../Pages/Context"
export default function NavBar() {
  const ctx = useContext(myContext);
  return (
    <div className='NavContainer'>
      {
        ctx ? (
          <>
          <Link to="/logout">Logout</Link>
          <Link to="/admin">Admin</Link>
          <Link to="profile">Profile</Link>
          </>
        ) : ( 
          <>
          <Link to="/">Home</Link>
          <Link to="/login">login</Link>
          <Link to="/home">Home</Link>
          <Link to="/register">Register</Link>
          </>
        )
      }
       </div>
  )
}
