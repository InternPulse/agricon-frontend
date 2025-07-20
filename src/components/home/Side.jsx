import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaCog, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { AiFillNotification, AiOutlineFileSearch } from "react-icons/ai";
import { FaCubes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import Donut from "../Dashboard/Donut";
import { logout } from "../../api/logout";
import { IoNotifications } from "react-icons/io5";
import { ClipLoader } from 'react-spinners';

function Side({ picture, userName }) {
    const location = useLocation();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const userRole = localStorage.getItem("userRole")?.toUpperCase() || '';

    const role = localStorage.getItem('userRole');

    //logout handler
    const handleLogout = async () => {
        setLoading(true);
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
            navigate('/login');
        } finally {
            setLoading(false);
        }
    };

    // Prevent body and html scrolling when the mobile navbar is opened
    useEffect(() => {
        if (showMobileMenu || loading) { 
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        };
    }, [showMobileMenu, loading]); 

  const isActive = (path) => {
    return location.pathname === path;
  };

    const activeClass = "bg-[#FFAC00] text-white";
    const inactiveClass = "hover:border hover:border-[#FFAC00]";

    // sidebar navigation items based on role
    const navItems = {
        FARMER: [
            { path: '/farmer', icon: MdOutlineDashboard, text: 'Dashboard' },
            { path: '/farmer/facility', icon: FaCubes, text: 'Facilities' },
            { path: '/farmer/booking-history', icon: AiOutlineFileSearch, text: 'Booking History' },
            { path: '/farmer/settings', icon: FaCog, text: 'Settings' },
        ],
        OPERATOR: [
            { path: '/operator', icon: MdOutlineDashboard, text: 'Dashboard' },
            { path: '/operator/my-facility', icon: FaCubes, text: 'My Facilities' },
            { path: '/operator/bookings', icon: AiOutlineFileSearch, text: 'Bookings' },
            { path: '/operator/settings', icon: FaCog, text: 'Settings' },
        ],
    };

    const currentNavItems = navItems[userRole] || [];

    return (
        <>
            {/* Full-page loading overlay */}
            {loading && (
                <div className='fixed inset-0 bg-white flex justify-center items-center z-[9999]'> 
                    <ClipLoader color='#02402D' size={50} /> 
                </div>
            )}

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden fixed top-4 right-3 z-50">
                <FaBars
                    onClick={() => setShowMobileMenu(true)}
                    className="w-8 h-8 cursor-pointer text-[#FFAC00]"
                />
            </div>

            <div className="hidden lg:inline-block bg-[#02402D]
                                 min-h-screen fixed w-64 border-r text-white border-[#FFAC00]">
                <div className='flex items-center space-x-1 font-bold border-b border-[#FFAC00] py-4 ml-3'>
                    <img src={assets.agriconlog} alt="Agricon_img" className='ml-6'/>
                </div>
                {/* Desktop Navigation */}
                <ul className='flex flex-col mt-5 font-bold space-y-2 px-2'>
                    {currentNavItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className={`flex items-center py-2 px-2 space-x-4 rounded-lg ${isActive(item.path) ? activeClass : inactiveClass}`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className='hidden md:inline'>{item.text}</span>
                        </Link>
                    ))}
                </ul>
                <div className="profile py-5 px-5">
                    <div className="bg-white flex flex-col gap-5 p-2 rounded-xl shadow-inner mb-4">
                        <div className="flex">
                            <div className="top flex">
                                <div className="w-full">
                                    <Donut completionPercentage={62} />
                                </div>
                                <div>
                                    <h3 className="text-[14px] font-bold text-[#1D2739]">
                                        You’re Almost There
                                    </h3>
                                    <p className="text-[9px] text-[#344054]">
                                        Update your details to keep your account accurate and accessible.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link
                            to={`/${role}/settings`}
                            onClick={() => setShowMobileMenu(false)}
                            className="w-full text-left flex items-center justify-center px-3 py-2 bg-[#02402D] text-white rounded-lg shadow-sm hover:bg-green-600 transition mb-2 text-sm font-medium">
                            Update Profile
                        </Link>
                    </div>
                </div>

            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out
                            ${showMobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setShowMobileMenu(false)}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`fixed top-0 bottom-0 left-0 w-[99%] bg-[#02402D] text-gray-800 dark:text-white
                                shadow-lg transform transition-transform duration-300 ease-in-out z-50
                                ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div className='flex justify-between items-center px-6 py-4.5 border-b border-[#FFAC00] z-40'>
                        <Link to={`/${role}/notification`}
                            onClick={() => setShowMobileMenu(false)}
                            className='font-bold text-[#FFAC00]'
                        >
                            <IoNotifications size={24} />
                        </Link>
                        <FaTimes
                            onClick={() => setShowMobileMenu(false)}
                            className='w-8 h-8 cursor-pointer text-[#FFAC00]'
                        />
                    </div>
                    <ul className='flex flex-col gap-2 mt-3 px-5 font-bold'>
                        {currentNavItems.map((item, index) => (
                            <Link
                                key={index}
                                onClick={() => setShowMobileMenu(false)}
                                to={item.path}
                                className={`flex items-center py-2 px-4 rounded-lg ${isActive(item.path) ? activeClass : inactiveClass}`}
                            >
                                <item.icon className="w-5 h-5 mr-3" /> {item.text}
                            </Link>
                        ))}
                    </ul>
                    <div className="profile py-5 px-5">
                        <div className="bg-white flex flex-col gap-5 p-4 rounded-xl shadow-inner mb-4">
                            <div className="flex items-center ">
                                <div className="top flex gap-1">
                                    <div className="w-full">
                                        <Donut completionPercentage={62} />
                                    </div>
                                    <div>
                                        <h3 className="text-[14px] font-bold text-[#1D2739]">
                                            You’re Almost There
                                        </h3>
                                        <p className="text-[9px] text-[#344054]">
                                            Update your details to keep your account accurate and accessible.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Link
                                to={`/${role}/settings`}
                                onClick={() => setShowMobileMenu(false)}
                                className="w-full text-left flex items-center justify-center px-3 py-2 bg-[#02402D] text-white rounded-lg shadow-sm hover:bg-green-600 transition mb-2 text-sm font-medium">
                                Update Profile
                            </Link>
                        </div>
                    </div>
                    {/* user profile and logout */}
                    <div className='md:hidden mt-auto'>
                        <div className='text-center space-y-4 px-5'>
                            <div className='flex items-center gap-4 px-4'>
                                <p>{picture}</p>
                                <h6 className='font-bold text-black dark:text-white'>{userName}</h6>
                            </div>
                            <div className=" mt-2 bg-white rounded-md shadow-lg py-1 ">
                                <button
                                    onClick={handleLogout} 
                                    className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50"
                                    disabled={loading} 
                                >
                                        <FaSignOutAlt className="mr-2" />
                                        Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Side;
