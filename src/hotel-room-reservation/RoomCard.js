import React from 'react';
import './HotelStyles.css';

const RoomCard = ({ room, isSelected, toggleRoom }) => {
  return (
    <div
      className={`room-card ${isSelected ? 'selected' : ''} ${!room.available ? 'disabled' : ''}`}
      onClick={room.available ? toggleRoom : null}
    >
      <h4>{room.type}</h4>
      <p>₹{room.price} / night</p>
      <p>{room.available ? 'Available' : 'Unavailable'}</p>
    </div>
  );
};

export default RoomCard;
