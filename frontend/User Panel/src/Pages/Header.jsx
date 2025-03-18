import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/hms.png";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const isMenuOpenRef = useRef(isMenuOpen);
  const isLoggedIn = localStorage.getItem("token");
  const [user, setUser] = useState(isLoggedIn);

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(localStorage.getItem("token")); // Update user state on login/logout
    };
  
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const updateAuthState = () => {
      setUser(localStorage.getItem("token")); 
    };

    window.addEventListener("authChange", updateAuthState);
    return () => {
      window.removeEventListener("authChange", updateAuthState);
    };
  }, []);
  

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false);
    };

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (!isMenuOpenRef.current) {
        const currentScrollY = window.scrollY;
        setShowHeader(currentScrollY <= lastScrollY);
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen && isMobile ? "hidden" : "auto";
  }, [isMenuOpen, isMobile]);
  useEffect(() => {
    const updateAuthState = () => {
      setUser(localStorage.getItem("token")); // Update state when login occurs
    };
  
    window.addEventListener("login", updateAuthState);
    return () => {
      window.removeEventListener("login", updateAuthState);
    };
  }, []);
  
  
  const navigate = useNavigate();


  const logout = () => {
    localStorage.removeItem("token");
    setUser(null); // Immediately update UI
    window.dispatchEvent(new Event("authChange")); // Notify other components
    alert("Logged out successfully!");
    navigate("/loginUser");
  };


  // Style objectsF
  const headerStyle = {
    background: "rgba(240, 240, 240, 0.95)",
    padding: "10px 30px",
    position: "fixed",
    top: showHeader ? "0" : "-90px",
    width: "100%",
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "top 0.3s ease",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Poppins', sans-serif",
    height: "90px",
  };

  const logoStyle = {
    maxHeight: isMobile ? "70px" : "200px",
    width: "auto",
    marginTop: "25px",
    transition: "all 0.3s ease",
  };

  const menuStyle = {
    display: "flex",
    listStyle: "none",
    padding: 0,
    margin: 0,
    alignItems: "center",
    position: isMobile ? "fixed" : "static",
    top: "90px",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: isMobile ? "rgba(240, 240, 240, 0.98)" : "transparent",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: isMobile ? "flex-start" : "center",
    transform: isMobile && !isMenuOpen ? "translateX(-100%)" : "translateX(0)",
    transition: "transform 0.3s ease",
    overflowY: "auto",
    paddingTop: isMobile ? "20px" : 0,
    gap: isMobile ? 0 : "1.5vw",
  };

  const menuItemStyle = {
    margin: isMobile ? "0 0 20px 0" : "0",
  };

  const linkStyle = {
    color: "#000",
    textDecoration: "none",
    fontSize: isMobile ? "18px" : "clamp(14px, 1.1vw, 16px)",
    fontWeight: "600",
    padding: isMobile ? "15px 25px" : "10px 20px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    display: "block",
    width: isMobile ? "100%" : "auto",
    textAlign: "center",
    background: "none",
    border: "none",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
  };
  const authButtonStyle = {
    ...linkStyle,
    backgroundColor: user ? "#ff4444" : "#4CAF50", 
    color: "white",
    padding: isMobile ? "15px 25px" : "10px 25px",
    border: "none",
    borderRadius: "25px",
    marginLeft: !isMobile && "auto",
    ":hover": {
      backgroundColor: user ? "#cc0000" : "#45a049", 
    },
  };
  

  const hamburgerStyle = {
    display: isMobile ? "flex" : "none",
    background: "none",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    zIndex: 1001,
  };

  return (
    <nav style={headerStyle}>
      <Link to="/">
        <img src={logo} alt="LuxuryStay Logo" style={logoStyle} />
      </Link>

      <button
        style={hamburgerStyle}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d={
              isMenuOpen
                ? "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                : "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            }
          />
        </svg>
      </button>

      <ul style={menuStyle}>
        {/* Menu Items */}
        <li style={menuItemStyle}>
          <Link to="/" style={linkStyle} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/rooms" style={linkStyle} onClick={() => setIsMenuOpen(false)}>
            Rooms
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/explore" style={linkStyle} onClick={() => setIsMenuOpen(false)}>
            Explore
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/services" style={linkStyle} onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/gallery" style={linkStyle} onClick={() => setIsMenuOpen(false)}>
            Gallery
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/testimonials" style={linkStyle} onClick={() => setIsMenuOpen(false)}>
            Testimonials
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/about" style={linkStyle} onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
        </li>
        <li style={menuItemStyle}>
          <Link to="/contact" style={linkStyle} onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </li>

        {/* Auth Button */}
        <li style={{ ...menuItemStyle, marginLeft: !isMobile && "auto" }}>
          {isLoggedIn ? (
            <button onClick={logout} style={authButtonStyle} color="red">
              Logout
            </button>
          ) : (
            <Link to="/loginUser" style={authButtonStyle} onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;