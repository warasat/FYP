// import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Import the calendar component
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

const HomeVisit = () => {
  console.log("HomeVisit component is rendering!");  // Log to check if it's rendering

  const doctor = {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    location: 'New York, NY',
    experience: '10+ Years',
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 mt-10">
      <h1 className="text-3xl font-bold">Home Visit Page</h1>
      <div className="flex items-center mb-8">
        <img
          src="https://via.placeholder.com/150" // Placeholder image
          alt="Doctor Profile"
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="ml-6 text-center md:text-left">
          <h2 className="text-3xl font-bold">{doctor.name}</h2>
          <p className="text-gray-600 mt-1">{doctor.specialty}</p>
          <p className="text-gray-500 mt-1">{doctor.location}</p>
          <p className="text-gray-500 mt-1">{doctor.experience}</p>
        </div>
      </div>

      {/* Add a calendar for selecting a visit date */}
      <Calendar className="rounded-lg shadow-md" />
    </div>
  );
};

export default HomeVisit;
