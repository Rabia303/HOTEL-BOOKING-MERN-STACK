import React, { useState, useEffect } from "react";
import axios from "axios";

const HousekeepingManagement = () => {
  const [rooms, setRooms] = useState([]);

  // Fetch rooms from the backend
  useEffect(() => {
    fetchRooms();
  }, []);
  
  const fetchRooms = async () => {
    try {
      const response = await axios.get("http://localhost:3000/rooms");
      setRooms(response.data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
      alert("Failed to fetch rooms. Check server connection.");
    }
  };
  
  

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Housekeeping Management</h2>

      {/* Room Table */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Room Number</th>
            <th style={thStyle}>Status</th>
            {/* <th style={thStyle}>Last Cleaned</th> */}
            <th style={thStyle}>Next Cleaning</th>
            <th style={thStyle}>Maintenance Issue</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room._id} style={trStyle}>
              <td style={tdStyle}>Room {room.roomNumber}</td>
              <td style={{ ...tdStyle, color: getStatusColor(room.status) }}>
                {room.status}
              </td>
              <td style={tdStyle}>{room.lastCleaned || "N/A"}</td>
              {/* <td style={tdStyle}>{room.nextCleaning || "Not scheduled"}</td> */}
              <td style={tdStyle}>{room.maintenanceIssue || "None"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Helper function to get status color
const getStatusColor = (status) => {
  switch (status) {
    case "Clean":
      return "#4CAF50"; // Green
    case "Needs Cleaning":
      return "#F44336"; // Red
    case "In Progress":
      return "#FF9800"; // Orange
    default:
      return "#000"; // Black
  }
};

// Styles
const containerStyle = {
  padding: "20px",
  backgroundColor: "#181818",
  color: "#fff",
  minHeight: "100vh",
  fontFamily: "Arial, sans-serif",
};

const headerStyle = {
  textAlign: "center",
  fontSize: "24px",
  fontWeight: "600",
  marginBottom: "20px",
  color: "#4a90e2",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  backgroundColor: "#1e1e1e",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
};

const thStyle = {
  padding: "12px",
  backgroundColor: "#333",
  color: "#fff",
  fontSize: "14px",
  fontWeight: "600",
  textAlign: "left",
};

const trStyle = {
  borderBottom: "1px solid #444",
  transition: "background-color 0.3s",
  ":hover": {
    backgroundColor: "#2d2d2d",
  },
};

const tdStyle = {
  padding: "12px",
  fontSize: "14px",
  color: "#fff",
};

export default HousekeepingManagement;