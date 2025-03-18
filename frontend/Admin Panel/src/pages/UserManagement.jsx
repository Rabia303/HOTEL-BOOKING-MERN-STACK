import React, { useState, useEffect } from "react";
import axios from "axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from the backend
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh", padding: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: "26px", marginBottom: "20px" }}>User Management</h1>
      <div style={{ overflowX: "auto", borderRadius: "8px", backgroundColor: "#1e1e1e", padding: "10px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#333", color: "#fff", fontSize: "16px" }}>
              <th style={{ padding: "15px", borderBottom: "2px solid #555", textAlign: "left" }}>Name</th>
              <th style={{ padding: "15px", borderBottom: "2px solid #555", textAlign: "left" }}>Email</th>
              <th style={{ padding: "15px", borderBottom: "2px solid #555", textAlign: "left" }}>Role</th>
              {/* <th style={{ padding: "15px", borderBottom: "2px solid #555", textAlign: "left" }}>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} style={{ borderBottom: "1px solid #555", transition: "background-color 0.3s", ":hover": { backgroundColor: "#333" } }}>
                <td style={{ padding: "15px", color: "#fff" }}>{user.name}</td>
                <td style={{ padding: "15px", color: "#fff" }}>{user.email}</td>
                <td style={{ padding: "15px", color: "#fff" }}>{user.role}</td>
                {/* <td style={{ padding: "15px", display: "flex", gap: "10px" }}>
                  <button style={{ padding: "10px 20px", backgroundColor: "#6c757d", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "14px", transition: "background-color 0.3s", ":hover": { backgroundColor: "#5a6268" } }}>Edit</button>
                  <button style={{ padding: "10px 20px", backgroundColor: "#dc3545", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "14px", transition: "background-color 0.3s", ":hover": { backgroundColor: "#c82333" } }}>Delete</button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;