import React from 'react';
import './FitnessStyles.css';

const StepsTracker = ({ user, steps, updateSteps }) => {
  return (
    <div className="card">
      <h3>Steps Tracker 👣</h3>
      <p>User: {user.name}</p>
      <p>Steps Walked: {steps}</p>
      <button onClick={() => updateSteps(steps + 500)}>+500 Steps</button>
    </div>
  );
};

export default StepsTracker;
