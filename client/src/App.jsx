import React from "react";
import "./App.css";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import User from "./components/User";
import Home from "./components/HomePage";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import SingleCategory from "./components/SingleCategory";
import "tw-elements";
import PaymentPage from "./components/PaymentPage";

function App() {
  return (
    <div className="bg-pgray min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/:method" element={<User />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryId" element={<SingleCategory />} />
        <Route path="/checkout" element={<PaymentPage />} />
      </Routes>
    </div>
  );
}

export default App;
