import React, { useEffect } from "react";
import {Home, Products, Users, DetailProduct, DetailUser} from "./Pages"
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";
function App() {

  return (
    <>
    <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route exact path="/product" element={<Products />}/>
    <Route exact path="/user" element={<Users />}/>
    <Route exact path="/DetailProduct/:id" element={<DetailProduct />} />
    <Route exact path="/DetailUser/:id" element={<DetailUser />} />
    </Routes>
    </>
  )
}

export default App
