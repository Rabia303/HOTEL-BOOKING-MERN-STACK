import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Explore from './Pages/Explore';
import Gallery from './Pages/Gallery';
import Rooms from './Pages/Rooms';
import Testimonials from './Pages/Testimonials';
import Tandc from './Pages/Tandc';
import Services from './Pages/Services';
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";
import Confirmation from "./Pages/Confirmation";
import RoomBooking from "./Pages/RoomBooking";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute";


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        {/* Public Routes */}
        <Route path="/loginUser" element={<LoginPage />} />
        <Route path="/registerUser" element={<RegisterPage />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/rooms" element={<Rooms />}></Route>
        <Route path="/tandc" element={<Tandc />}></Route>
        <Route path="/testimonials" element={<Testimonials />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="contact" element={<Contact />}></Route>
     
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
          <Route path="/book" element={<RoomBooking />}></Route>
          <Route path="/confirmation" element={<Confirmation />}></Route>
          </Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App