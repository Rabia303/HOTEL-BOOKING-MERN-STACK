import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/registerUser", {
        name,
        email,
        password,
      });

      // Redirect to the login page after successful registration
      navigate("/loginUser");
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        setError(error.response.data.message || "Registration failed. Please try again.");
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response from the server. Please check your connection.");
      } else {
        // Something happened in setting up the request
        setError("An error occurred. Please try again.");
      }
      console.error("Registration error:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#181818",
        padding: "1px 100px",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#2d2d2d",
          padding: "30px",
          borderRadius: "10px",
          width: "400px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#4a90e2",
            textAlign: "center",
          }}
        >
          Register
        </h1>
        {error && <p style={{ color: "#ff4444", textAlign: "center", marginBottom: "10px" }}>{error}</p>}
        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#ccc" }}>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                backgroundColor: "#444",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                outline: "none",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#ccc" }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                backgroundColor: "#444",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                outline: "none",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#ccc" }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                backgroundColor: "#444",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                outline: "none",
              }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#4a90e2",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              ":hover": { backgroundColor: "#357abd" },
            }}
          >
            Register
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "15px", color: "#ccc" }}>
          Already have an account?{" "}
          <Link to="/loginUser" style={{ color: "#4a90e2" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;