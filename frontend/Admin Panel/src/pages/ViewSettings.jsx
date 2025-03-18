import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewSettings = () => {
  const [settings, setSettings] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await axios.get("http://localhost:3000/settings");
      if (response.data.length > 0) {
        setSettings(response.data[0]);
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };

  const handleInputChange = (e, section, field) => {
    setSettings((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: e.target.value },
    }));
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/settings/${settings._id}`, settings);
      alert("Settings updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating settings:", error);
      alert("Failed to update settings.");
    }
  };


  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Edit Hotel Settings</h2>

      {settings ? (
        <div style={styles.card}>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
            <thead>
              <tr style={styles.tableHeader}>
                <th style={styles.th}>Category</th>
                <th style={styles.th}>Value</th>
              </tr>
            </thead>
            <tbody>
              {/* Room Rates */}
              {Object.entries(settings.roomRates).map(([key, value]) => (
                <tr key={key}>
                  <td style={styles.td}>{key.replace(/([A-Z])/g, " $1")}</td>
                  <td style={styles.td}>
                    {isEditing ? (
                      <input
                        type="number"
                        value={value}
                        onChange={(e) => handleInputChange(e, "roomRates", key)}
                        style={styles.input}
                      />
                    ) : (
                      `$${value}`
                    )}
                  </td>
                </tr>
              ))}

              {/* Tax Management */}
              {Object.entries(settings.taxManagement).map(([key, value]) => (
                <tr key={key}>
                  <td style={styles.td}>{key.replace(/([A-Z])/g, " $1")}</td>
                  <td style={styles.td}>
                    {isEditing ? (
                      <input
                        type="number"
                        value={value}
                        onChange={(e) => handleInputChange(e, "taxManagement", key)}
                        style={styles.input}
                      />
                    ) : (
                      `${value}%`
                    )}
                  </td>
                </tr>
              ))}

              {/* Hotel Policies */}
              {Object.entries(settings.hotelPolicies).map(([key, value]) => (
                <tr key={key}>
                  <td style={styles.td}>{key.replace(/([A-Z])/g, " $1")}</td>
                  <td style={styles.td}>
                    {isEditing ? (
                      key === "cancellationPolicy" ? (
                        <select
                          value={value}
                          onChange={(e) => handleInputChange(e, "hotelPolicies", key)}
                          style={styles.input}
                        >
                          <option value="24 hours before check-in">24 hours before check-in</option>
                          <option value="48 hours before check-in">48 hours before check-in</option>
                          <option value="72 hours before check-in">72 hours before check-in</option>
                        </select>
                      ) : key === "petPolicy" ? (
                        <select
                          value={value}
                          onChange={(e) => handleInputChange(e, "hotelPolicies", key)}
                          style={styles.input}
                        >
                          <option value="No pets allowed">No pets allowed</option>
                          <option value="Pets allowed with fee">Pets allowed with fee</option>
                          <option value="Pets allowed">Pets allowed</option>
                        </select>
                      ) : (
                        <input
                          type={key.includes("Time") ? "time" : "text"}
                          value={value}
                          onChange={(e) => handleInputChange(e, "hotelPolicies", key)}
                          style={styles.input}
                        />
                      )
                    ) : (
                      value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={() => (isEditing ? handleUpdate() : setIsEditing(true))}
            style={styles.button}
          >
            {isEditing ? "Save Changes" : "Edit Settings"}
          </button>
        </div>
      ) : (
        <p style={{ color: "#bbb", fontSize: "18px", marginTop: "20px" }}>No settings available.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#121212",
    color: "#fff",
    minHeight: "100vh",
    padding: "50px 20px",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    color: "#4CAF50",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#1e1e1e",
    padding: "20px",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "800px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
  },
  tableHeader: {
    backgroundColor: "#2c2c2c",
    color: "#fff",
  },
  th: {
    border: "1px solid #444",
    padding: "12px",
    textAlign: "left",
    fontWeight: "bold",
  },
  td: {
    border: "1px solid #444",
    padding: "12px",
    textAlign: "left",
    backgroundColor: "#292929",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #444",
    backgroundColor: "#333",
    color: "#fff",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background-color 0.3s",
    marginTop: "20px",
  },
};

export default ViewSettings;
