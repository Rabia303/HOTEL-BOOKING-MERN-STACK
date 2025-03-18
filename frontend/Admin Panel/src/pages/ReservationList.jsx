import React, { useState } from "react";

const ReservationList = () => {
  const [reservations, setReservations] = useState([
    { id: 1, guest: "John Doe", room: 101, checkIn: "2024-03-10", checkOut: "2024-03-15", status: "Confirmed" },
    { id: 2, guest: "Jane Smith", room: 102, checkIn: "2024-03-12", checkOut: "2024-03-17", status: "Pending" },
  ]);

  return (
    <div style={{ padding: "50px", background: "#121212", color: "#fff", minHeight: "100vh" }}>
      <h2 style={{ borderBottom: "2px solid #fff", paddingBottom: "20px",textAlign:"center" }}>Reservation List</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ background: "#222", textAlign: "left" }}>
            <th style={{ padding: "10px" }}>Guest</th>
            <th style={{ padding: "10px" }}>Room</th>
            <th style={{ padding: "10px" }}>Check-In</th>
            <th style={{ padding: "10px" }}>Check-Out</th>
            <th style={{ padding: "10px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((res) => (
            <tr key={res.id} style={{ borderBottom: "1px solid #444" }}>
              <td style={{ padding: "10px" }}>{res.guest}</td>
              <td style={{ padding: "10px" }}>Room {res.room}</td>
              <td style={{ padding: "10px" }}>{res.checkIn}</td>
              <td style={{ padding: "10px" }}>{res.checkOut}</td>
              <td style={{ padding: "10px", color: res.status === "Pending" ? "red" : "#0f0" }}>{res.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
