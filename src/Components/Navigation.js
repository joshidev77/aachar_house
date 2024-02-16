import React from "react";
const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <img src="logo.svg" className="imgsrc" alt="logo" />
        <label>Aachar<br/>House</label>
        <a href="#">Home</a>
        <a href="#">Cart</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </nav>
    </>
  );
};

export default Navigation;
