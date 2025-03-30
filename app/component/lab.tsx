"use client";
import { useState } from "react";
import { FiFolder, FiDownload } from "react-icons/fi";

const ReportForm = () => {
  const [date, setDate] = useState("");
  const [nic, setNic] = useState("");
  const [report, setReport] = useState("");

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F0FCFF]">
      <div className="w-full p-8">
        {/* ✅ Fixed Heading Styling */}
        <h2 className="text-2xl font-bold text-[#04A0D6] font-inter mb-6">
          Report Submission
        </h2>

        {/* Date Input with Label on the Left */}
        <div className="flex items-center mb-6">
          <label className="block text-gray-700 text-lg w-1/4">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-3/4 p-3 border rounded bg-[#D4F3FF] placeholder-gray-500"
          />
        </div>

        {/* NIC Input with Label on the Left */}
        <div className="flex items-center mb-6">
          <label className="block text-gray-700 text-lg w-1/4">NIC:</label>
          <input
            type="text"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
            className="w-3/4 p-3 border rounded bg-[#D4F3FF] placeholder-gray-500"
          />
        </div>

        {/* Upload & Download Icons */}
        <div className="flex items-center gap-6 mb-6">
          <button className="p-3 border rounded bg-gray-200 hover:bg-gray-300 transition">
            <FiFolder size={24} color="black" />
          </button>
          <button className="p-3 border rounded bg-gray-200 hover:bg-gray-300 transition">
            <FiDownload size={24} color="black" />
          </button>
        </div>

        {/* Large Report Textarea */}
        <textarea
          value={report}
          onChange={(e) => setReport(e.target.value)}
          placeholder="Enter your report..."
          className="w-full p-6 border rounded bg-[#F0FCFF] focus:outline-none focus:ring-2 focus:ring-[#04A0D6] mb-6 h-40"
        ></textarea>

        {/* Smaller Submit Button aligned to the right */}
        <div className="flex justify-end">
        <button className="bg-[#04A0D6] text-white py-3 px-8 rounded hover:bg-blue-700 transition text-xl font-bold">
            Add Submission
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;

