'use client'
// components/Header.tsx

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace this with actual auth logic

  return (
    <header className=" text-gray-800 shadow-md mb-3">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Logo</Link>
        </div>

        {/* Menu Bar */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          {!isLoggedIn ? (
            <>
              <Link href="/signin">Sign In</Link>
              <Link href="/signup">Sign Up</Link>
            </>
          ) : (
            <div className="relative">
              <img
                src="/path-to-avatar.jpg"
                alt="User Avatar"
                className="w-8 h-8 rounded-full cursor-pointer"
              />
              {/* Dropdown menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 hidden">
                <Link href="/profile" legacyBehavior>
                  <a className="block px-4 py-2 hover:bg-gray-200">Profile</a>
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsLoggedIn(false)} // Replace this with actual sign-out logic
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
