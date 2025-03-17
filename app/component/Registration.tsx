import Image from "next/image";

export default function Home() {
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
          <form className="space-y-4">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-gray-600">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your username"
              />
            </div>

            {/* NIC */}
            <div>
              <label htmlFor="nic" className="block text-gray-600">
                NIC
              </label>
              <input
                id="nic"
                type="text"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your NIC"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobile" className="block text-gray-600">
                Mobile Number
              </label>
              <input
                id="mobile"
                type="tel"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your mobile number"
              />
            </div>

            {/* Age */}
            <div>
              <label htmlFor="birthdate" className="block text-gray-600">
                Age
              </label>
              <input
                id="birthdate"
                type="date"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block text-gray-600">
                Gender
              </label>
              <select
                id="gender"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                type="text"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your height"
              />
            </div>

            {/* Weight */}
            <div>
              <label htmlFor="weight" className="block text-gray-600">
                Weight (kg)
              </label>
              <input
                id="weight"
                type="text"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your weight"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-600">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Confirm your password"
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
