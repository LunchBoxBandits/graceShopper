import React from "react";
import "./App.css";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import User from "./components/User";
import Home from "./components/HomePage";
import Cart from "./components/Cart";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/:method" element={<User />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
