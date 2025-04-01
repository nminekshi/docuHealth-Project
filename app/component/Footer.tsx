import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A7594] text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-10 md:space-y-0">
        
        {/* Logo and Navigation Links */}
        <div>
          <Image 
            src="/docuhealth logo 3.png"  // ✅ Correct path (from /public folder)
            alt="DocuHealth Logo" 
            width={150}
            height={50}
            className="mb-4 mt-[-10px]"
          />
          <nav className="grid gap-y-2">
            {["Home", "Find Doctor", "Medical Records", "Contact", "About Us"].map((link) => (
              <a key={link} href="#" className="hover:text-teal-300 text-[#00B6D7] font-bold">
                {link}
              </a>
            ))}
          </nav>
        </div>
        
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-black">Contact</h2>
          <ul className="grid grid-cols-1 gap-4">
            {[
              { label: "Email", icon: "/icon_7-removebg-preview 1.png", link: "mailto:info@docuhealth.com" },
              { label: "LinkedIn", icon: "/icon_6-removebg-preview 1.png", link: "#" },
              { label: "Instagram", icon: "/icon_5-removebg-preview 1.png", link: "#" },
              { label: "Twitter", icon: "/icon_4-removebg-preview 1.png", link: "#" }
            ].map(({ label, icon, link }) => (
              <li key={label} className="grid grid-cols-[1fr_auto] items-center gap-4">
                <a href={link} className="hover:text-teal-300 text-[#00B6D7] font-bold">{label}</a>
                <Image src={icon} alt={label} width={20} height={20} />
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-bold mb-2 text-black">Join our newsletter</h2>
          <div className="flex mt-6">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 rounded-l-lg border-none focus:outline-none text-[#0A7594] bg-white w-64"
            />
            <button className="bg-[#ADD8E6] hover:bg-[#87CEEB] text-black px-4 py-2 rounded-r-lg font-bold">
              SUBMIT
            </button>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
