'use client'; // This line makes the component a client component

import { useState } from 'react';

const doctors = [
  { name: 'Dr. Smith', image: '/doctor1.png', specialty: 'Cardiologist', experience: '10 years' },
  { name: 'Dr. Jane', image: '/doctor2.png', specialty: 'Neurologist', experience: '8 years' },
  { name: 'Dr. Lee', image: '/doctor3.png', specialty: 'Dermatologist', experience: '5 years' },
  { name: 'Dr. Sarah', image: '/doctor4.png', specialty: 'Pediatrician', experience: '7 years' },
  { name: 'Dr. David', image: '/doctor5.png', specialty: 'Orthopedist', experience: '12 years' },
  { name: 'Dr. Emily', image: '/doctor6.png', specialty: 'Gynaecologist', experience: '6 years' }
];

const Channeling = () => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [patientName, setPatientName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking logic here
    console.log('Booking appointment for:', patientName);
    alert('Appointment booked successfully!');
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-[#00B6D7] mb-6">Book Your Appointment</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Doctor Selection */}
        <div className="space-y-2">
          <label htmlFor="doctor" className="block text-lg text-[#606060]">Select Doctor</label>
        </div>

        {/* Doctor Images Section - Click to Select Doctor */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className={`text-center cursor-pointer p-4 rounded-lg transition-all duration-300 ease-in-out 
                ${selectedDoctor === doctor.name ? 'border-4 border-[#00B6D7] bg-[#f0faff]' : 'bg-white'}
                hover:bg-[#f0faff] hover:border-4 hover:border-[#00B6D7]`}
              onClick={() => setSelectedDoctor(doctor.name)}
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="max-w-[100%] lg:max-w-[200px] w-full h-auto object-cover object-center mb-2 mx-auto rounded-full"
              />
              <div className="text-center">
                <p className={`text-lg font-medium ${selectedDoctor === doctor.name ? 'text-[#00B6D7]' : ''}`}>
                  {doctor.name}
                </p>
                <p className="text-sm text-[#606060]">{doctor.specialty}</p>
                <p className="text-sm text-[#606060]">{doctor.experience}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Appointment Time */}
        <div>
          <label htmlFor="appointmentTime" className="block text-lg text-[#606060]">Select Time</label>
          <input
            type="datetime-local"
            id="appointmentTime"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Patient Information */}
        <div>
          <label htmlFor="patientName" className="block text-lg text-[#606060]">Your Name</label>
          <input
            type="text"
            id="patientName"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-[#0A7594] text-white py-3 rounded-md hover:bg-[#0A7594] transition duration-200"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Channeling;
