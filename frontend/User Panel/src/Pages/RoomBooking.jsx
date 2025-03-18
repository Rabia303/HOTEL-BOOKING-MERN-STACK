import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RiHotelLine } from "react-icons/ri";

const DAILY_RATE = 250; // Fixed daily rate

const RoomBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userId, setUserId] = useState("");

  // Fetch user ID from localStorage on component mount
// Fetch user ID from localStorage on component mount
useEffect(() => {
  const storedUserId = localStorage.getItem("userId");
  if (storedUserId) {
    setUserId(storedUserId);
    console.log("User ID found in localStorage:", storedUserId);
  } else {
    console.error("No user ID found in localStorage.");
    setError("User not authenticated. Please log in.");
  }
}, []);


  // Function to calculate total price
  const calculateTotal = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;

    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);

    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime()) || checkOutDate <= checkInDate) {
      return 0;
    }

    const diffTime = checkOutDate.getTime() - checkInDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays * DAILY_RATE;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!Object.values(formData).every(value => value)) {
      setError("Please fill all required fields");
      return;
    }

    if (!userId) {
      setError("User not authenticated. Please log in.");
      console.error("User ID not found in localStorage.");
      return;
    }

    const bookingData = {
      ...formData,
      totalPrice: calculateTotal(),
      paymentMethod: "cash",
      roomId: room?._id,
      roomNumber: Math.floor(Math.random() * 100) + 1,
      userId,
      roomType: room?.roomType,
    };

    console.log("Booking Data Being Sent:", bookingData);

    try {
      const token = localStorage.getItem("token"); 
      const response = await axios.post("http://localhost:3000/api/book-room", bookingData, {
        headers: { Authorization: token },
      });

      navigate("/confirmation", {
        state: {
          bookingId: response.data.bookingId,
          ...bookingData
        }
      });
    } catch (error) {
      setError("Booking failed. Please try again.");
      console.error("Booking Error:", error.response?.data || error.message);
    }
  };

  if (!room) {
    return <div>No room selected. Please go back and select a room.</div>;
  }

  return (
    <div style={styles.pageWrapper}>
      {successMessage && <div style={styles.successBox}>{successMessage}</div>}
      <div style={styles.container}>
        <div style={styles.contentWrapper}>
          <div style={styles.roomDetails}>
            <h2 style={styles.heading}>Your Room</h2>
            <div style={styles.iconContainer}>
              <RiHotelLine style={styles.icon} />
            </div>
            <p style={styles.roomTitle}>{room.roomName || "Standard Room"}</p>
            <div style={styles.featureGrid}>
              <div style={styles.featureItem}>📏 {room.roomSize} sq.ft.</div>
              <div style={styles.featureItem}>🌆 {room.view}</div>
              <div style={styles.featureItem}>🛏️ {room.bedSize}</div>
              <div style={styles.featureItem}>📶 Free WiFi</div>
            </div>

            <div style={styles.priceSummary}>
              <h3 style={styles.priceHeading}>Price Summary</h3>
              <p style={styles.priceText}>Daily Rate: $250</p>
              <p style={styles.priceText}>Total Nights: {calculateTotal() / DAILY_RATE}</p>
              <p style={styles.totalPrice}>Total: ${calculateTotal()}</p>
            </div>
          </div>

          <div style={styles.bookingForm}>
            <h2 style={styles.heading}>Book Your Stay</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formColumn}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={styles.input}
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={styles.input}
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={styles.input}
                    required
                  />
                </div>
              </div>

              <div style={styles.formColumn}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Check-in Date *</label>
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    style={styles.input}
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Check-out Date *</label>
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    style={styles.input}
                    required
                  />
                </div>

                {error && <p style={styles.error}>{error}</p>}

                <button type="submit" style={styles.button} disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Book Now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    backgroundColor: "#1a1a1a",
    color: "white",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "120px 20px",
    position: "relative",
  },
  container: {
    backgroundColor: "#2c2c2c",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
    maxWidth: "1200px",
    width: "100%",
    marginTop: "20px",
  },
  contentWrapper: {
    display: "flex",
    gap: "40px",
    justifyContent: "space-between",
  },
  roomDetails: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#333",
    borderRadius: "8px",
  },
  bookingForm: {
    flex: 1,
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    borderBottom: "2px solid #ff6b6b",
    paddingBottom: "10px",
    fontWeight: "bold",
  },
  iconContainer: {
    textAlign: "center",
    margin: "20px 0",
  },
  icon: {
    fontSize: "80px",
    color: "#ff6b6b",
  },
  roomTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "15px",
    marginBottom: "30px",
  },
  featureItem: {
    backgroundColor: "#404040",
    padding: "15px",
    borderRadius: "6px",
    textAlign: "center",
  },
  priceSummary: {
    backgroundColor: "#404040",
    padding: "20px",
    borderRadius: "8px",
    marginTop: "20px",
  },
  priceHeading: {
    fontSize: "18px",
    marginBottom: "15px",
  },
  priceText: {
    margin: "8px 0",
    color: "#ccc",
  },
  totalPrice: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#ff6b6b",
    marginTop: "15px",
  },
  form: {
    display: "flex",
    gap: "30px",
  },
  formColumn: {
    flex: 1,
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#ddd",
  },
  input: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#404040",
    border: "none",
    borderRadius: "6px",
    color: "white",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.3s ease",
  },
  error: {
    color: "#ff4444",
    fontSize: "14px",
    margin: "15px 0",
    textAlign: "center",
  },
  successBox: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "15px 30px",
    borderRadius: "6px",
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "16px",
    fontWeight: "bold",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
  },
  button: {
    width: "100%",
    padding: "16px",
    backgroundColor: "#ff6b6b",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "20px",
    ":hover": {
      backgroundColor: "#ff5252",
      transform: "translateY(-2px)",
    },
    ":disabled": {
      backgroundColor: "#999",
      cursor: "not-allowed",
    }
  },
  paymentSection: {
    backgroundColor: '#404040',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
  },
  paymentHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px',
  },
  paymentIcon: {
    fontSize: '24px',
    color: '#ff6b6b',
  },
  paymentTitle: {
    margin: 0,
    fontSize: '18px',
  },
  paymentContent: {
    borderTop: '1px solid #555',
    paddingTop: '15px',
  },
  paymentMethod: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  paymentLabel: {
    fontSize: '16px',
    color: '#ddd',
  },
  paymentNote: {
    fontSize: '14px',
    color: '#999',
    margin: '10px 0 0 0',
  },
};

export default RoomBooking;