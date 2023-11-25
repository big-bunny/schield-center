/* eslint-disable @next/next/no-before-interactive-script-outside-document */
"use client";
import { useState } from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import Script from 'next/script';
import UserGreeting from './UserGreeting';

const Header = () => {
  const [isProgramDropdownOpen, setProgramDropdownOpen] = useState(false);
  const [isMenuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const { isSignedIn } = useUser();

  const menuItems = [
    { text: 'Home', url: '/home' },
    { text: 'About', url: '/about' },
    { text: 'Gallery', url: '/gallery' },
    { text: 'Donate', url: '/donate' },
    { text: 'Team', url: '/team' }
  ];

  const programDropdown = [
    { text: 'Child', url: '/child' },
    { text: 'Program', url: '/program' },
  ];

  const menuDropdown = [
    { text: 'Home', url: '/home' },
    { text: 'About', url: '/about' },
    { text: 'Gallery', url: '/gallery' },
    { text: 'Donate', url: '/donate' },
    { text: 'Team', url: '/team' }
  ];

  return (
    <div>
      <Script strategy="beforeInteractive" src="/path/to/client-script.js" />
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" passHref legacyBehavior>
            <a className="text-2xl font-bold">Schieldcentre</a>
          </Link>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuDropdownOpen(!isMenuDropdownOpen)}
              className="text-2xl focus:outline-none"
            >
              &#9776;
            </button>
           
          </div>

          <nav className="md:hidden">
            {isMenuDropdownOpen && (
              <div className="mt-2 p-2 bg-gray-800 rounded-lg shadow-md">
                {menuDropdown.map((item, index) => (
                  <Link key={index} href={item.url} passHref legacyBehavior>
                    <a className="block px-4 py-2 text-white hover:text-gray-400">
                      {item.text}
                    </a>
                  </Link>
                ))}
                <button
                  onClick={() => setProgramDropdownOpen(!isProgramDropdownOpen)}
                  className="block px-4 py-2 text-white hover:text-gray-400"
                >
                  Programs
                </button>
                {isProgramDropdownOpen && (
                  <div className="mt-2 p-2 bg-gray-800 rounded-lg shadow-md">
                    {programDropdown.map((item, index) => (
                      <Link key={index} href={item.url} passHref  legacyBehavior>
                        <a className="block px-4 py-2 text-white hover:text-gray-400">
                          {item.text}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </nav>

          <nav className="hidden md:block space-x-4">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.url} passHref legacyBehavior>
                <a className="hover:text-gray-400">{item.text}</a>
              </Link>
            ))}
            <button
              onClick={() => setProgramDropdownOpen(!isProgramDropdownOpen)}
              className="hover:text-gray-400"
            >
              Programs
            </button>
            {isProgramDropdownOpen && (
              <div className="mt-2 p-2 bg-gray-800 rounded-lg shadow-md">
                {programDropdown.map((item, index) => (
                  <Link key={index} href={item.url} passHref legacyBehavior>
                    <a className="block px-4 py-2 text-white hover:text-gray-400">
                      {item.text}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </nav>

          <div>
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <UserGreeting />
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
