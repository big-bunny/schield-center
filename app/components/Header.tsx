"use client"
// Header.js or Header.tsx
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
    { text: 'Team', url: '/team' }
  ];

  const programDropdown = [
    { text: 'Child ', url: '/child' },
    { text: ' Program', url: '/program' },
  ];

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref legacyBehavior>
          <a className="text-2xl font-bold">Schieldcenter</a>
        </Link>
        <nav className="space-x-4">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.url} passHref legacyBehavior>
              <a className="hover:text-gray-400 cursor-pointer">{item.text}</a>
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
          {isDropdownOpen && (
            <ul className="absolute mt-2 p-2 bg-gray-800 rounded-lg shadow-md">
              {programDropdown.map((item, index) => (
                <li key={index}>
                  <Link href={item.url} passHref legacyBehavior>
                    <a className="hover:text-gray-400 cursor-pointer">{item.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        
          {isSignedIn ?  <UserButton afterSignOutUrl="/"/> : <UserGreeting />}
        </nav>
      </div>
    </header>
  );
};

export default Header;

