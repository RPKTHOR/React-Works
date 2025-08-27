import React from 'react';
import RoomCard from './RoomCard';
import './HotelStyles.css';

const rooms = [
  { id: 'R1', type: 'Deluxe', price: 2599, available: true },
  { id: 'R2', type: 'Suite', price: 4599, available: true },
  { id: 'R3', type: 'Standard', price: 1699, available: true },
];

const RoomList = ({ selectedRooms, toggleRoom }) => {
  return (
    <div className="room-grid">
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          room={room}
          isSelected={selectedRooms.includes(room.id)}
          toggleRoom={() => toggleRoom(room.id)}
        />
      ))}
    </div>
  );
};

export default RoomList;
