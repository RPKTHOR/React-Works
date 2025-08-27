
import './App.css';
import 'src/movie-ticket-booking'
import 'src/hotel-room-reservation'
import 'src/food-order-system'
import 'src/fitness-tracker'
import 'src/course-enrollment'

const App = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const movie = {
    title: 'Inception',
    timing: '7:30 PM',
    pricePerSeat: 200,
  };

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const confirmBooking = () => {
    if (selectedSeats.length > 0) {
      setIsConfirmed(true);
    }
  };

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [selectedRooms, setSelectedRooms] = useState([]);

  const toggleRoom = (roomId) => {
    setSelectedRooms((prev) =>
      prev.includes(roomId) ? prev.filter((id) => id !== roomId) : [...prev, roomId]
    );
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diff = (outDate - inDate) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.name === item.name);
      if (existing) {
        return prevCart.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [water, setWater] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => setDarkMode(!darkMode);

  const user = {
    name: 'Pavan',
    age: 22,
    weight: 70,
  };

    const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [progress, setProgress] = useState({});

  const handleEnroll = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
      setProgress({ ...progress, [courseId]: 0 });
    }
  };

  const toggleFavorite = (courseId) => {
    setFavorites((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  const updateProgress = (courseId, value) => {
    setProgress((prev) => ({
      ...prev,
      [courseId]: Math.min(100, value),
    }));
  };
  return (
    <div className="container">

      <h2>🎬 Movie Ticket Booking</h2>
      <SeatSelector
        movie={movie}
        selectedSeats={selectedSeats}
        toggleSeat={toggleSeat}
        isConfirmed={isConfirmed}
      />
      <BookingSummary
        selectedSeats={selectedSeats}
        pricePerSeat={movie.pricePerSeat}
        isConfirmed={isConfirmed}
        confirmBooking={confirmBooking}
      />

      <h2>Hotel Room Reservation</h2>
      <div className="date-inputs">
        <label>
          Check-In:
          <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
        </label>
        <label>
          Check-Out:
          <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
        </label>
      </div>
      <RoomList selectedRooms={selectedRooms} toggleRoom={toggleRoom} />
      <BookingSummary
        selectedRooms={selectedRooms}
        checkIn={checkIn}
        checkOut={checkOut}
        nights={calculateNights()}
      />

      <h2>🍽️ Online Food Ordering</h2>
      <Menu addToCart={addToCart} />
      <CartSummary cart={cart} total={total} />

    <h2>🏋️ Fitness Tracker Dashboard</h2>
      <div className="trackers">
        <StepsTracker user={user} steps={steps} updateSteps={setSteps} />
        <CaloriesTracker user={user} calories={calories} updateCalories={setCalories} />
        <WaterTracker user={user} water={water} updateWater={setWater} />
      </div>
      <SummaryDashboard user={user} steps={steps} calories={calories} water={water} />
      
    <h2>📚 E-Learning Platform</h2>
      <CourseList
        enrolledCourses={enrolledCourses}
        favorites={favorites}
        progress={progress}
        onEnroll={handleEnroll}
        onToggleFavorite={toggleFavorite}
        onUpdateProgress={updateProgress}
      />

    </div>

  );
};
export default App;
