import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewMaintenanceRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get("http://localhost:3000/maintenance");
      console.log("Fetched data:", response.data);
      setRequests(response.data);
    } catch (error) {
      console.error("Error fetching maintenance requests:", error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#1877F2", marginBottom: "20px" }}>VIEW MAINTENANCE REQUESTS</h2>

      <div
        style={{
          backgroundColor: "#1e1e1e",
          padding: "20px",
          borderRadius: "12px",
          width: "90%",
          maxWidth: "1000px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
          <thead>
            <tr style={{ backgroundColor: "#2c2c2c", color: "#fff" }}>
              <th style={styles.th}>Room Number</th>
              <th style={styles.th}>Issue Description</th>
              <th style={styles.th}>Priority Level</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index} style={{ backgroundColor: "#292929", textAlign: "center" }}>
                <td style={styles.td}>{request.roomNumber}</td>
                <td style={styles.td}>{request.issueDescription}</td>
                <td style={{ ...styles.td, ...getPriorityStyle(request.priorityLevel) }}>
                  {request.priorityLevel}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Styles
const styles = {
  th: {
    border: "1px solid #444",
    padding: "12px",
    textAlign: "center",
    fontWeight: "bold",
  },
  td: {
    border: "1px solid #444",
    padding: "10px",
  },
};

// Function to style priority levels
const getPriorityStyle = (priority) => {
  switch (priority.toLowerCase()) {
    case "high":
      return { color: "red", fontWeight: "bold" };
    case "medium":
      return { color: "orange", fontWeight: "bold" };
    case "low":
      return { color: "lightgreen", fontWeight: "bold" };
    default:
      return {};
  }
};

export default ViewMaintenanceRequests;
