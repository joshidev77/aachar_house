import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductQuantityButton from "./Components/ProductQuantityButton";
import ProductPage from "./Components/ProductPage";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import CartItems from "./Components/cartItems";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/CartItems" element={<CartItems/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
