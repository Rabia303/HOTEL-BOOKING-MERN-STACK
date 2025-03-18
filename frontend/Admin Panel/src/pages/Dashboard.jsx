import React from "react";

const Dashboard = () => {
  return (
    <div
      style={{
        marginLeft:"-20%",
        backgroundColor: "#181818",
        color: "#fff",
        minHeight: "200vh",
        padding: "40px 1px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "28px", marginBottom: "30px", fontWeight: "600" }}>
        Dashboard
      </h1>

      {/* Cards Container */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Total Bookings Card */}
        <div
          style={{
            backgroundColor: "#1e1e1e",
            padding: "25px",
            borderRadius: "12px",
            width: "220px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.4)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
          }}
        >
          <h3 style={{ fontSize: "18px", marginBottom: "15px", color: "#ccc" }}>Total Bookings</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#4a90e2" }}>120</p>
        </div>

        {/* Occupancy Rate Card */}
        <div
          style={{
            backgroundColor: "#1e1e1e",
            padding: "25px",
            borderRadius: "12px",
            width: "220px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.4)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
          }}
        >
          <h3 style={{ fontSize: "18px", marginBottom: "15px", color: "#ccc" }}>Occupancy Rate</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#4a90e2" }}>85%</p>
        </div>

        {/* Revenue Card */}
        <div
          style={{
            backgroundColor: "#1e1e1e",
            padding: "25px",
            borderRadius: "12px",
            width: "220px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.4)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
          }}
        >
          <h3 style={{ fontSize: "18px", marginBottom: "15px", color: "#ccc" }}>Revenue</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#4a90e2" }}>$25,000</p>
        </div>

        {/* Pending Tasks Card */}
        <div
          style={{
            backgroundColor: "#1e1e1e",
            padding: "25px",
            borderRadius: "12px",
            width: "220px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.4)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
          }}
        >
          <h3 style={{ fontSize: "18px", marginBottom: "15px", color: "#ccc" }}>Pending Tasks</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold", color: "#4a90e2" }}>5</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;