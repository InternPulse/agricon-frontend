import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'; 
import { logout } from '../../api/logout'
import { IoNotifications } from 'react-icons/io5';

const Header = ({ title, userName, picture }) => {
  const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);
    const navigate = useNavigate();

    const role = localStorage.getItem('userRole');

 //logout handler 
  const handleLogout = async () => {
    try {
      //call the api
      await logout(); 
      navigate('/login'); 
      setShowLogoutDropdown(false); 
    } catch (error) {
      console.error('Logout failed:', error);
      navigate('/login');
    }
  };
    

    return (
        <div className='flex items-center border-b border-gray-700 bg-white justify-between space-x-10 py-5 px-20  backdrop-blur-3xl w-full z-30'>
            <div className='font-bold text-xl'>
                {title}
            </div>

            

            <div className='flex items-center gap-5'> 
              <div className='hidden md:inline-block'>
                  <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Search..." 
                      className='w-60 h-10 rounded-xl border outline-none bg-gray-50 px-3 py-1 text-sm' 
                  />
              </div>
                {/* User Info and Dropdown Toggle */}
                <div className='hidden md:inline-block'>
                    <div className='relative flex items-center gap-4'> 
                        <Link to={`/${role}/notification`} className='bg-green-100 rounded-full p-1 font-bold text-[#FFAC00]'>
                            <IoNotifications size={24}/>
                        </Link>
                        <p>{picture}</p> 
                        <h6 className='font-bold'>{userName}</h6>
                        <button
                            onClick={() => setShowLogoutDropdown(!showLogoutDropdown)}
                            className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            {showLogoutDropdown ? <FaAngleUp className='w-6 h-6' /> : <FaAngleDown className='w-6 h-6' />}
                        </button>
                        {showLogoutDropdown && (
                            <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-40">
                                <hr className="text-gray-400 my-1" /> 
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 text-sm"
                                >
                                    <FaSignOutAlt className="mr-2" /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;