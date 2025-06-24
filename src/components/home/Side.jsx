import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaCog, FaTimes } from 'react-icons/fa';
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaCubes } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';


function Side () {
    const location = useLocation();
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    
    // Prevent body scrolling when the mobile navbar is opened
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

    const isActive = (path) => {
        return location.pathname === path;
    };

    // Define active and inactive classes based on theme
    const activeClass = "bg-[#FFAC00] text-white";
    const inactiveClass = "hover:border hover:border-[#FFAC00]";

    return (
        <>
            {/* Mobile Menu Toggle Button (visible only on small screens) */}
            <div className="md:hidden fixed top-4 left-3 z-40">
                <FaBars
                    onClick={() => setShowMobileMenu(true)}
                    className="w-8 h-8 cursor-pointer border border-[#02402D] rounded-md p-2 text-[#02402D] hover:border-[#FFAC00] hover:text-[#FFAC00]"
                />
            </div>

            <div className="hidden md:inline-block bg-[#02402D]
                            min-h-screen fixed  w-64 border-r text-white border-[#FFAC00]">
                <div className='flex items-center space-x-1 font-bold border-b border-[#FFAC00] py-4'>
                    <img src={assets.agriconLogo2} alt="Agricon_img" className='ml-6'/>
                </div>
                <ul className='flex flex-col mt-5  font-bold space-y-3 px-4'>

                    <Link
                        to='/user'
                        className={`flex items-center py-3 px-2 space-x-4 rounded-lg ${isActive('/user') ? activeClass : inactiveClass}`}
                    >
                        <MdOutlineDashboard className="w-5 h-5" />
                        <span className='hidden md:inline'>Dashboard</span>
                    </Link>

                    <Link
                        to='/user/facility'
                        className={`flex items-center py-3 px-2 space-x-4 rounded-lg ${isActive('/user/facility') ? activeClass : inactiveClass}`}
                    >
                        <FaCubes className="w-5 h-5" />
                        <span className='hidden md:inline'>Facilities</span>
                    </Link>

                    <Link
                        to='/user/booking-history'
                        className={`flex items-center py-3 px-2 space-x-4 rounded-lg ${isActive('/user/bookings') ? activeClass : inactiveClass}`}
                    >
                        <AiOutlineFileSearch className="w-5 h-5" />
                        <span className='hidden md:inline'>Booking History</span>
                    </Link>

                    {/* <Link
                        to='/user/payment'
                        className={`flex items-center py-3 px-2 space-x-4 rounded-lg ${isActive('/user/payment') ? activeClass : inactiveClass}`}
                    >
                        <FaMoneyBillAlt className="w-5 h-5" />
                        <span className='hidden md:inline'>Payments</span>
                    </Link> */}

                    <Link
                        to='/user/settings'
                        className={`flex items-center py-3 px-2 space-x-4 rounded-lg ${isActive('/user/settings') ? activeClass : inactiveClass}`}
                    >
                        <FaCog className="w-5 h-5" />
                        <span className='hidden md:inline'>Settings</span>
                    </Link>
                </ul>
                <div className="profile pt-10 px-3">
                    {" "}
                        <div className="bg-white flex flex-col gap-5 p-4 rounded-xl shadow-inner mb-4">
                            <div className="flex items-center mb-3">
                                <div className="top flex">
                                    <div className="circle relative w-12 h-12 flex items-center justify-center rounded-full     overflow-hidden">
                                        <div className="absolute border-r-4  border-green-800 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                            <span className="text-[10px] font-bold text-black">
                                                62%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-[12px] font-semibold text-[#1D2739]">
                                            Complete Profile
                                        </h3>
                                        <p className="text-[9px] text-[#344054]">
                                            Complete profile to unlock all features
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full text-left flex items-center justify-center px-3 py-2 bg-[#02402D] text-white      rounded-lg shadow-sm hover:bg-green-600 transition mb-2 text-sm font-medium">
                                Verify Email
                            </button>
                        </div>
                    </div>
            </div>

            {/* Mobile Sidebar (visible only when showMobileMenu is true and on small screens) */}
            <div
                className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out
                            ${showMobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setShowMobileMenu(false)}
            >
                <div
                    className={`fixed top-0 bottom-0 left-0 w-64 bg-[#02402D]  text-gray-800 dark:text-white
                                shadow-lg transform transition-transform duration-300 ease-in-out z-50
                                ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div className='flex justify-between items-center p-6 border-b border-[#FFAC00] z-40'>
                        <div className='flex items-center space-x-1 font-bold ml-3'>
                            <img src={assets.agriconLogo2} alt="Agricon_img" className='ml-6'/>
                        </div>
                        <FaTimes
                            onClick={() => setShowMobileMenu(false)}
                            className='w-8 h-8 cursor-pointer text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-[#FFAC00] border rounded-md p-2'
                        />
                    </div>

                    <ul className='flex flex-col gap-2 mt-5 px-5 text-lg font-medium'>
                        {/* Mobile Navigation Links */}
                        <Link
                            onClick={() => setShowMobileMenu(false)}
                            to={"/user"}
                            className={`flex items-center py-3 px-4 rounded-lg ${isActive('/user') ? activeClass : inactiveClass}`}
                        >
                            <MdOutlineDashboard className="w-5 h-5 mr-3" /> Dashboard
                        </Link>
                        <Link
                            onClick={() => setShowMobileMenu(false)}
                            to={"/user/facilities"}
                            className={`flex items-center py-3 px-4 rounded-lg ${isActive('/user/facilities') ? activeClass : inactiveClass}`}
                        >
                            <FaCubes className="w-5 h-5 mr-3" /> Infrastructure
                        </Link>
                        <Link
                            onClick={() => setShowMobileMenu(false)}
                            to={"/users/booking-history"}
                            className={`flex items-center py-3 px-4 rounded-lg ${isActive('/users/booking-history') ? activeClass : inactiveClass}`}
                        >
                            <AiOutlineFileSearch className="w-5 h-5 mr-3" /> Booking History
                        </Link>
                        
                        <Link
                            onClick={() => setShowMobileMenu(false)}
                            to={"/user/settings"}
                            className={`flex items-center py-3 px-4 rounded-lg ${isActive('/user/settings') ? activeClass : inactiveClass}`}
                        >
                            <FaCog className="w-5 h-5 mr-3" /> Settings
                        </Link>

                    </ul>
                    <div className="profile py-5 px-3">
                    {" "}
                        <div className="bg-white flex flex-col gap-5 p-4 rounded-xl shadow-inner mb-4">
                            <div className="flex items-center mb-3">
                                <div className="top flex">
                                    <div className="circle relative w-12 h-12 flex items-center justify-center rounded-full     overflow-hidden">
                                        <div className="absolute border-r-4  border-green-800 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                            <span className="text-[10px] font-bold text-black">
                                                62%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-[12px] font-semibold text-[#1D2739]">
                                            Complete Profile
                                        </h3>
                                        <p className="text-[9px] text-[#344054]">
                                            Complete profile to unlock all features
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full text-left flex items-center justify-center px-3 py-2 bg-[#02402D] text-white      rounded-lg shadow-sm hover:bg-green-600 transition mb-2 text-sm font-medium">
                                Verify Email
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Side;