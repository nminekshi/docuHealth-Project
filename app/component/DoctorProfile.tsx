"use client";

import { useState } from "react";

export default function MedicalForm() {
  const [formData, setFormData] = useState({
    patientId: "",
    date: "",
    labReports: "",
    doctorNote: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.patientId.trim()) {
      alert("Patient ID is required!");
      return;
    }
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 p-10 flex justify-center">
      <div className="w-full max-w-6xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Patient ID */}
          <div className="flex flex-col">
            <label htmlFor="patientId" className="text-gray-700 font-medium">
              Patient ID
            </label>
            <input
              type="text"
              id="patientId"
              name="patientId"
              value={formData.patientId}
              onChange={handleChange}
              className="w-full p-4 border-2 border-[#0FC6F9] rounded-lg bg-white text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-[#0FC6F9]"
              required
            />
          </div>

          {/* Date */}
          <div className="flex flex-col">
            <label htmlFor="date" className="text-gray-700 font-medium">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-4 border-2 border-[#0FC6F9] rounded-lg bg-white text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-[#0FC6F9]"
              required
            />
          </div>

          {/* Lab Reports */}
          <div className="flex flex-col">
            <label htmlFor="labReports" className="text-gray-700 font-medium">
              Lab Reports
            </label>
            <input
              type="text"
              id="labReports"
              name="labReports"
              value={formData.labReports}
              onChange={handleChange}
              className="w-full p-4 border-2 border-[#0FC6F9] rounded-lg bg-white text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-[#0FC6F9]"
            />
          </div>

          {/* Doctor Note - Full Width */}
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="doctorNote" className="block text-blue-600 font-bold mb-1">
              Doctor Note
            </label>
            <textarea
              id="doctorNote"
              name="doctorNote"
              value={formData.doctorNote}
              onChange={handleChange}
              rows={6}
              className="w-full p-4 border-2 border-[#0FC6F9] rounded-lg bg-gray-100 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-[#0FC6F9]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-lg"
            >
              Submit
            </button>
          </div>

          {submitted && (
            <p className="col-span-1 md:col-span-2 text-green-600 text-center mt-3 text-lg">
              Form submitted successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
