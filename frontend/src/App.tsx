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


// import { AuthContext } from "./Component/context/AuthContext"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/messenger' element={<Messenger />} />



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
