import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      {cart.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
