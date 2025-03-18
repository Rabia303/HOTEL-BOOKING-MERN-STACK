import React, { useState } from "react";

const GuestProfiles = () => {
  const [guests, setGuests] = useState([
    { id: 1, name: "Alice Johnson", contact: "123-456-7890", preferences: "Vegan meals" },
    { id: 2, name: "Bob Smith", contact: "987-654-3210", preferences: "Late check-out" },
  ]);
  const [newGuest, setNewGuest] = useState({ name: "", contact: "", preferences: "" });
  const [editingGuest, setEditingGuest] = useState(null);

  const handleAddGuest = (e) => {
    e.preventDefault();
    if (newGuest.name && newGuest.contact) {
      setGuests([...guests, { id: Date.now(), ...newGuest }]);
      setNewGuest({ name: "", contact: "", preferences: "" });
    }
  };

  const handleEditGuest = (id) => {
    const guestToEdit = guests.find((g) => g.id === id);
    setEditingGuest(guestToEdit);
  };

  const handleUpdateGuest = (e) => {
    e.preventDefault();
    setGuests(guests.map((g) => (g.id === editingGuest.id ? editingGuest : g)));
    setEditingGuest(null);
  };

  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh", padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px" }}>Guest Profiles</h1>
      <p style={{ textAlign: "center", marginBottom: "30px" }}>Create and manage guest profiles with personal information, contact details, and preferences.</p>
      
      <div style={{ maxWidth: "500px", margin: "0 auto", backgroundColor: "#1e1e1e", padding: "20px", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)" }}>
        <form onSubmit={editingGuest ? handleUpdateGuest : handleAddGuest} style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "5px" }}>Guest Name:</label>
          <input type="text" placeholder="Enter name" value={editingGuest ? editingGuest.name : newGuest.name} onChange={(e) => editingGuest ? setEditingGuest({ ...editingGuest, name: e.target.value }) : setNewGuest({ ...newGuest, name: e.target.value })} style={{ padding: "10px", marginBottom: "15px", borderRadius: "5px", border: "none", backgroundColor: "#2a2a2a", color: "#fff" }} />
          
          <label style={{ marginBottom: "5px" }}>Contact:</label>
          <input type="text" placeholder="Enter contact details" value={editingGuest ? editingGuest.contact : newGuest.contact} onChange={(e) => editingGuest ? setEditingGuest({ ...editingGuest, contact: e.target.value }) : setNewGuest({ ...newGuest, contact: e.target.value })} style={{ padding: "10px", marginBottom: "15px", borderRadius: "5px", border: "none", backgroundColor: "#2a2a2a", color: "#fff" }} />
          
          <label style={{ marginBottom: "5px" }}>Preferences:</label>
          <input type="text" placeholder="Enter preferences" value={editingGuest ? editingGuest.preferences : newGuest.preferences} onChange={(e) => editingGuest ? setEditingGuest({ ...editingGuest, preferences: e.target.value }) : setNewGuest({ ...newGuest, preferences: e.target.value })} style={{ padding: "10px", marginBottom: "15px", borderRadius: "5px", border: "none", backgroundColor: "#2a2a2a", color: "#fff" }} />
          
          <button type="submit" style={{ padding: "10px", backgroundColor: "grey", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>{editingGuest ? "Update" : "Save"}</button>
        </form>
      </div>

      <div style={{ maxWidth: "600px", margin: "20px auto", backgroundColor: "#1e1e1e", padding: "20px", borderRadius: "8px" }}>
        <h2 style={{ textAlign: "center" }}>Guest List</h2>
        {guests.map((g) => (
          <div key={g.id} style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid #444" }}>
            <span>{g.name} - {g.contact} ({g.preferences})</span>
            <button onClick={() => handleEditGuest(g.id)} style={{ backgroundColor: "grey", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer" }}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestProfiles;
