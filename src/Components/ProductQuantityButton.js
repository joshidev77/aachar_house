import React, { useState } from "react";

const ProductQuantityButton = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="pqbtn">
      <button onClick={handleDecrement}>-</button>
      <label className="qlabel">{quantity}</label>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default ProductQuantityButton;
