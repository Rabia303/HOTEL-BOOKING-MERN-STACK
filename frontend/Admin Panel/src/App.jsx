import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import UserManagementForm from "./pages/UserManagementForm";
import RoomManagementForm from "./pages/RoomManagementForm";
import ReservationList from "./pages/ReservationList";
import HousekeepingTable from "./pages/HousekeepingTable";
import MaintenanceRequestForm from "./pages/MaintenanceRequestForm";
import Settings from "./pages/Settings";
import StaffManagement from "./pages/StaffManagement";
import AddStaffForm from "./pages/AddStaffForm";
import "./style/index.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HousekeepingManagement from "./pages/Housekeeping";
import GuestProfiles from "./pages/GuestProfile";
import Contact from "./pages/Contact";
import ViewSettings from "./pages/ViewSettings";
import ViewMaintenanceRequests from "./pages/ViewMaintenanceRequests";
import ProtectedRoute from "./components/ProtectedRoute";
import BookingManagement from "./pages/BookingManagement";
import RoomManagement from "./pages/RoomManagement";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="content">
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Guestprofiles" element={<GuestProfiles />} />
                <Route path="/booked" element={<BookingManagement />} />
                <Route path="/users" element={<UserManagement />} />
                <Route path="/add-user" element={<UserManagementForm />} />
                <Route path="/reservations" element={<ReservationList />} /> 
                  <Route path="/rooms" element={<RoomManagement />} />
                  <Route path="/add-room" element={<RoomManagementForm />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/ViewSettings" element={<ViewSettings />} />
                <Route path="/HousekeepingTable" element={<HousekeepingTable />} />
                <Route path="/HousekeepingManagement" element={<HousekeepingManagement />} />
                <Route path="/maintenance" element={<MaintenanceRequestForm />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/ViewMaintenanceRequests" element={<ViewMaintenanceRequests />} />
                <Route path="/staff-management" element={<StaffManagement />} />
                <Route path="/add-staff" element={<AddStaffForm />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;