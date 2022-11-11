import react, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import AdminPage from "./Pages/AdminPage";
import HomePages from "./Pages/HomePages";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/register/Register"
import { myContext } from "./Pages/Context";
import "./app.scss"
function App() {
  const ctx = useContext(myContext);
  console.log(ctx);

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePages />} />
        {
          ctx ? (
            <>
              {<Route path="/admin" element={<AdminPage />} />}
              {<Route path="/profile" element={<Profile />} />}
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )
        }

      </Routes>

    </BrowserRouter>
  );
}

export default App;
