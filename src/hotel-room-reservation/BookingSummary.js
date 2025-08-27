import React from 'react';
import './HotelStyles.css';

const roomDetails = {
  R1: { type: 'Deluxe', price: 3000 },
  R2: { type: 'Suite', price: 5000 },
  R3: { type: 'Standard', price: 2000 },
};

const BookingSummary = ({ selectedRooms, checkIn, checkOut, nights }) => {
  const total = selectedRooms.reduce((sum, id) => sum + roomDetails[id].price * nights, 0);

  return (
    <div className="summary">
      <h4>Booking Summary</h4>
      <p>Check-In: {checkIn || '—'}</p>
      <p>Check-Out: {checkOut || '—'}</p>
      <p>Nights: {nights}</p>
      <p>Rooms Selected: {selectedRooms.join(', ') || 'None'}</p>
      <p>Total Price(Including taxes): ₹{total}</p>
      {selectedRooms.length > 0 && nights > 0 && (
        <p className="confirmed">Ready to Confirm</p>
      )}
    </div>
  );
};

export default BookingSummary;
