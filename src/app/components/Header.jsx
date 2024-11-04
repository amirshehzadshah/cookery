'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Dropdown from '../common/Dropdown';
import { brands } from '@/data/brands';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-800 p-4 w-full">
      <nav className="flex justify-center space-x-8 relative">
        <Link href="/" className="text-white hover:underline">Home</Link>
        <div className="relative">
          <button 
            onClick={toggleDropdown} 
            className="text-white hover:underline"
          >
            Portfolio
          </button>
          {isDropdownOpen && (
            <Dropdown items={brands} onSelect={toggleDropdown} />
          )}
        </div>
        <Link href="/contact" className="text-white hover:underline">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
