import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import AdminPage from "./Pages/AdminPage";
import HomePages from "./Pages/HomePages";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Context from "./Pages/Context";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Context.Provider>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
