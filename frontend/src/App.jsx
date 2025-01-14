/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Create components for each page
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Appointment from "./pages/Appointment";
import MyAppointments from "./pages/MyAppointments";
import TopDoctors from "./components/TopDoctors";
import HomeVisit from "./pages/HomeVisit";
import ClinicVisit from "./pages/ClinicVisit";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/homevisit" element={<HomeVisit />} />
        <Route path="/clinicvisit" element={<ClinicVisit />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
