import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MaintenanceRequestForm = () => {
  const [roomNumber, setRoomNumber] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [priorityLevel, setPriorityLevel] = useState('Medium');
  const [requests, setRequests] = useState([]);

  // Fetch maintenance requests
  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get('http://localhost:3000/maintenance');
      setRequests(response.data);
    } catch (error) {
      console.error('Error fetching maintenance requests:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const maintenanceData = { roomNumber, issueDescription, priorityLevel };

    try {
      const response = await axios.post('http://localhost:3000/maintenance', maintenanceData);
      alert('Maintenance request submitted successfully!');
      setRoomNumber('');
      setIssueDescription('');
      setPriorityLevel('Medium');

      // Refresh the request list after adding a new request
      fetchRequests();
    } catch (error) {
      console.error('Error submitting maintenance request:', error);
      alert('Failed to submit maintenance request. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px', background: '#81818', color: '#fff', minHeight: '100vh', textAlign: 'center' }}>
      <h2 style={{ borderBottom: '2px solid #fff', paddingBottom: '10px', textAlign: 'center' }}>Maintenance Request</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto', padding: '20px', background: '#1e1e1e', borderRadius: '8px', width: '150%' }}>
        <label style={{ display: 'block', marginBottom: '10px', textAlign: 'left' }}>Room Number</label>
        <input
          type="text"
          placeholder="Enter room number"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          style={styles.input}
          required
        />

        <label style={{ display: 'block', marginBottom: '10px', textAlign: 'left' }}>Issue Description</label>
        <textarea
          placeholder="Describe the issue"
          value={issueDescription}
          onChange={(e) => setIssueDescription(e.target.value)}
          style={styles.textarea}
          required
        />

        <label style={{ display: 'block', marginBottom: '10px', textAlign: 'left' }}>Priority Level</label>
        <select
          value={priorityLevel}
          onChange={(e) => setPriorityLevel(e.target.value)}
          style={styles.select}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button type="submit" style={styles.submitButton}>
          Submit Request
        </button>
      </form>

      {/* Display Maintenance Requests */}
      <div style={{ marginTop: '30px', padding: '20px', background: '#1e1e1e', borderRadius: '8px' }}>
        <h3>Submitted Requests</h3>
        {requests.length === 0 ? (
          <p>No maintenance requests found.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {requests.map((req) => (
              <li key={req._id} style={styles.listItem}>
                <strong>Room:</strong> {req.roomNumber} | 
                <strong> Issue:</strong> {req.issueDescription} | 
                <strong> Priority:</strong> {req.priorityLevel}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const styles = {
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #444',
    background: '#252525',
    color: '#fff',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    height: '80px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #444',
    background: '#252525',
    color: '#fff',
  },
  select: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #444',
    background: '#252525',
    color: '#fff',
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#808080',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #444',
    textAlign: 'left',
    color: '#fff',
  },
};

export default MaintenanceRequestForm;
