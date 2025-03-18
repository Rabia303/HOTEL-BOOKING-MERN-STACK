import React, { useEffect, useState } from "react";
import axios from "axios";

const RoomManagement = () => {
  const [rooms, setRooms] = useState([]);
  const [editData, setEditData] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // Fetch rooms from backend
  const fetchRooms = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/rooms");
      setRooms(response.data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  // Handle Edit
  const handleEdit = (room) => {
    setEditData(room);
    setShowEditModal(true);
  };

  // Update Room
  const updateRoom = async () => {
    try {
      await axios.put(`http://localhost:3000/api/rooms/${editData._id}`, editData);
      fetchRooms(); // Refresh the list
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating room:", error);
    }
  };

  // Delete Room
  const deleteRoom = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/rooms/${id}`);
      fetchRooms(); // Refresh the list
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh", padding: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: "26px", marginBottom: "20px" }}>Room Management</h1>
      <div style={{ overflowX: "auto", borderRadius: "8px", backgroundColor: "#1e1e1e", padding: "10px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#333", color: "#fff", fontSize: "16px" }}>
              <th style={{ padding: "15px", textAlign: "left" }}>Room Name</th>
              <th style={{ padding: "15px", textAlign: "left" }}>Type</th>
              <th style={{ padding: "15px", textAlign: "left" }}>Room Size</th>
              <th style={{ padding: "15px", textAlign: "left" }}>Location</th>
              <th style={{ padding: "15px", textAlign: "left" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.length > 0 ? (
              rooms.map((room) => (
                <tr key={room._id} style={{ borderBottom: "1px solid #555" }}>
                  <td style={{ padding: "15px", color: "#fff" }}>{room.roomName}</td>
                  <td style={{ padding: "15px", color: "#fff" }}>{room.roomType}</td>
                  <td style={{ padding: "15px", color: "#fff" }}>{room.roomSize}</td>
                  <td style={{ padding: "15px", color: "#fff" }}>{room.location}</td>
                  <td style={{ padding: "15px", display: "flex", gap: "10px" }}>
                    <button onClick={() => handleEdit(room)} style={{ padding: "10px", backgroundColor: "#6c757d", color: "#fff", borderRadius: "5px", cursor: "pointer" }}>Edit</button>
                    <button onClick={() => deleteRoom(room._id)} style={{ padding: "10px", backgroundColor: "#dc3545", color: "#fff", borderRadius: "5px", cursor: "pointer" }}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ padding: "15px", textAlign: "center", color: "#fff" }}>No rooms available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showEditModal && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.7)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ backgroundColor: "gray", padding: "20px", borderRadius: "10px" }}>
            <h2>Edit Room</h2>
            <label>Room Name:</label>
            <input type="text" value={editData.roomName} onChange={(e) => setEditData({ ...editData, roomName: e.target.value })} />
            <label>Room Overview:</label>
            <input type="text" value={editData.overview} onChange={(e) => setEditData({ ...editData, overview: e.target.value })} />
            <label>Room view:</label>
            <input type="text" value={editData.view} onChange={(e) => setEditData({ ...editData, view: e.target.value })} />
            <label>occupancy:</label>
            <input type="text" value={editData.occupancy} onChange={(e) => setEditData({ ...editData, occupancy: e.target.value })} />
            <label>Room Description:</label>
            <input type="text" value={editData.roomDescription} onChange={(e) => setEditData({ ...editData, roomDescription: e.target.value })} />
            <label>Room Type:</label>
            <input type="text" value={editData.roomType} onChange={(e) => setEditData({ ...editData, roomType: e.target.value })} />
            <label>Price:</label>
            <input type="number" value={editData.roomSize} onChange={(e) => setEditData({ ...editData, price: e.target.value })} />
            <label>Location:</label>
            <input type="text" value={editData.location} onChange={(e) => setEditData({ ...editData, location: e.target.value })} />
            <div>
              <button onClick={updateRoom} style={{ backgroundColor: "#28a745", color: "#fff", padding: "10px", marginTop: "10px" }}>Save</button>
              <button onClick={() => setShowEditModal(false)} style={{ backgroundColor: "#dc3545", color: "#fff", padding: "10px", marginLeft: "10px" }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomManagement;
