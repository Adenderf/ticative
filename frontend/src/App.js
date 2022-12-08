import React from "react";
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserProfile from "./pages/UserProfile";
const App = () => {
  return (
    <div>
     <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
    </div>
  );
};

export default App;
