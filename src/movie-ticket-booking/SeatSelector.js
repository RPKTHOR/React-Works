import React from 'react';
import './BookingStyles.css';

const SeatSelector = ({ movie, selectedSeats, toggleSeat, isConfirmed }) => {
  const seats = Array.from({ length: 30 }, (_, i) => `S${i + 1}`);

  return (
    <div className="seat-section">
      <h3>{movie.title} – {movie.timing}</h3>
      <p>Price per seat: ₹{movie.pricePerSeat}</p>
      <div className="seat-grid">
        {seats.map((seat) => (
          <button
            key={seat}
            className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
            onClick={() => toggleSeat(seat)}
            disabled={isConfirmed}
          >
            {seat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SeatSelector;
