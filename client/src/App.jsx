import React from "react";
import Home from "./Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./constant/Navbar/Navbar";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Footer from "./constant/Footer/Footer";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/carrier" element={<h1>Carrier</h1>} />
          <Route exact path="/about" element={<h1>About</h1>} />
          <Route exact path="/Media" element={<h1>Media</h1>} />
          <Route exact path="/contact" element={<h1>Contact</h1>} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
