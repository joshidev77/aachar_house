import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <img src="logo.svg" className="imgsrc" alt="logo" />
        <label>Aachar<br/>House</label>
        <Link to={'/home'}>Home</Link>
        <Link to={'/cart'}>Cart</Link>
        <Link to={'/product'}>Product</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/about'}>About</Link>
      </nav>
    </>
  );
};

export default Navigation;
