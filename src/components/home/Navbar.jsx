import { NavLink } from "react-router-dom"; 
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets';
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // prevent the web scrolling when the navbar is opened
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

  return (
    <>
      <div className='absolute top-0 left-0 w-full z-40'>
        <div className='bg-gray-100 w-full flex justify-between fixed items-center py-4 px-8 md:px-10 lg:px-32 font-bold'>
          <Link to="/">
            <img src={assets.agriconLogo} alt="" className="w-20"/>
          </Link>
          <ul className='hidden first md:flex gap-7 lg:gap-7 text-gray-500 text-md px-4'>
            <NavLink
              to='/'
              className='cursor-pointer hover:text-gray-400'>
              Home
            </NavLink>
            <NavLink
              to='/services'
              className='cursor-pointer hover:text-gray-400'>
              Services
            </NavLink>
            <NavLink to='/about' className='cursor-pointer hover:text-gray-400'>
              About
            </NavLink>
            <NavLink to='/contact' className='cursor-pointer hover:text-gray-400'>
              Contact Us
            </NavLink>
          </ul>
          <ul className='hidden md:flex md:items-right gap-x-6 text-gray-50'>
            <li className='hover:cursor-pointer bg-[#02402D] rounded-full flex px-4 py-1 font-bold'>
              <Link to='/roles'>Get Started</Link>
            </li>
            <li className='hover:cursor-pointer text-[#FFAC00] border border-[#FFAC00] rounded-full flex px-6 py-1 font-bold'>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
          <GiHamburgerMenu
            onClick={() => setShowMobileMenu(true)}
            className="md:hidden text-green-950" size={24}
          />
        </div>

        {/* mobile screen */}
        <div
          className={`md:hidden ${showMobileMenu ? "fixed w-90" : "h-0 w-0"}
                       left-0 top-0 bottom-0 overflow-hidden bg-gray-100 text-gray-800 transition-all drop-shadow-lg`}>
          <div className='flex justify-between p-6 cursor-pointer text-green'>
            <h1 className='text-lg font-bold text-red-400'>
              <img src={assets.agriconLogo} alt='' className="w-20"/>
            </h1>
            <FaTimes to='/' onClick={() => setShowMobileMenu(false)} className="text-green-950" size={24}/>
          </div>

          <ul
            className='flex flex-col first items-left gap-2 mt-5 px-5 text-lg
            font-medium'>
            <NavLink
              to={"/"}
              onClick={() => setShowMobileMenu(false)}
              className='px-4 inline-block'>
              Home
            </NavLink>
            <NavLink
              to={"/services"}
              onClick={() => setShowMobileMenu(false)}
              className='px-4 inline-block'>
              Services
            </NavLink>
            <NavLink
              to={"/about"}
              onClick={() => setShowMobileMenu(false)}
              className='px-4 inline-block'>
              About
            </NavLink>

            <ul className='md:flex md:items-right gap-x-6 text-gray-50 space-y-3'>
              <li className='hover:cursor-pointer bg-[#02402D] rounded-full flex px-4 py-1 font-bold'>
                <Link to='/roles' onClick={() => setShowMobileMenu(false)}>
                  Get Started
                </Link>
              </li>
              <li className='hover:cursor-pointer text-[#FFAC00] border border-[#FFAC00] rounded-full flex px-4 py-1 font-bold'>
                <Link to='/login' onClick={() => setShowMobileMenu(false)}>
                  Login
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;