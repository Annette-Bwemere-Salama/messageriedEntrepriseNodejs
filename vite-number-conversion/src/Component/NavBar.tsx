import React from 'react'
import {Link} from 'react-router-dom'
import AdminPage from '../Pages/AdminPage';
import HomePages from "../Pages/HomePages";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
export default function NavBar() {
  return (
    
    <nav>
      <Link to="/">{HomePages}</Link>
      <Link to="/AdminPage">{AdminPage}</Link>
      <Link to="Login">{Login}</Link>
      <Link to="Pro file">{Profile}</Link>
    </nav>
  
  )
}
