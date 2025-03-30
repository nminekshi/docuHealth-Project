"use client";
import React, { useState, useEffect } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center px-6 sm:px-8 lg:px-12 bg-[#EBFEFF] overflow-auto font-[Segoe_UI]">
      
      
      <div className="w-full lg:w-1/2 flex justify-center relative mb-10 lg:mb-0">
        <img src="/docuhealth logo .png" alt="Logo" className="absolute top-4 left-4 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[181px] h-auto"/>
        <img src="/doctor.png" alt="doctor" className="max-w-[100%] lg:max-w-[740px] w-full h-auto object-cover object-center"/>
      </div>

      
      <div className="w-full lg:w-1/2 p-6 sm:px-8 lg:px-12">
        <form className="flex flex-col items-center">
          <h1 className="text-[36px] sm:text-[40px] md:text-[50px] lg:text-[96px] text-[#00B6D7] mb-6 text-center font-[Segoe_UI]">
            Login
          </h1>
          
          
          <div className="w-full max-w-[574px] mb-6">
            <label htmlFor="username" className="block text-[#606060] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] mb-2">
              Username
            </label>
            <input type="text" id="username" name="username" className="w-full h-[50px] sm:h-[55px] p-3 border bg-[#F1F1F1] text-black rounded-md"/>
          </div>

          
          <div className="w-full max-w-[574px] mb-6">
            <label htmlFor="password" className="block text-[#606060] text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] mb-2" >
              Password
            </label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} id="password" name="password" className="w-full h-[50px] sm:h-[55px] p-3 pr-12 border bg-[#F1F1F1] text-black rounded-md" placeholder="• • • • • • • • • • • • •" />
              <button type="button" className="absolute inset-y-0 right-4 flex items-center text-gray-500" onClick={togglePasswordVisibility} >
                <img src={showPassword ? "https://cdn-icons-png.flaticon.com/128/565/565655.png" : "https://cdn-icons-png.flaticon.com/128/159/159604.png"} alt="Toggle password visibility" className="w-6 h-6" />
              </button>
            </div>
          </div>

          
          <div className="w-full max-w-[574px] flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-[#606060] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[19px]">
                Remember me
              </label>
            </div>
            <a href="#" className="text-[#00B6D7] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[19px]">
              Forgot password?
            </a>
          </div>

          
          <div className="w-full flex justify-center">
            <button type="submit" className="w-full max-w-[184px] h-[50px] sm:h-[54px] bg-[#0A7594] text-white text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-semibold rounded-md flex items-center justify-center">
              Login
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
