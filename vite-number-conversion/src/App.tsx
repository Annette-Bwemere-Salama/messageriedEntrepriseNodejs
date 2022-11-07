import react from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom"
import NavBar from "./Component/NavBar"
import AdminPage from "./Pages/AdminPage"
import HomePages from "./Pages/HomePages"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
function App() {
  return (
   <BrowserRouter>
   <NavBar/>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<HomePages/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/admin" element={<AdminPage/>}/>

    </Routes>
   </BrowserRouter>
  )
}

export default App
