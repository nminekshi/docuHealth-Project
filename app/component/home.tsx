"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen bg-white">
     

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center p-8 gap-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold">
            All Your Medical <span className="text-white-500">Records</span> In One Place
          </h2>
          <p className="mt-4 text-gray-700">
            Easily access and manage all your medical records securely on one platform.
            Store vital information such as medical histories, allergies, and appointments
            ensuring timely, informed decision-making for better patient care.
          </p>
          <div className="mt-6">
          <button className="bg-blue-400 text-white-600 px-6 py-3 rounded-lg shadow-md">
              Register
            </button>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account? <a href="#" className="text-blue-400 underline">Login</a>
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image src="/doctors.png" alt="Doctors" width={500} height={350} />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="p-8 bg-gray-100">
        <h3 className="text-xl font-semibold text-blue-400">WELCOME TO DOCUHEALTH</h3>
        <h2 className="text-3xl font-bold mt-2">Best Care for Your Good Health</h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li>✔ A Passion for Healing</li>
          <li>✔ All Our Best</li>
          <li>✔ Always Caring</li>
          <li>✔ 5-Star Care</li>
          <li>✔ Believe in Us</li>
          <li>✔ A Legacy of Excellence</li>
        </ul>
        <p className="mt-4 text-gray-600">
        DocuHealth is committed to improving healthcare by providing efficient, secure, and user-friendly patient record management solutions. Our solution is intended to empower healthcare providers by making patient data access easier, improving record accuracy, and fostering collaboration among medical experts. DocuHealth was designed with security and compliance in mind, ensuring that patient information is handled with the highest confidentiality and that sensitive data is protected in accordance with industry standards. We are passionate about improving healthcare results by streamlining processes and providing a unified experience for both physicians and patients, resulting in a healthier, more connected community. 
        </p>
      </section>
    </div>
  );
}