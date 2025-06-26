import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaCog, FaTimes } from 'react-icons/fa';
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaCubes } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import Donut from '../Dashboard/Donut';


function Side({ FARMER, OPERATOR }) {
    const location = useLocation();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const userRole = localStorage.getItem("userRole")?.toUpperCase() || ''; 

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

    
    const activeClass = "bg-[#FFAC00] text-white";
    const inactiveClass = "hover:border hover:border-[#FFAC00]";

    // Define navigation items based on role
    const navItems = {
        FARMER: [
            { path: '/farmer', icon: MdOutlineDashboard, text: 'Dashboard' },
            { path: '/farmer/facility', icon: FaCubes, text: 'Facilities' },
            { path: '/farmer/booking-history', icon: AiOutlineFileSearch, text: 'Booking History' },
            { path: '/farmer/settings', icon: FaCog, text: 'Settings' },
        ],
        OPERATOR: [
            { path: '/operator', icon: MdOutlineDashboard, text: 'Dashboard' },
            { path: '/operator/facility', icon: FaCubes, text: 'My Facilities' },
            { path: '/operator/booking-history', icon: AiOutlineFileSearch, text: 'Booking History' },
            { path: '/operator/setting', icon: FaCog, text: 'Settings' },
        ],
        
    };

    
    const currentNavItems = navItems[userRole] || []; // no userRole match, default to an empty array

    return (
        <>
            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden fixed top-4 left-3 z-50">
                <FaBars
                    onClick={() => setShowMobileMenu(true)}
                    className="w-8 h-8 cursor-pointer border border-[#02402D] rounded-md p-2 text-[#02402D] hover:border-[#FFAC00] hover:text-[#FFAC00]"
                />
            </div>

            <div className="hidden md:inline-block bg-[#02402D]
                                min-h-screen fixed w-64 border-r text-white border-[#FFAC00]">
                <div className='flex items-center space-x-1 font-bold border-b border-[#FFAC00] py-4'>
                    <img src={assets.agriconLogo2} alt="Agricon_img" className='ml-6'/>
                </div>
                {/* Desktop Navigation */}
                <ul className='flex flex-col mt-5 font-bold space-y-3 px-4'>
                    {currentNavItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className={`flex items-center py-3 px-2 space-x-4 rounded-lg ${isActive(item.path) ? activeClass : inactiveClass}`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className='hidden md:inline'>{item.text}</span>
                        </Link>
                    ))}
                </ul>
                <div className="profile py-5 px-3">
                    <div className="bg-white flex flex-col gap-5 p-4 rounded-xl shadow-inner mb-4">
                        <div className="flex items-center ">
                            <div className="top flex gap-1">
                                <div className="w-full">
                                    <Donut completionPercentage={62} />
                                </div>
                                <div>
                                    <h3 className="text-[12px] font-semibold text-[#1D2739]">
                                        Refer & Earn
                                    </h3>
                                    <p className="text-[9px] text-[#344054]">
                                        Invite fellow farmers to join AGRICON and earn rewards
                                        when they sign up and book their first facility
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full text-left flex items-center justify-center px-3 py-2 bg-[#02402D] text-white rounded-lg shadow-sm hover:bg-green-600 transition mb-2 text-sm font-medium">
                            Refer
                        </button>
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
                    className={`fixed top-0 bottom-0 left-0 w-64 bg-[#02402D] text-gray-800 dark:text-white
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
                        {currentNavItems.map((item, index) => (
                            <Link
                                key={index}
                                onClick={() => setShowMobileMenu(false)}
                                to={item.path}
                                className={`flex items-center py-3 px-4 rounded-lg ${isActive(item.path) ? activeClass : inactiveClass}`}
                            >
                                <item.icon className="w-5 h-5 mr-3" /> {item.text}
                            </Link>
                        ))}
                    </ul>
                    <div className="profile py-5 px-3">
                        <div className="bg-white flex flex-col gap-5 p-4 rounded-xl shadow-inner mb-4">
                            <div className="flex items-center ">
                                <div className="top flex gap-1">
                                    <div className="w-full">
                                        <Donut completionPercentage={62} />
                                    </div>
                                    <div>
                                        <h3 className="text-[12px] font-semibold text-[#1D2739]">
                                            Refer & Earn
                                        </h3>
                                        <p className="text-[9px] text-[#344054]">
                                            Invite fellow farmers to join AGRICON and earn rewards
                                            when they sign up and book their first facility
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full text-left flex items-center justify-center px-3 py-2 bg-[#02402D] text-white rounded-lg shadow-sm hover:bg-green-600 transition mb-2 text-sm font-medium">
                                Referl
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Side;