import { Link, useLocation } from "react-router-dom";
import { FaBars, FaCog, FaTimes } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaCubes } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { useEffect, useState, useReducer } from "react";
import { assets } from "../../assets/assets";
import MobileSidebar from "./MobileSidebar";

const reducer = (state, action) => {
  switch (action.type) {
    case "/notification":
      return "Notification";
    case "/dashboard":
      return <img src={assets.agriconLogoWhite} />;
    case "/facilities":
      return "Facilities";
    case "/booking-history":
      return "Booking History";
    case "/settings":
      return "Setings";
    case "/payment":
      return "Payment";
    default:
      return <img src={assets.agriconLogoWhite} />;
  }
};

function Sidebar() {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [logoContent, dispatch] = useReducer(
    reducer,
    <img src={assets.agriconLogoWhite} alt="logo" className="w-24" />
  );

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

  useEffect(() => {
    dispatch({ type: location.pathname });
  }, [location.pathname]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Define active and inactive classes based on theme
  const activeClass = "bg-vivid-yellow text-white";
  const inactiveClass = "hover:border hover:border-vivid-yellow";

  return (
    <div className="">
      {/* small-screen logo */}

      <div className="bg-deep-green">
        <div className=" bg-deep-green  items-center fixed justify-between py-4 px-2  top-0 w-full md:hidden   space-y-4">
          <div className="">
            {typeof logoContent === "string" ? (
              <h1 className="text-vivid-yellow text-sm font-light">
                {logoContent}
              </h1>
            ) : (
              logoContent
            )}
          </div>

          {/* Mobile Menu Toggle Button (visible only on small screens) */}
          <div className=" right-3 top-4 absolute z-10">
            {showMobileMenu ? null : (
              <FaBars
                onClick={() => {
                  setShowMobileMenu(true);
                  dispatch({ type: "/notificaton" });
                }}
                className="w-8 h-8 cursor-pointer rounded-md p-2 text-vivid-yellow  hover:text-vivid-yellow "
              />
            )}
          </div>
           <div className="border-b border-b-vivid-yellow  relative"></div>
        </div>

       
      </div>

      <div
        className="hidden md:inline-block bg-deep-green
                            min-h-screen fixed  px-4 w-64  border-r text-white border-vivid-yellow"
      >
        <div className=" lg:flex items-center space-x-1 font-bold border-b border-vivid-yellow py-5">
          <img
            src={assets.agriconLogoWhite}
            alt="Agricon_img"
            className="ml-6"
          />
        </div>

        <ul className="flex flex-col mt-5  font-bold space-y-6">
          <Link
            to="/"
            onClick={() => dispatch({ type: "/dashboard" })}
            className={`flex items-center py-3 px-2 space-x-4 rounded-lg ${
              isActive("/") ? activeClass : inactiveClass
            }`}
          >
            <MdOutlineDashboard className="w-5 h-5" />
            <span className="hidden md:inline">Dashboard</span>
          </Link>

          <Link
            to="/facilities"
            onClick={() => dispatch({ type: "/facilites" })}
            className={`flex items-center py-3 px-2 space-x-4 rounded-lg ${
              isActive("/facilities") ? activeClass : inactiveClass
            }`}
          >
            <FaCubes className="w-5 h-5" />
            <span className="hidden md:inline">Facilities</span>
          </Link>

          <Link
            to="/booking-history"
            onClick={() => dispatch({ type: "/booking-history" })}
            className={`flex items-center py-3 px-2 space-x-4 rounded-lg ${
              isActive("/booking-history") ? activeClass : inactiveClass
            }`}
          >
            <AiOutlineFileSearch className="w-5 h-5" />
            <span className="hidden md:inline">Booking History</span>
          </Link>

          <Link
            to="/payment"
            onClick={() => dispatch({ type: "/payment" })}
            className={`flex items-center py-3 px-2 space-x-4 rounded-lg ${
              isActive("/payment") ? activeClass : inactiveClass
            }`}
          >
            <FaMoneyBillAlt className="w-5 h-5" />
            <span className="hidden md:inline">Payments</span>
          </Link>

          <Link
            to="settings"
            onClick={() => dispatch({ type: "/settings" })}
            className={`flex items-center py-3 px-2 space-x-4 rounded-lg ${
              isActive("/settings") ? activeClass : inactiveClass
            }`}
          >
            <FaCog className="w-5 h-5" />
            <span className="hidden md:inline">Settings</span>
          </Link>
        </ul>
      </div>

      {/* Mobile Sidebar (visible only when showMobileMenu is true and on small screens) */}
      <MobileSidebar
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        isActive={isActive}
        inactiveClass={inactiveClass}
      />
    </div>
  );
}

export default Sidebar;
