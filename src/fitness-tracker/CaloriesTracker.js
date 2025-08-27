import React from 'react';
import './FitnessStyles.css';

const CaloriesTracker = ({ user, calories, updateCalories }) => {
  return (
    <div className="card">
      <h3>Calories Tracker 🔥</h3>
      <p>User: {user.name}</p>
      <p>Calories Burned: {calories}</p>
      <button onClick={() => updateCalories(calories + 50)}>+50 Calories</button>
    </div>
  );
};

export default CaloriesTracker;