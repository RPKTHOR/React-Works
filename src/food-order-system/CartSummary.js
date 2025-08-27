import React from 'react';
import './FoodStyles.css';

const CartSummary = ({ cart, total }) => {
  return (
    <div className="cart-summary">
      <h4>🛒 Cart Summary</h4>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <span>{item.name} × {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSummary;
