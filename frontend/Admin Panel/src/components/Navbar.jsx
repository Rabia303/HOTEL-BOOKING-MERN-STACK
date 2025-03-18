import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    // Listen for auth changes
    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("authChange")); 
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#2d2d2d",
        color: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1000,
        height: "60px",
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        <span style={{ color: "#4a90e2" }}>Hotel</span> Admin
      </div>

      {/* Login/Logout Button */}
      <div style={{ position: "absolute", right: "5%" }}>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            style={{
              padding: "8px 16px",
              backgroundColor: "#666",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#555")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#666")}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "#666",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#555")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#666")}
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
