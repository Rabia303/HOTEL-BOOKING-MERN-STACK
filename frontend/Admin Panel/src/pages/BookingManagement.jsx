import React, { useEffect, useState } from "react";
import axios from "axios";

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/bookings");
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const updateStatus = async (bookingId) => {
    try {
      await axios.put(`http://localhost:3000/api/bookings/${bookingId}/status`, { status: "Paid" });
      fetchBookings(); // Refresh data after updating
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const formatDateTime = (isoString) => {
    return new Date(isoString).toLocaleString();
  };

  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: "26px", marginBottom: "20px" }}>Booking Management</h1>
      <div style={{ overflowX: "auto", borderRadius: "8px", backgroundColor: "#1e1e1e", padding: "10px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#333", color: "#fff", fontSize: "16px" }}>
              <th style={{ padding: "15px", borderBottom: "2px solid #555", textAlign: "left" }}>Booking ID</th>
              <th style={{ padding: "15px", borderBottom: "2px solid #555", textAlign: "left" }}>Guest Name</th>
              <th style={{ padding: "15px", borderBottom: "2px solid #555", textAlign: "left" }}>Room No.</th>
              <th style={{ padding: "15px", borderBottom: "2px solid #555", textAlign: "left" }}>Check-In</th>
              <th style={{ padding: "15px", borderBottom: "2px solid #555", textAlign: "left" }}>Check-Out</th>
              <th style={{ padding: "15px", borderBottom: "2px solid #555", textAlign: "left" }}>Status</th>
              <th style={{ padding: "15px", borderBottom: "2px solid #555", textAlign: "left" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking._id} style={{ borderBottom: "1px solid #555" }}>
                  <td style={{ padding: "15px", color: "#fff" }}>{booking._id}</td>
                  <td style={{ padding: "15px", color: "#fff" }}>{booking.name}</td>
                  <td style={{ padding: "15px", color: "#fff" }}>{booking.roomNumber}</td>
                  <td style={{ padding: "15px", color: "#fff" }}>{formatDateTime(booking.checkIn)}</td>
                  <td style={{ padding: "15px", color: "#fff" }}>{formatDateTime(booking.checkOut)}</td>
                  <td style={{ padding: "15px", color: booking.status === "Paid" ? "#28a745" : "#ffc107" }}>
                    {booking.status}
                  </td>
                  <td style={{ padding: "15px" }}>
                    {booking.status !== "Paid" && (
                      <button 
                        onClick={() => updateStatus(booking._id)} 
                        style={{
                          padding: "10px 20px",
                          backgroundColor: "#28a745",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          fontSize: "14px",
                          transition: "background-color 0.3s"
                        }}
                      >
                        Mark as Paid
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ padding: "15px", textAlign: "center", color: "#fff" }}>No bookings available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingManagement;
