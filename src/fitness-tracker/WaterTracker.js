import React from 'react';
import './FitnessStyles.css';

const WaterTracker = ({ user, water, updateWater }) => {
  return (
    <div className="card">
      <h3>Water Tracker 💧 </h3>
      <p>User: {user.name}</p>
      <p>Glasses Drank: {water}</p>
      <button onClick={() => updateWater(water + 1)}>+1 Glass</button>
    </div>
  );
};

export default WaterTracker;
