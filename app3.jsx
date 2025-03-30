import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { Routes,Route } from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";

const App = () => {
  
    return (
       <div>
         <Header /> 
         <Routes>
            <Route path = "/about" element={<About />}></Route >  
            <Route path = "/contact" element={<Contact />}></Route >   
            <Route path = "/" element={<Home />}></Route >   
            <Route path = "/product" element={<Product />}></Route >   

         </Routes>
       </div>
   )
};
export default App
