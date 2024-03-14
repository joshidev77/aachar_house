import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductPage = ({ name, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedPrice, setSelectedPrice] = useState(250);
  const [selectedQty, setSelectedQty] = useState(1);
  const Navigate=useNavigate();
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    if (e.target.value === 'S') {
      setSelectedPrice(250);
    } else if (e.target.value === 'M') {
      setSelectedPrice(460);
    }
  };

  const handleQtyChange = (e) => {
    setSelectedQty(e.target.value);
  };

  const handleAddToCart = () => {
    addToCart({
      name,
      price: selectedPrice,
      quantity: selectedQty
    });
    console.log("Added to cart")
    Navigate("/Cart")
  };
  

  return (
    <div className="product-page">
      <div className="product-image-container">
        <img src="photoofP.jpg" alt="Product Image" />
      </div>
      <div className="product-details">
        <h1>{name}</h1>
        <p>Price: {selectedPrice}/-</p>
        <label htmlFor="size-select">Quantity</label>
        <select id="size-select" value={selectedSize} onChange={handleSizeChange}>
          <option value="S">500gm</option>
          <option value="M">1kg</option>
        </select>
        <input type="number" value={selectedQty} onChange={handleQtyChange} />
        <button className="product__btn" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
