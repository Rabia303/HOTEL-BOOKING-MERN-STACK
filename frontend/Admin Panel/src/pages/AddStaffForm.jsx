import React, { useState } from "react";
import axios from "axios";

const AddStaffForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    duty: "",
    contact: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const staffData = {
      name: formData.name,
      role: formData.role,
      duty: formData.duty,
      contact: formData.contact,
      status: formData.status,
    };

    try {
      const response = await axios.post("http://localhost:3000/addStaff", staffData);
      console.log("New Staff Added:", response.data);
      alert("Staff Added Successfully!");
      onClose(); // Close the form after successful submission
    } catch (error) {
      console.error("Error adding staff:", error);
      alert("There was an error adding the staff.");
    }
  };

  return (
    <div style={{ backgroundColor: "#1e1e1e", padding: "20px", borderRadius: "10px", color: "#fff" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#4a90e2" }}>Add New Staff Member</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          name="name"
          placeholder="Staff Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="">Select Role</option>
          <option value="Manager">Manager</option>
          <option value="Receptionist">Receptionist</option>
          <option value="Housekeeping">Housekeeping</option>
        </select>
        <input
          type="text"
          name="duty"
          placeholder="Duty"
          value={formData.duty}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button type="submit" style={submitButtonStyle}>
            Submit
          </button>
          <button type="button" onClick={onClose} style={cancelButtonStyle}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

// Reusable styles
const inputStyle = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #444",
  backgroundColor: "#252525",
  color: "#fff",
  outline: "none",
};

const submitButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#4a90e2",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const cancelButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#808080",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default AddStaffForm;