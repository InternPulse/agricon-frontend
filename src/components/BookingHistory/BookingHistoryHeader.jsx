import React from "react";
import { Icon } from "@iconify/react";
import "./BookingHistoryHeader.css";

export default function BookingHistoryHeader() {
  return (
    <div className="booking-history-header">
      <h2>Booking History</h2>
      <div className="header-right">
        <div className="header-search">
          <Icon icon="mdi:magnify" width="20" height="20" />
          <input
            type="text"
            placeholder="Search..."
            className="header-search-input"
          />
        </div>
        <button className="header-icon" aria-label="Notifications">
          <Icon icon="mdi:bell-outline" width="24" height="24" color="#065f46" />
        </button>

        <div className="header-profile">
          <img
            className="header-avatar"
            src="src/assets/avatar.png"
            alt="User Avatar"
          />
          <span className="header-username">Intern</span>
          <button className="header-dropdown" aria-label="Open profile menu">
            <Icon icon="mdi:chevron-down" width="20" height="20" />
          </button>
        </div>
      </div>
    </div>
  );
}