// components/UserDropdown.jsx
import React, { useState, useRef, useEffect } from 'react';
import { HiBell } from 'react-icons/hi';
import { IoIosArrowDown, IoIosLogOut } from 'react-icons/io';

const UserDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative flex items-center gap-2">
      <IoIosArrowDown
        className="w-4 h-4 text-gray-500 cursor-pointer"
        onClick={() => setShowDropdown((prev) => !prev)}
      />

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute top-14 right-0 z-50 bg-white border border-gray-200 shadow-lg rounded-lg w-40">
          <button
            className="flex items-center gap-2 text-red-600 px-4 py-3 text-sm font-medium hover:bg-gray-50 w-full"
            onClick={() => {
              console.log('Logging out...');
              // Add your logout logic here
            }}
          >
            <IoIosLogOut className="w-5 h-5" />
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
