import React from 'react'
import {Link} from 'react-router-dom'
import {myContext} from "../Pages/Context"
export default function NavBar() {
  return (
    
    <div className='NavContainer'>
      {
        Ctx ? (
          <>
          <Link to="/logout">Logout</Link>
          <Link to="/admin">Admin</Link>
          <Link to="profile">Profile</Link>
          </>
        ) : ( 
          <>
          <Link to="/home">Home</Link>
      
        
          <Link to="/login">login</Link>
          <Link to="/register">Register</Link>
          </>
        )
      }
       </div>
  )
}
