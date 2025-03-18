import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      // Save token in localStorage
      localStorage.setItem("token", response.data.token);

      // Dispatch auth change event to update UI instantly
      window.dispatchEvent(new Event("authChange"));

      // Redirect to the homepage
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Invalid email or password");
      console.error("Login error:", error);
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
          Login
        </h1>
        {error && <p style={{ color: "#ff4444", textAlign: "center", marginBottom: "10px" }}>{error}</p>}
        <form onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "15px", color: "#ccc" }}>
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "#4a90e2" }}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;