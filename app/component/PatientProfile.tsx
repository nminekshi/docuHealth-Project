"use client";

import React from "react";
import Image from "next/image";

const PatientProfile: React.FC = () => {
  const handleEditProfile = () => {
    alert("Edit Profile Clicked!");
  };

  const handleDownloadReport = () => {
    alert("Downloading Patient Report...");
  };

  return (
    <div className="container mx-auto p-3 bg-white shadow-md rounded-lg">
      {/* Compact Profile Card */}
      <div className="bg-white shadow-md rounded-lg p-3 flex items-center space-x-3 relative">
        {/* Profile Image */}
        <Image
          src="/image 6.png" // Ensure the image is in the "public" folder
          alt="Patient Profile"
          width={100}
          height={100}
          className="rounded-full border-2 border-blue-500"
        />

        {/* Profile Info */}
        <div className="flex-1">
          <h1 className="text-base font-bold text-gray-900">Saveen Perera</h1>
          <p className="text-sm text-gray-600 font-semibold">Patient ID: MF105</p>
          <p className="text-sm text-gray-700 font-medium mt-1">
            <span className="font-semibold">Gender:</span> Male | <span className="font-semibold">Age:</span> 23
          </p>
          <p className="text-sm text-gray-700 font-medium">
            <span className="font-semibold">Blood Group:</span> B+
          </p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-1.5">
          <button
            className="bg-[#0A7594] hover:bg-[#085F7A] text-white text-xs font-semibold py-1 px-2.5 rounded transition"
            onClick={handleEditProfile}
          >
            Edit
          </button>
          <button
            className="bg-[#0A7594] hover:bg-[#085F7A] text-white text-xs font-semibold py-1 px-2.5 rounded transition"
            onClick={handleDownloadReport}
          >
            Download Report
          </button>
        </div>

        {/* Patient Status Indicator */}
        <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold rounded-full px-2 py-1">
          Active
        </div>
      </div>

      {/* Patient Details Section */}
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        {/* Personal Details */}
        <div className="bg-gray-100 rounded-lg p-3 shadow">
          <h2 className="text-sm font-semibold text-[#0A7594] mb-2">PERSONAL DETAILS</h2>
          <div className="grid grid-cols-2 gap-2 text-gray-700">
            <p><span className="font-semibold">Name:</span> Saveen Perera</p>
            <p><span className="font-semibold">DOB:</span> 11/08/2002</p>
            <p><span className="font-semibold">Address:</span> 20/C, 4th Lane, Kirilla, Colombo</p>
            <p><span className="font-semibold">Email:</span> Saveenperera98@gmail.com</p>
            <p><span className="font-semibold">Phone:</span> +94 724522940</p>
            <p><span className="font-semibold">NIC:</span> 200208113583</p>
          </div>
        </div>

        {/* Current Medications */}
        <div className="bg-gray-100 rounded-lg p-3 shadow">
          <h2 className="text-sm font-semibold text-[#0A7594] mb-2">CURRENT MEDICATIONS</h2>
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-gray-200 text-gray-700 font-semibold">
                <th className="border border-gray-300 px-2 py-1">Brand</th>
                <th className="border border-gray-300 px-2 py-1">Strength</th>
                <th className="border border-gray-300 px-2 py-1">Form</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Amoxicillin</td>
                <td className="border border-gray-300 px-2 py-1">250mg</td>
                <td className="border border-gray-300 px-2 py-1">Tab</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Acetaminophen</td>
                <td className="border border-gray-300 px-2 py-1">250mg</td>
                <td className="border border-gray-300 px-2 py-1">Pill</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Lab Results */}
        <div className="bg-gray-100 rounded-lg p-3 shadow">
          <h2 className="text-sm font-semibold text-[#0A7594] mb-2">LAB RESULTS</h2>
          <div className="grid grid-cols-3 gap-2 text-gray-700">
            {/* X-Ray */}
            <div className="col-span-1 font-semibold">X-Ray</div>
            <div className="col-span-1">10/05/2024</div>
            <div className="col-span-1 flex items-center justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0A7594" className="w-4 h-4 cursor-pointer">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 2c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
              </svg>
            </div>

            {/* CT */}
            <div className="col-span-1 font-semibold">CT</div>
            <div className="col-span-1">10/05/2024</div>
            <div className="col-span-1 flex items-center justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0A7594" className="w-4 h-4 cursor-pointer">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 2c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-gray-100 rounded-lg p-3 shadow">
          <h2 className="text-sm font-semibold text-[#0A7594] mb-2">NOTES</h2>
          <p className="text-gray-700">Headache, Knee pain</p>
        </div>

        {/* Allergies */}
        <div className="bg-gray-100 rounded-lg p-3 shadow">
          <h2 className="text-sm font-semibold text-[#0A7594] mb-2">ALLERGIES</h2>
          <p className="text-red-500 font-bold text-xs">Penicillin - High</p>
          <p className="text-orange-500 text-xs">Tilorone - Medium</p>
        </div>

        {/* New Patient Detail Section */}
        <div className="bg-gray-100 rounded-lg p-3 shadow">
          <h2 className="text-sm font-semibold text-[#0A7594] mb-2">NEW PATIENT DETAIL</h2>
          <div className="grid grid-cols-2 gap-2 text-gray-700">
            <p><span className="font-semibold">Emergency Contact:</span></p>
            <p>Kasun Perera (+94 772345678)</p>
            <p><span className="font-semibold">Insurance Provider:</span></p>
            <p>Blue Cross Insurance</p>
            <p><span className="font-semibold">Policy Number:</span></p>
            <p>#BCI123456789</p>
            <p><span className="font-semibold">Primary Care Physician:</span></p>
            <p>Dr. Samantha Silva (+94 765432109)</p>
            <p><span className="font-semibold">Next Appointment:</span></p>
            <p>15/10/2024 at 10:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;