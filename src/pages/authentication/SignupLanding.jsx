

import React from "react";
import "./SignupLanding.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import logo from "../../assets/agriconLogo.png"

const SignupLanding = () => {
  return (
    <div className="lg:w-full grid lg:flex items-center gap-6 justify-center py-6 bg-gray-100">
      {/* Left Section */}
      <div>
        <div className="hidden lg:grid bg-[#F0F2F5] p-4 rounded gap-4 items-center justify-items-center">
          <img className="" src={logo} alt="agrion" />
          <img
            className="signup-landing-image w-66 md:w-96 h-auto rounded-lg shadow-lg"
            src={assets.authImage}
            alt="Find Nearby Infrastructure"
          />
          <div className="signup-landing-caption">
            <div className="signup-landing-title">Find Nearby Infrastructure</div>
            <div className="signup-landing-subtitle">
              Discover dryers, cold rooms, and processing units close to your farm.
            </div>
          </div>
          <div className="signup-landing-progress">
            <div className="signup-landing-progress-bar active w-8 md:w-10 lg:w-16" />
            <div className="signup-landing-progress-bar w-8 md:w-10 lg:w-16" />
            <div className="signup-landing-progress-bar w-8 md:w-10 lg:w-16" />
            <div className="signup-landing-progress-bar w-8 md:w-10 lg:w-16" />
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="grid gap-4 items-center justify-center">
        <div className="signup-landing-signup-title">Sign up</div>
        <div className="signup-landing-cards">
          <div className="signup-landing-card">
            <Link to='/signup'>
              <div className="signup-landing-card-title">
                AgriCon for Farmers
              </div>
              <div className="signup-landing-card-desc">
                Book cold rooms, dryers, and processing units
              </div>
            </Link>
            <span className="signup-landing-card-arrow">&#8250;</span>
          </div>
          <div className="signup-landing-card">
            <Link to='/signup'>
              <div className="signup-landing-card-title">
                AgriCon for Facility Owners
              </div>
              <div className="signup-landing-card-desc">
                Create and manage bookings online.
              </div>
            </Link>
            <span className="signup-landing-card-arrow">&#8250;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLanding;