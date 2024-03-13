import React from 'react';

const Cart = ({ cartItems, updateCartItemQuantity, removeFromCart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div>
                <p>Product: {item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price}/-</p>
                <button onClick={() => updateCartItemQuantity(index, item.quantity - 1)}>
                  Decrease Quantity
                </button>
                <button onClick={() => updateCartItemQuantity(index, item.quantity + 1)}>
                  Increase Quantity
                </button>
                <button onClick={() => removeFromCart(index)}>Remove from Cart</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
