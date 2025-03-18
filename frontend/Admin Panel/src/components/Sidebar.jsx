import React from "react";
import { 
  Home, Users, Bed, CalendarCheck, FilePlus, Bell, 
  Settings as SettingsIcon, UserPlus, ClipboardList, Wrench, 
  Phone,ClipboardCheck, ConciergeBell 
} from "lucide-react";
import { Link } from "react-router-dom";
import "../style/Sidebar.css";
import "../style/components.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">🏨 Hotel Admin</h2>
      <ul className="menu">
        <li><Link to="/"><Home size={20} /> Dashboard</Link></li>
        <li><Link to="/rooms"><Bed size={20} /> Room Management</Link></li>
        <li><Link to="/add-room"><FilePlus size={20} /> Add Room</Link></li>
        <li><Link to="/users"><Users size={20} /> User Management</Link></li>
        <li><Link to="/add-user"><UserPlus size={20} /> Add User</Link></li>
        <li><Link to="/HousekeepingTable"><ClipboardList size={20} /> Housekeeping</Link></li>
        <li><Link to="/GuestProfiles"><ClipboardCheck size={20} /> Guest Profiles</Link></li>
        <li><Link to="/booked"><CalendarCheck size={20} /> Booking Management</Link></li>
        {/* <li><Link to="/HousekeepingManagement"><Brush size={20} />Housekeeping Management</Link></li> */}
        <li><Link to="/HousekeepingManagement"><ConciergeBell size={20} /> Room Service</Link></li>
        <li><Link to="/Contact"><Phone size={20} /> Contact</Link></li>
        <li><Link to="/maintenance"><Wrench size={20} /> Maintenance</Link></li>
        <li><Link to="/settings"><SettingsIcon size={20} /> Settings</Link></li>
        <li><Link to="/staff-management"><Users size={20} /> Staff Management</Link></li>
        <li><Link to="/ViewSettings"><SettingsIcon size={20} /> Default Settings</Link></li>
        <li><Link to="/ViewMaintenanceRequests"><Bell size={20} /> Maintenance Requests</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
