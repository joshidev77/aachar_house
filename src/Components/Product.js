import React, { useState } from 'react';

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedPrice, setSelectedPrice] = useState(460);
  const [selectedQty, setSelectedQty] = useState(1);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    if (e.target.value === 'S') {
      setSelectedPrice(10);
    } else if (e.target.value === 'M') {
      setSelectedPrice(15);
    } else if (e.target.value === 'L') {
      setSelectedPrice(20);
    }
  };

  const handleQtyChange = (e) => {
    setSelectedQty(e.target.value);
  };

  return (
    <div className="product-page">
      <div className="product-image-container">
        <img src="Test.jpg" alt="Product Image" />
      </div>
      <div className="product-details">
        <h1>Kachi Keri</h1>
        <p>₹: {selectedPrice}/-</p>
        {/* <label htmlFor="size-select">Size:</label>
        <select id="size-select" value={selectedSize} onChange={handleSizeChange}>
          <option value="S">Small</option>
          <option value="M">Medium</option>
        </select><br></br> */}
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;