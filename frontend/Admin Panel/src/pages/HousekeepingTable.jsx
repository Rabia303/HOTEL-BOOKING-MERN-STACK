import React, { useState, useEffect } from "react";
import axios from "axios";

const HousekeepingTable = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoomNumber, setNewRoomNumber] = useState("");
  const [newIssue, setNewIssue] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");

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
    }
  };

  const addNewRoom = async () => {
    if (!newRoomNumber) return;
  
    try {
      const response = await axios.post("http://localhost:3000/addRoom", {
        roomNumber: parseInt(newRoomNumber),
        status: "Clean",
        lastCleaned: new Date().toLocaleString(),
        nextCleaning: scheduleTime || "Not scheduled",
        maintenanceIssue: newIssue || "",
      });
  
      setRooms([...rooms, response.data]);
      setNewRoomNumber("");
      setScheduleTime("");
      setNewIssue("");
  
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Room already exists! Please enter a different room number.");
      } else {
        console.error("Error adding room:", error);
      }
    }
  };
  
  const scheduleCleaning = async (roomId) => {
    if (!scheduleTime) return;
  
    try {
      const response = await axios.put(`http://localhost:3000/updateNextCleaning/${roomId}`, {
        nextCleaning: scheduleTime,
      });
  
      // Ensure only the targeted room updates in state
      setRooms(rooms.map((room) => 
        room._id === roomId ? { ...room, nextCleaning: response.data.nextCleaning } : room
      ));
  
      setScheduleTime(""); // Clear input after scheduling
    } catch (error) {
      console.error("Error scheduling cleaning:", error);
      alert("Failed to schedule cleaning.");
    }
  };
  
  const reportIssue = async (roomId) => {
    if (!newIssue) return;
  
    try {
      const response = await axios.put(`http://localhost:3000/updateMaintenance/${roomId}`, {
        maintenanceIssue: newIssue,
      });
  
      // Ensure only the targeted room updates in state
      setRooms(rooms.map((room) => 
        room._id === roomId ? response.data : room
      ));
  
      setNewIssue("");
    } catch (error) {
      console.error("Error reporting issue:", error);
      alert("Failed to report issue.");
    }
  };
  
  const updateStatus = async (roomId, newStatus) => {
    try {
      const response = await axios.put(`http://localhost:3000/updateRoomStatus/${roomId}`, {
        status: newStatus,
      });
  
      // Ensure only the targeted room updates in state
      setRooms(rooms.map((room) => 
        room._id === roomId ? response.data : room
      ));
  
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update room status.");
    }
  };
  

  return (
    <div style={containerStyle}>
      <div style={headerContainer}>
        <h1 style={titleStyle}>Housekeeping Management</h1>

        <div style={roomCreationStyle}>
          <input
            type="number"
            placeholder="Enter room number"
            value={newRoomNumber}
            onChange={(e) => setNewRoomNumber(e.target.value)}
            style={inputStyle}
          />
          <button style={addButton} onClick={addNewRoom}>
            + Add Room
          </button>
        </div>

        <div style={statsContainer}>
          <div style={statItem}>
            <span style={statNumber}>{rooms.length}</span>
            <span style={statLabel}>Total Rooms</span>
          </div>
          <div style={statItem}>
            <span style={{ ...statNumber, color: "#4CAF50" }}>
              {rooms.filter((room) => room.status === "Clean").length}
            </span>
            <span style={statLabel}>Clean</span>
          </div>
          <div style={statItem}>
            <span style={{ ...statNumber, color: "#FF9800" }}>
              {rooms.filter((room) => room.status === "In Progress").length}
            </span>
            <span style={statLabel}>In Progress</span>
          </div>
          <div style={statItem}>
            <span style={{ ...statNumber, color: "#F44336" }}>
              {rooms.filter((room) => room.status === "Maintenance Needed").length}
            </span>
            <span style={statLabel}>Needs Attention</span>
          </div>
        </div>
      </div>

      <div style={gridContainer}>
        {rooms.map((room) => (
          <div key={room._id} style={cardStyle}>
            <div style={cardHeader}>
              <span style={roomNumber}>Room {room.roomNumber}</span>
              <span style={statusBadge(room.status)}>{room.status}</span>
            </div>

            <div style={cardBody}>
              <div style={infoRow}>
                <span style={infoLabel}>Next Cleaning:</span>
                <span style={infoValue}>{room.lastCleaned || "N/A"}</span>
              </div>

              {/* <div style={infoRow}>
                <span style={infoLabel}>Next Cleaning:</span>
                <span style={infoValue}>{room.nextCleaning || "Not scheduled"}</span>
              </div> */}

              {room.maintenanceIssue && (
                <div style={alertBox}>⚠️ Maintenance Issue: {room.maintenanceIssue}</div>
              )}

              <div style={infoRow}>
                <span style={infoLabel}>Next Cleaning:</span>
                <span style={infoValue}>{room.nextCleaning || "Not scheduled"}</span>
              </div>

              <div style={actionSection}>
                <input
                  type="datetime-local"
                  value={scheduleTime}
                  onChange={(e) => setScheduleTime(e.target.value)}
                  style={dateInput}
                />
                <button
                  style={primaryButton}
                  onClick={() => scheduleCleaning(room._id)}
                >
                  Schedule Cleaning
                </button>

                <div style={issueReport}>
                  <input
                    type="text"
                    placeholder="Report maintenance issue..."
                    value={newIssue}
                    onChange={(e) => setNewIssue(e.target.value)}
                    style={textInput}
                  />
                  <button
                    style={secondaryButton}
                    onClick={() => reportIssue(room._id)}
                  >
                    Report Issue
                  </button>
                </div>

                <div style={buttonGroup}>
                  <button
                    style={successButton}
                    onClick={() => updateStatus(room._id, "Clean")}
                  >
                    Mark Clean
                  </button>
                  <button
                    style={warningButton}
                    onClick={() => updateStatus(room._id, "In Progress")}
                  >
                    In Progress
                  </button>
                </div>


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles (same as before)
const containerStyle = {
  padding: "32px",
  backgroundColor: "#121212",
  minHeight: "100vh",
  fontFamily: "'Segoe UI', sans-serif",
  color: "#fff",
};

const headerContainer = {
  marginBottom: "32px",
  padding: "24px",
  backgroundColor: "#1e1e1e",
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const titleStyle = {
  fontSize: "28px",
  fontWeight: "600",
  color: "#fff",
  marginBottom: "16px",
};

const statsContainer = {
  display: "flex",
  gap: "24px",
  alignItems: "center",
};

const statItem = {
  textAlign: "center",
  padding: "12px 20px",
  backgroundColor: "#333",
  borderRadius: "8px",
};

const statNumber = {
  display: "block",
  fontSize: "24px",
  fontWeight: "700",
  color: "#fff",
};

const statLabel = {
  fontSize: "14px",
  color: "#ccc",
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
  gap: "24px",
};

const cardStyle = {
  backgroundColor: "#1e1e1e",
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
};

const cardHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 24px",
  backgroundColor: "#333",
  borderBottom: "1px solid #444",
};

const roomNumber = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#fff",
};

const statusBadge = (status) => ({
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "600",
  backgroundColor:
    status === "Clean"
      ? "#2E7D32"
      : status === "Needs Cleaning"
        ? "#D32F2F"
        : status === "In Progress"
          ? "#EF6C00"
          : "#6A1B9A",
  color: "#fff",
});

const cardBody = {
  padding: "24px",
};

const infoRow = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "16px",
};

const infoLabel = {
  fontSize: "14px",
  color: "#ccc",
};

const infoValue = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#fff",
};

const alertBox = {
  padding: "12px",
  backgroundColor: "#FF9800",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "14px",
  margin: "16px 0",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const actionSection = {
  borderTop: "1px solid #444",
  paddingTop: "16px",
  marginTop: "16px",
};

const dateInput = {
  width: "100%",
  padding: "10px",
  border: "1px solid #444",
  borderRadius: "8px",
  marginBottom: "12px",
  fontSize: "14px",
  backgroundColor: "#333",
  color: "#fff",
};

const textInput = {
  ...dateInput,
  marginBottom: "8px",
};

const buttonGroup = {
  display: "flex",
  gap: "8px",
  marginTop: "12px",
};

const baseButton = {
  padding: "10px 16px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "600",
  transition: "all 0.2s ease",
};

const primaryButton = {
  ...baseButton,
  backgroundColor: "#4CAF50",
  color: "white",
  width: "100%",
  marginBottom: "12px",
};

const secondaryButton = {
  ...baseButton,
  backgroundColor: "#333",
  color: "#fff",
  border: "1px solid #444",
};

const successButton = {
  ...baseButton,
  backgroundColor: "#4CAF50",
  color: "white",
  flex: 1,
};

const warningButton = {
  ...baseButton,
  backgroundColor: "#FF9800",
  color: "white",
  flex: 1,
};

const roomCreationStyle = {
  display: "flex",
  gap: "16px",
  marginBottom: "24px",
};

const inputStyle = {
  padding: "12px",
  border: "1px solid #444",
  borderRadius: "8px",
  fontSize: "16px",
  flex: 1,
  backgroundColor: "#333",
  color: "#fff",
};

const addButton = {
  padding: "12px 24px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#45a049",
  },
};

const issueReport = {
  margin: "12px 0",
};

export default HousekeepingTable;