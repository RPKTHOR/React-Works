import React from 'react';
import './FitnessStyles.css';

const SummaryDashboard = ({ user, steps, calories, water }) => {
  return (
    <div className="summary">
      <h4>📊 Daily Summary</h4>
      <p>Name: {user.name}</p>
      <p>Age: {user.age} | Weight: {user.weight}kg</p>
      <p>Total Steps: {steps}</p>
      <p>Total Calories: {calories}</p>
      <p>Total Water Intake: {water} glasses</p>
    </div>
  );
};

export default SummaryDashboard;
