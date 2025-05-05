import { useState } from 'react';

const ChannelingPage = () => {
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
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Book Your Appointment</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Doctor Selection */}
        <div>
          <label htmlFor="doctor" className="block text-lg text-gray-700">Select Doctor</label>
          <select
            id="doctor"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Jane">Dr. Jane</option>
            <option value="Dr. Lee">Dr. Lee</option>
          </select>
        </div>

        {/* Appointment Time */}
        <div>
          <label htmlFor="appointmentTime" className="block text-lg text-gray-700">Select Time</label>
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
          <label htmlFor="patientName" className="block text-lg text-gray-700">Your Name</label>
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
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200">
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChannelingPage;
