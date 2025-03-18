import React, { useState, useRef } from "react";

const roomTypes = ["Single", "Double", "Suite", "Deluxe", "Family"];

const initialState = {
  roomName: "",
  roomDescription: "",
  overview: "",
  roomSize: "",
  occupancy: "",
  view: "",
  smokingAllowed: false,
  bedSize: "",
  location: "",
  roomService: false,
  swimmingPool: false,
  roomType: "",
};

const BookingManagementForm = () => {
  // const [roomData, setRoomData] = useState(initialState);
  const [roomData, setRoomData] = useState({ ...initialState, roomType: "" });
  const [roomImage, setRoomImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRoomData({
      ...roomData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setRoomImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(roomData).forEach((key) => {
      formData.append(key, roomData[key]);
    });

    if (roomImage) {
      formData.append("roomImage", roomImage);
    }

    try {
      const response = await fetch("http://localhost:3000/api/addrooms", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        // Reset form fields
        setRoomData(initialState);
        setRoomImage(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error adding room:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div style={{
      backgroundColor: "#181818",
      color: "#fff",
      minHeight: "100vh",
      padding: "60px 150px",
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
        Add New Room
      </h1>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: "#1e1e1e",
        padding: "30px",
        borderRadius: "12px",
        maxWidth: "600px",
        width: "150%",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)"
      }}>

        {/* Room Name */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{
            display: "block",
            marginBottom: "12px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#fff"
          }}>
            Room Name
          </label>
          <input
            type="text"
            name="roomName"
            placeholder="Enter room name"
            value={roomData.roomName}
            onChange={handleChange}
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
            }}
            required
          />
        </div>

        {/* Room Description */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{
            display: "block",
            marginBottom: "12px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#fff"
          }}>
            Room Description
          </label>
          <textarea
            name="roomDescription"
            placeholder="Enter room description"
            value={roomData.roomDescription}
            onChange={handleChange}
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
            }}
            required
          />
        </div>

        {/* Overview */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{
            display: "block",
            marginBottom: "12px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#fff"
          }}>
            Overview
          </label>
          <textarea
            name="overview"
            placeholder="Enter room overview"
            value={roomData.overview}
            onChange={handleChange}
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
            }}
            required
          />
        </div>

        {/* Room Size & Occupancy */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "25px" }}>
          <div style={{ flex: 1 }}>
            <label style={{
              display: "block",
              marginBottom: "12px",
              fontSize: "16px",
              fontWeight: "500",
              color: "#fff"
            }}>
              Room Size
            </label>
            <input
              type="number"
              name="roomSize"
              placeholder="Enter room size"
              value={roomData.roomSize}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #444",
                backgroundColor: "#252525",
                color: "#fff",
                fontSize: "14px",
                outline: "none",
              }}
              required
            />
          </div>

          <div style={{ flex: 1 }}>
            <label style={{
              display: "block",
              marginBottom: "12px",
              fontSize: "16px",
              fontWeight: "500",
              color: "#fff"
            }}>
              Occupancy
            </label>
            <input
              type="number"
              name="occupancy"
              placeholder="Enter occupancy"
              value={roomData.occupancy}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #444",
                backgroundColor: "#252525",
                color: "#fff",
                fontSize: "14px",
                outline: "none",
              }}
              required
            />
          </div>
        </div>

        {/* View & Bed Size */}
        <div style={{ display: "flex", gap: "20px", marginBottom: "25px" }}>
          <div style={{ flex: 1 }}>
            <label style={{
              display: "block",
              marginBottom: "12px",
              fontSize: "16px",
              fontWeight: "500",
              color: "#fff"
            }}>
              View
            </label>
            <input
              type="text"
              name="view"
              placeholder="Enter view"
              value={roomData.view}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #444",
                backgroundColor: "#252525",
                color: "#fff",
                fontSize: "14px",
                outline: "none",
              }}
              required
            />
          </div>

          <div style={{ flex: 1 }}>
            <label style={{
              display: "block",
              marginBottom: "12px",
              fontSize: "16px",
              fontWeight: "500",
              color: "#fff"
            }}>
              Bed Size
            </label>
            <input
              type="text"
              name="bedSize"
              placeholder="Enter bed size"
              value={roomData.bedSize}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #444",
                backgroundColor: "#252525",
                color: "#fff",
                fontSize: "14px",
                outline: "none",
              }}
              required
            />
          </div>
        </div>

        {/* Location */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{
            display: "block",
            marginBottom: "12px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#fff"
          }}>
            Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            value={roomData.location}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #444",
              backgroundColor: "#252525",
              color: "#fff",
              fontSize: "14px",
              outline: "none",
            }}
            required
          />
        </div>

        {/* Checkboxes */}
        <div style={{ marginBottom: "25px", display: "flex", gap: "30px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              name="smokingAllowed"
              checked={roomData.smokingAllowed}
              onChange={handleChange}
              style={{
                width: "18px",
                height: "18px",
                accentColor: "#28a745"
              }}
            />
            <span style={{ fontSize: "14px" }}>Smoking Allowed</span>
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              name="roomService"
              checked={roomData.roomService}
              onChange={handleChange}
              style={{
                width: "18px",
                height: "18px",
                accentColor: "#28a745"
              }}
            />
            <span style={{ fontSize: "14px" }}>Room Service</span>
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              name="swimmingPool"
              checked={roomData.swimmingPool}
              onChange={handleChange}
              style={{
                width: "18px",
                height: "18px",
                accentColor: "#28a745"
              }}
            />
            <span style={{ fontSize: "14px" }}>Swimming Pool</span>
          </label>
        </div>

        {/* File Upload */}
        <div style={{ marginBottom: "30px" }}>
          <label style={{
            display: "block",
            marginBottom: "12px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#fff"
          }}>
            Upload Room Image
          </label>
          <input
            type="file"
            name="roomImage"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #444",
              backgroundColor: "#252525",
              color: "#fff",
              fontSize: "14px",
              outline: "none",
            }}
            required
          />

        </div>
 {/* Room Type Dropdown */}
 <div style={{ marginBottom: "25px" }}>
        <label>Room Type</label>
        <select
          name="roomType"
          value={roomData.roomType}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #444",
            backgroundColor: "#252525",
            color: "#fff",
            fontSize: "14px",
            outline: "none",
          }}
        >
          <option value="">Select Room Type</option>
          {roomTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
            transition: "background-color 0.3s",
          }}
        >
          Add Room
        </button>
      </form>
    </div>
  );
};

export default BookingManagementForm;