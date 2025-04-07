import Image from "next/image";
import React from "react";

export default function Home() {
  // Define interface for form data
  interface FormData {
    username: string;
    nic: string;
    email: string;
    mobile: string;
    birthdate: string;
    gender: string;
    language: string;
    bloodGroup: string;
    height: string;
    weight: string;
    password: string;
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Get form data
    const formData: FormData = {
      username: (e.target as HTMLFormElement).username.value,
      nic: (e.target as HTMLFormElement).nic.value,
      email: (e.target as HTMLFormElement).email.value,
      mobile: (e.target as HTMLFormElement).mobile.value,
      birthdate: (e.target as HTMLFormElement).birthdate.value,
      gender: (e.target as HTMLFormElement).gender.value,
      language: (e.target as HTMLFormElement).language.value,
      bloodGroup: (e.target as HTMLFormElement).bloodGroup.value,
      height: (e.target as HTMLFormElement).height.value,
      weight: (e.target as HTMLFormElement).weight.value,
      password: (e.target as HTMLFormElement).password.value,
    };

    // Send data to the backend API
    try {
      const response: Response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: unknown = await response.json();
      console.log('Response:', data);
      // Handle success (e.g., redirect or show a success message)
    } catch (error: unknown) {
      console.error('Error:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center">
      {/* Main Container */}
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Logo */}
        <div className="flex items-center justify-between p-4 bg-blue-100">
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
        </div>

        {/* Form Section */}
        <div className="p-6">
          <h1 className="text-5xl font-semibold text-blue-400 text-center mb-6">
            Welcome
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-gray-600">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* NIC */}
            <div>
              <label htmlFor="nic" className="block text-gray-600">
                NIC
              </label>
              <input
                id="nic"
                name="nic"
                type="text"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your NIC"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobile" className="block text-gray-600">
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your mobile number"
                required
              />
            </div>

            {/* Age */}
            <div>
              <label htmlFor="birthdate" className="block text-gray-600">
                Age
              </label>
              <input
                id="birthdate"
                name="birthdate"
                type="date"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block text-gray-600">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Language */}
            <div>
              <label htmlFor="language" className="block text-gray-600">
                Language
              </label>
              <select
                id="language"
                name="language"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select Language</option>
                <option value="english">English</option>
                <option value="sinhala">Sinhala</option>
                <option value="tamil">Tamil</option>
              </select>
            </div>

            {/* Blood Group */}
            <div>
              <label htmlFor="bloodGroup" className="block text-gray-600">
                Blood Group
              </label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
                <option value="AB+">AB+</option>
              </select>
            </div>

            {/* Height */}
            <div>
              <label htmlFor="height" className="block text-gray-600">
                Height (cm)
              </label>
              <input
                id="height"
                name="height"
                type="text"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your height"
                required
              />
            </div>

            {/* Weight */}
            <div>
              <label htmlFor="weight" className="block text-gray-600">
                Weight (kg)
              </label>
              <input
                id="weight"
                name="weight"
                type="text"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your weight"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-600">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Confirm your password"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
