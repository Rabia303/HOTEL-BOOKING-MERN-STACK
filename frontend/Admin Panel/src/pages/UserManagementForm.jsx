import React, { useState } from "react";
import axios from "axios";

const UserManagementForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "guest",
    contact: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/addUser", user);
      console.log("User added:", response.data);
      alert("User added successfully!");
      setUser({
        name: "",
        email: "",
        role: "guest",
        contact: "",
        password: "",
      });
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user. Please try again.");
    }
  };

  return (
    <div style={{ 
      backgroundColor: "#181818", 
      color: "#fff", 
      minHeight: "100vh", 
      padding: "40px 200px", 
      fontFamily: "Arial, sans-serif", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center" 
    }}>
      <h1 style={{ 
        textAlign: "center", 
        fontSize: "28px", 
        marginBottom: "30px", 
        fontWeight: "600", 
        color: "#fff" 
      }}>
        Add New User
      </h1>
      <form onSubmit={handleSubmit} style={{ 
        backgroundColor: "#1e1e1e", 
        padding: "30px", 
        borderRadius: "12px", 
        maxWidth: "600px", 
        width: "150%", 
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)" 
      }}>
        {/* Name Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            value={user.name}
            onChange={handleInputChange}
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "8px", 
              border: "1px solid #444", 
              backgroundColor: "#252525", 
              color: "#fff", 
              fontSize: "14px", 
              outline: "none", 
              transition: "border-color 0.3s", 
              ":focus": { borderColor: "#28a745" } 
            }}
            required
          />
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={user.email}
            onChange={handleInputChange}
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "8px", 
              border: "1px solid #444", 
              backgroundColor: "#252525", 
              color: "#fff", 
              fontSize: "14px", 
              outline: "none", 
              transition: "border-color 0.3s", 
              ":focus": { borderColor: "#28a745" } 
            }}
            required
          />
        </div>

        {/* Role Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Role
          </label>
          <select
            name="role"
            value={user.role}
            onChange={handleInputChange}
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "8px", 
              border: "1px solid #444", 
              backgroundColor: "#252525", 
              color: "#fff", 
              fontSize: "14px", 
              outline: "none", 
              transition: "border-color 0.3s", 
              ":focus": { borderColor: "#28a745" } 
            }}
            required
          >
            <option value="guest">Guest</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="receptionist">Receptionist</option>
            <option value="housekeeping">Housekeeping</option>
          </select>
        </div>

        {/* Contact Field */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Contact Number
          </label>
          <input
            type="text"
            name="contact"
            placeholder="Enter contact number"
            value={user.contact}
            onChange={handleInputChange}
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "8px", 
              border: "1px solid #444", 
              backgroundColor: "#252525", 
              color: "#fff", 
              fontSize: "14px", 
              outline: "none", 
              transition: "border-color 0.3s", 
              ":focus": { borderColor: "#28a745" } 
            }}
            required
          />
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: "30px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "12px", 
            fontSize: "16px", 
            fontWeight: "500", 
            color: "#fff" 
          }}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={user.password}
            onChange={handleInputChange}
            style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "8px", 
              border: "1px solid #444", 
              backgroundColor: "#252525", 
              color: "#fff", 
              fontSize: "14px", 
              outline: "none", 
              transition: "border-color 0.3s", 
              ":focus": { borderColor: "#28a745" } 
            }}
            required
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          style={{ 
            width: "100%", 
            padding: "14px", 
            backgroundColor: "#808080", 
            color: "#fff", 
            border: "none", 
            borderRadius: "8px", 
            cursor: "pointer", 
            fontSize: "16px", 
            fontWeight: "600", 
            transition: "background-color 0.3s", 
            ":hover": { backgroundColor: "#218838" } 
          }}
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserManagementForm;