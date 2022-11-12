import react, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./Pages/AdminPage";
import Register from "./Pages/register/Register"
import { myContext } from "./Pages/Context";
import "./app.scss"
function App() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/">
          {user ? }
        </Route>
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
