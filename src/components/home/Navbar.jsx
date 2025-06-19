import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink from react-router-dom for proper routing
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from 'react-icons/fa';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setShowMobileMenu(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <>
      <div className='absolute top-0 left-0 w-full z-10'>
        <div className='bg-gray-100 flex justify-between items-center py-4 px-8 fixed w-full md:px-10 lg:px-32 font-bold'>
          <div>
            <img src={assets.agriconLogo} alt="" className="w-20"/>
          </div>

          <ul className='hidden md:flex gap-7 lg:gap-7 text-gray-500 text-md px-4'>
            {/* Desktop Navigation Links */}
            <li>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className='cursor-pointer hover:text-gray-400'>
                Home
              </a>
            </li>
            <li>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className='cursor-pointer hover:text-gray-400'>
                Services
              </a>
            </li>
            <li>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className='cursor-pointer hover:text-gray-400'>
                About
              </a>
            </li>
            <li>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className='cursor-pointer hover:text-gray-400'>
                Contact Us
              </a>
            </li>
          </ul>
          <ul className='hidden md:flex md:items-right gap-x-6 text-gray-50'>
            <li className='hover:cursor-pointer bg-[#02402D] rounded-full flex px-4 py-1 font-bold'>
              <NavLink to='/signup'>Get Started</NavLink>
            </li>
            <li className='hover:cursor-pointer text-[#FFAC00] border border-[#FFAC00] rounded-full flex px-6 py-1 font-bold'>
              <NavLink to='/login'>Login</NavLink>
            </li>
          </ul>
          <GiHamburgerMenu
            onClick={() => setShowMobileMenu(true)}
            className="md:hidden text-green-950" size={24}
          />
        </div>

        {/* mobile screen */}
        <div
          className={`md:hidden ${showMobileMenu ? "fixed w-96" : "h-0 w-0"}
                       left-0 top-0 bottom-0 overflow-hidden bg-gray-100 text-gray-800 transition-all drop-shadow-lg`}
        >
          <div className='flex justify-between p-6 cursor-pointer text-green'>
            <h1 className='text-lg font-bold text-red-400'>
              <img src={assets.agriconLogo} alt='' className="w-20"/>
            </h1>
            <FaTimes onClick={() => setShowMobileMenu(false)} className="text-green-950" size={24}/>
          </div>

          <ul
            className='flex flex-col first items-left gap-2 mt-5 px-5 text-lg
            font-medium'
          >
            {/* Mobile Navigation Links */}
            <li>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className='px-4 inline-block'>
                Home
              </a>
            </li>
            <li>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className='px-4 inline-block'>
                Services
              </a>
            </li>
            <li>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className='px-4 inline-block'>
                About
              </a>
            </li>
            <li>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className='px-4 inline-block'>
                Contact Us
              </a>
            </li>

            <ul className='md:flex md:items-right gap-x-6 text-gray-50 space-y-3'>
              <li className='hover:cursor-pointer bg-[#02402D] rounded-full flex px-4 py-1 font-bold'>
                <NavLink to='/signup' onClick={() => setShowMobileMenu(false)}>
                  Get Started
                </NavLink>
              </li>
              <li className='hover:cursor-pointer text-[#FFAC00] border border-[#FFAC00] rounded-full flex px-4 py-1 font-bold'>
                <NavLink to='/login' onClick={() => setShowMobileMenu(false)}>
                  Login
                </NavLink>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;