import React, { useState } from 'react';

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedPrice, setSelectedPrice] = useState(250);
  const [selectedQty, setSelectedQty] = useState(1);

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

  console.log(selectedPrice);
  return (
    <div className="product-page">
      <div className="product-image-container">
        <img src="Test.jpg" alt="Product Image" />
      </div>
      <div className="product-details">
        <h1>Kachi Keri</h1>
        <p>Price: {selectedPrice}/-</p>
        <label htmlFor="size-select">Quantity</label>
        <select id="size-select" value={selectedSize} onChange={handleSizeChange}>
          <option value="S">500gm</option>
          <option value="M">1kg</option>
        </select>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;