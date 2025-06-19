import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from 'react-icons/fa';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('hero'); 

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

  useEffect(() => {
    const sectionIds = ['hero', 'services', 'about', 'contact']; 
    const sections = sectionIds.map(id => document.getElementById(id));

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', 
      threshold: 0, // intersection changes
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setShowMobileMenu(false);
      setActiveSection(id); //set active section on click 
    }
  };

  const getDesktopLinkClasses = (sectionId) => {
    return `cursor-pointer hover:text-gray-400 ${activeSection === sectionId ? 'border-b border-[#FFAC00]' : 'text-gray-500'}`;
  };

  const getMobileLinkClasses = (sectionId) => {
    return `cursor-pointer px-4 inline-block ${activeSection === sectionId ? 'border-b border-[#FFAC00]' : 'text-gray-800'}`;
  };

  return (
    <>
      <div className='absolute top-0 left-0 w-full z-40'>
        <div className='bg-gray-100 flex justify-between items-center py-4 px-8 fixed w-full md:px-10 lg:px-32 font-bold'>
          <Link to='/'>
            <img src={assets.agriconLogo} alt="" className="w-20"/>
          </Link>

          <ul className='hidden md:flex gap-7 lg:gap-7 text-md px-4'>
            {/* Desktop Navigation Links */}
            <li>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className={getDesktopLinkClasses('hero')}>
                Home
              </a>
            </li>
            <li>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className={getDesktopLinkClasses('services')}>
                Services
              </a>
            </li>
            <li>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className={getDesktopLinkClasses('about')}>
                About
              </a>
            </li>
            <li>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className={getDesktopLinkClasses('contact')}>
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
              <a onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className={getMobileLinkClasses('hero')}>
                Home
              </a>
            </li>
            <li>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className={getMobileLinkClasses('services')}>
                Services
              </a>
            </li>
            <li>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className={getMobileLinkClasses('about')}>
                About
              </a>
            </li>
            <li>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className={getMobileLinkClasses('contact')}>
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