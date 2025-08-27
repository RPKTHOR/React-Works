import React from 'react';
import FoodCard from './FoodCard';
import './FoodStyles.css';

const foodItems = [
  { name: 'Margherita Pizza', price: 250, description: 'Classic cheese & tomato' },
  { name: 'Veg Burger', price: 150, description: 'Loaded with veggies & sauces' },
  { name: 'Pasta Alfredo', price: 200, description: 'Creamy white sauce pasta' },
];

const Menu = ({ addToCart }) => {
  return (
    <div className="food-grid">
      {foodItems.map((item) => (
        <FoodCard key={item.name} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Menu;
