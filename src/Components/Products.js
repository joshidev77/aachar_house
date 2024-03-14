import React from 'react';
import ProductPage from './ProductPage';

const Products = ({ addToCart }) => {
  return (
    <div className='product-showcase'>
      <ProductPage name={"Kachi Keri"} addToCart={addToCart} />
      <ProductPage name={"Methi"} addToCart={addToCart} />
      <ProductPage name={"Lasan"} addToCart={addToCart} />
      <ProductPage name={"Akha Limbu"} addToCart={addToCart} />
      <ProductPage name={"Amla"} addToCart={addToCart} />
      <ProductPage name={"Chundo"} addToCart={addToCart} />
      <ProductPage name={"Punjabi"} addToCart={addToCart} />
      <ProductPage name={"Mix Khatmitha"} addToCart={addToCart} />
      <ProductPage name={"Gunda Keri"} addToCart={addToCart} />
      <ProductPage name={"Gunda Keri"} addToCart={addToCart} />
      <ProductPage name={"Gunda Keri"} addToCart={addToCart} />
      <ProductPage name={"Gunda Keri"} addToCart={addToCart} />
      {/* Add other ProductPage instances similarly */}
    </div>
  );
};

export default Products;
