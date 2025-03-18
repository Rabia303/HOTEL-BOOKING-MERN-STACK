import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state || {};

  return (
    <div style={styles.pageWrapper}>
      <div className="section big-55-height over-hide z-bigger">
        <div className="parallax parallax-top" style={{ backgroundImage: 'url("./src/assets/img/1.jpg")' }} />
        <div className="dark-over-pages" />
        <div className="hero-center-section pages">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 parallax-fade-top">
                <div className="hero-text">Booking Confirmation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div style={styles.container}>
        <FaCheckCircle style={styles.checkIcon} />
        <h2 style={styles.confirmationText}>Your Room is Successfully Booked!</h2>
        <p style={styles.details}><strong>Booking ID:</strong> {bookingData.bookingId || 'N/A'}</p>
        <p style={styles.details}><strong>Name:</strong> {bookingData.name || 'N/A'}</p>
        <p style={styles.details}><strong>Email:</strong> {bookingData.email || 'N/A'}</p>
        <p style={styles.details}><strong>User ID:</strong> {bookingData.userId || 'N/A'}</p>
        <p style={styles.details}><strong>Room Number:</strong> {bookingData.roomNumber || 'N/A'}</p>
        <p style={styles.details}><strong>Check-In:</strong> {bookingData.checkIn || 'N/A'}</p>
        <p style={styles.details}><strong>Check-Out:</strong> {bookingData.checkOut || 'N/A'}</p>
        <p style={styles.details}><strong>Guests:</strong> {bookingData.guests || 'N/A'}</p>
        <p style={styles.details}><strong>Total Amount to Pay:</strong> ${bookingData.totalPrice || 'N/A'}</p>
        <p style={styles.details}><strong>Payment Method:</strong> {bookingData.paymentMethod || 'N/A'}</p>
        <button onClick={() => navigate('/')} style={styles.button}>Return to Home</button>
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
  },
  container: {
    backgroundColor: "#2c2c2c",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
    maxWidth: "900px",
    width: "100%",
    textAlign: "center",
    marginTop: "20px",
  },
  checkIcon: {
    fontSize: "80px",
    color: "#4CAF50",
    marginBottom: "20px",
  },
  confirmationText: {
    fontSize: "24px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  details: {
    fontSize: "18px",
    margin: "10px 0",
    color: "#ccc",
  },
  button: {
    marginTop: "20px",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "white",
    color: "black",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default Confirmation;
