"use client"; // This component is a client component
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation

const Navbar = () => {
  const pathname = usePathname();  // Get the current route using usePathname

  // Helper function to check if the link is active
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white z-50">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">

        <Link href="/">
          <Image src="/docuhealth logo 2.png" alt="logo" width={200} height={200} />
        </Link>

        <div>
          <ul className="hidden sm:flex items-center">
            {[ 
              { href: '/', label: 'Home' },
              { href: '/patient_profile', label: 'Patient Profile' },
              { href: '/doctor_profile', label: 'Doctor' },
              { href: '/lab', label: 'Lab' },
            ].map(({ href, label }) => (
              <Link href={href} key={label}>
                <li
                  className={`ml-4 px-4 py-2 text-xl text-black rounded-md transition-all duration-300 
                  ${isActive(href) ? 'bg-[#00B6D7] text-white' : 'hover:text-[#00B6D7] hover:bg-blue-50'} cursor-pointer`}
                >
                  {label}
                </li>
              </Link>
            ))}

            <Link href="/Registration">
              <button
                className={`ml-4 px-4 py-2 text-xl text-black rounded-md transition-all duration-300 
                ${isActive('/login') ? 'bg-[#00B6D7] text-white' : 'hover:text-[#00B6D7] hover:bg-blue-50'} cursor-pointer`}
              >
                Login
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
