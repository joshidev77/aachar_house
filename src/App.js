import logo from "./logo.svg";
import "./App.css";
import React,{ useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log("addToCart")
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Products addToCart={addToCart}/>}/>
        <Route path="/cart" element={<Cart cart={cart}/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
