import React from 'react';
import './FoodStyles.css';

const FoodCard = ({ item, addToCart }) => {
  return (
    <div className="food-card">
      <div className="food-title">{item.name}</div>
      <div className="food-description">{item.description}</div>
      <div className="food-price">₹{item.price}</div>
      <button className="add-btn" onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
};

export default FoodCard;
