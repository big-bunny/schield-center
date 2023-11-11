"use client"
import { useState } from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import UserGreeting from './UserGreeting';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { isSignedIn } = useUser();

  const menuItems = [
    { text: 'Home', url: '/home' },
    { text: 'About', url: '/about' },
    { text: 'Gallery', url: '/gallery' },
    { text: 'Donate', url: '/donate' },
    { text: 'Team', url: '/team' },
  ];

  const programDropdown = [
    { text: 'Child', url: '/child' },
    { text: 'Program', url: '/program' },
  ];

  return (
    <header className="bg-gray-800 text-white py-4 relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref legacyBehavior>
          <a className="text-2xl font-bold">Schieldcenter</a>
        </Link>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="text-2xl focus:outline-none"
          >
            &#9776;
          </button>
        </div>

        {/* Dropdown for Small Screens */}
        {isDropdownOpen && (
          <div className="md:hidden absolute top-full mt-2 p-2 bg-gray-800 rounded-lg shadow-md z-50">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.url} passHref legacyBehavior>
                <a
                  className="block text-white hover:text-gray-400 cursor-pointer py-2"
                  onClick={() => setDropdownOpen(false)}
                >
                  {item.text}
                </a>
              </Link>
            ))}
            <Link href="#" passHref legacyBehavior>
              <a
                className="block text-white hover:text-gray-400 cursor-pointer py-2"
                onClick={() => setDropdownOpen(false)}
              >
                Programs
              </a>
            </Link>
            <ul className="mt-2">
              {programDropdown.map((item, index) => (
                <li key={index}>
                  <Link href={item.url} passHref legacyBehavior>
                    <a
                      className="block text-white hover:text-gray-400 cursor-pointer py-2"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.text}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Regular Navigation for Medium and Larger Screens */}
        <nav className="hidden md:flex space-x-4 items-center">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.url} passHref legacyBehavior>
              <a className="hover:text-gray-400 cursor-pointer">
                {item.text}
              </a>
            </Link>
          ))}
          <button
            className={`hover:text-gray-400 ${
              isDropdownOpen ? 'text-gray-400' : ''
            }`}
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            Programs
          </button>
        </nav>

        <div className="md:ml-4">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <UserGreeting />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
