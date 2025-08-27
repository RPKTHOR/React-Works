import React from 'react';
import './BookingStyles.css';

const BookingSummary = ({ selectedSeats, pricePerSeat, isConfirmed, confirmBooking }) => {
  const total = selectedSeats.length * pricePerSeat;

  return (
    <div className="summary-section">
      <h4>🧾 Booking Summary</h4>
      <p>Selected Seats: {selectedSeats.join(', ') || 'None'}</p>
      <p>Total Tickets: {selectedSeats.length}</p>
      <p>Total Cost: ₹{total}</p>
      {isConfirmed ? (
        <p className="confirmed">✅ Booking Confirmed!</p>
      ) : (
        <button className="confirm-btn" onClick={confirmBooking} disabled={selectedSeats.length === 0}>
          Confirm Booking
        </button>
      )}
    </div>
  );
};

export default BookingSummary;
