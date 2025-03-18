import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    navigate("/loginUser"); 
  }, [navigate]);

  return null; // Avoid rendering unnecessary elements
};

export default LogoutPage;
