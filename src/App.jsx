import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import LoginSuccessPage from "./pages/LoginSuccessPage";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login-success" element={<LoginSuccessPage />} />
      </Routes>
    </>
  );
}

export default App;
