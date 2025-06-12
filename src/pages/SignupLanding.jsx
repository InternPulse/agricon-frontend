import React from "react";
import "./SignupLanding.css";

const SignupLanding = () => {
  return (
    <div className="signup-landing-root">
      {/* Left Section */}
      <div className="signup-landing-left">
        <div className="signup-landing-left-inner">
<img className="signup-landing-logo" src="/agrion-logo.png" alt="agrion" />
<img
  className="signup-landing-image"
  src="/find_nearby_infrastructure_discover_dryers_cold_rooms.png"
  alt="Find Nearby Infrastructure"
/>
          <div className="signup-landing-caption">
            <div className="signup-landing-title">Find Nearby Infrastructure</div>
            <div className="signup-landing-subtitle">
              Discover dryers, cold rooms, and processing units close to your farm.
            </div>
          </div>
          <div className="signup-landing-progress">
            <div className="signup-landing-progress-bar active" />
            <div className="signup-landing-progress-bar" />
            <div className="signup-landing-progress-bar" />
            <div className="signup-landing-progress-bar" />
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="signup-landing-right">
        <div className="signup-landing-signup-title">Sign up</div>
        <div className="signup-landing-cards">
          <div className="signup-landing-card">
            <div>
              <div className="signup-landing-card-title">
                AgriCon for Farmers
              </div>
              <div className="signup-landing-card-desc">
                Book cold rooms, dryers, and processing units
              </div>
            </div>
            <span className="signup-landing-card-arrow">&#8250;</span>
          </div>
          <div className="signup-landing-card">
            <div>
              <div className="signup-landing-card-title">
                AgriCon for Facility Owners
              </div>
              <div className="signup-landing-card-desc">
                Create and manage bookings online.
              </div>
            </div>
            <span className="signup-landing-card-arrow">&#8250;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLanding;