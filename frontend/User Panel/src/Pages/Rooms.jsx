import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const res = await axios.get("http://localhost:3000/fetchroom");
      setRooms(res.data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {rooms.map((room) => (
          <div key={room._id} className="col-md-4 mb-4">
            <div className="card shadow-sm border-0">
              <img 
                src={`http://localhost:3000${room.roomImage}`} 
                alt={room.roomName} 
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }} 
              />
              <div className="card-body">
                <h5 className="card-title">{room.roomName}</h5>
                <p className="card-text">{room.overview.substring(0, 100)}...</p>
                <ul className="list-unstyled">
                  <li><strong>Size:</strong> {room.roomSize} sq.ft.</li>
                  <li><strong>Occupancy:</strong> {room.occupancy}</li>
                  <li><strong>Bed:</strong> {room.bedSize}</li>
                  <li><strong>View:</strong> {room.view}</li>
                </ul>
                <Link 
                  to="/book"
                  state={{ room }} 
                  className="btn btn-primary w-100"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
