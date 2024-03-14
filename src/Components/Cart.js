import React from 'react';
import "./Cart.css";
const Cart = ({ cart }) => {
  return (
    <div>
      {cart.map((item, index) => (
        <div key={index} className='vertical-tab'>
          <p>Aachhar: {item.name}</p>
          <p>₹ {item.price}/-</p>
          <p>Quantity: {item.size=="S"?"500gm":"1kg"}</p>
          <p>Units: {item.quantity}</p>
          <button className="update_btn">UPDATE</button>
          <button className="delete_btn">DELETE</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
