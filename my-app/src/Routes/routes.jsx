import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../Components/login";
import Home from "../Components/Home";


const Ro = () => {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
};

export default Ro;