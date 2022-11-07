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
      <Route path="/" element={<HomePages/>} />
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
