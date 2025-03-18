import React, { useState, useEffect } from "react";
import axios from "axios";
import AddStaffForm from "./AddStaffForm";

const StaffManagement = () => {
  const [staff, setStaff] = useState([]);
  const [showAddStaffForm, setShowAddStaffForm] = useState(false);

  // Fetch staff data from the backend
  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await axios.get("http://localhost:3000/staff");
      setStaff(response.data);
    } catch (error) {
      console.error("Error fetching staff:", error);
    }
  };

  // const updateDuty = (id, newDuty) => {
  //   setStaff(staff.map((member) => (member._id === id ? { ...member, duty: newDuty } : member)));
  // };

  return (
    <div style={{ backgroundColor: "#181818", color: "#fff", minHeight: "100vh", padding: "40px", fontFamily: "Arial, sans-serif" }}>
      {/* Page Header */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#4a90e2", marginBottom: "10px" }}>Staff Duty Assignment</h1>
        <p style={{ color: "#aaa", fontSize: "14px" }}>Manage and assign duties to your staff members efficiently.</p>
      </div>

      {/* Staff Table */}
      <div style={{ overflowX: "auto", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <table style={{ width: "100%", backgroundColor: "#2d2d2d", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#333" }}>
            <tr>
              <th style={{ padding: "12px", textAlign: "left", fontSize: "14px", fontWeight: "600", color: "#ccc" }}>Name</th>
              <th style={{ padding: "12px", textAlign: "left", fontSize: "14px", fontWeight: "600", color: "#ccc" }}>Role</th>
              <th style={{ padding: "12px", textAlign: "left", fontSize: "14px", fontWeight: "600", color: "#ccc" }}>Duty</th>
              <th style={{ padding: "12px", textAlign: "left", fontSize: "14px", fontWeight: "600", color: "#ccc" }}>Contact</th>
              <th style={{ padding: "12px", textAlign: "left", fontSize: "14px", fontWeight: "600", color: "#ccc" }}>Update</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((member) => (
              <tr key={member._id} style={{ borderBottom: "1px solid #444" }}>
                <td style={{ padding: "12px", fontWeight: "500" }}>{member.name}</td>
                <td style={{ padding: "12px", color: "#bbb" }}>{member.role}</td>
                <td style={{ padding: "12px", color: "#bbb" }}>{member.duty}</td>
                <td style={{ padding: "12px" }}>{member.contact}</td>
                <td style={{ padding: "12px" }}>
                  <button
                    style={{ padding: "8px 16px", backgroundColor: "#4a90e2", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
                    onClick={() => alert(`Duty updated for ${member.name}`)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Staff Button */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          style={{ padding: "12px 24px", backgroundColor: "#808080", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px", fontWeight: "600" }}
          onClick={() => setShowAddStaffForm(true)}
        >
          Add New Staff
        </button>
      </div>

      {/* Show AddStaffForm when showAddStaffForm is true */}
      {showAddStaffForm && <AddStaffForm onClose={() => setShowAddStaffForm(false)} />}
    </div>
  );
};

export default StaffManagement;