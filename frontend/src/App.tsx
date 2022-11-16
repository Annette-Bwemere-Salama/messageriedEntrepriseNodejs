import Home from './Pages/home/Home';
import Login from './Pages/login/Login';
import Profile from "./Pages/profile/Profile";
import Messenger from "./Pages/messenger/Messenger"
import Register from "./Pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";


import { AuthContext } from "./Component/context/AuthContext"

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/messenger' element={<Messenger />} />
        <Route path='/login' element={<Login />} />



        {/* //   <Route path="/">
      //     {user ? <Home /> : <Register />}
      //   </Route>
      //   <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route>
      //   <Route path="/register">
      //     {user ? <Navigate to="/" /> : <Register />}
      //   </Route> */}
      //   {/* <Route path="/profile/:username">
      //     <Profile />
      //   </Route> */}
      // </Routes>
    </Router>
  );
}

export default App;
