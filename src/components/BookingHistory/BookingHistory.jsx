import React from "react";
import BookingHistoryHeader from "./BookingHistoryHeader";
import BookingTable from "./BookingTable";
import bookingData from "./bookingData";
import "./BookingHistory.css";
import { FiCheckCircle, FiXCircle, FiSearch } from "react-icons/fi";

const metrics = [
  {
    label: "Total Booking",
    value: "3,000",
    icon: <img src="/total-booking-icon.svg" alt="" />,
    className: "total",
  },
  {
    label: "Successful Booking",
    value: "2,500",
    icon: <FiCheckCircle />,
    className: "success",
  },
  {
    label: "Failed Booking",
    value: "500",
    icon: <FiXCircle />,
    className: "fail",
  },
];

export default function BookingHistory() {
  return (
    <div className="booking-history-wrapper">
      <BookingHistoryHeader />
      <div className="booking-content">
        {/* Metrics */}
        <div className="metrics-row">
          {metrics.map((metric) => (
            <div className={`metric-card ${metric.className}`} key={metric.label}>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-value">{metric.value}</div>
              <div className="metric-icon">{metric.icon}</div>
            </div>
          ))}
        </div>
        {/* Booking List */}
        <div className="booking-list-section">
          <div className="booking-list-header-row">
            <span className="booking-list-title">Booking List</span>
          </div>
          <div className="booking-list-filters">
            <div className="filter-search">
              <FiSearch className="filter-icon" />
              <input type="text" placeholder="Search booking" />
            </div>
            <select className="filter-status">
              <option>Status</option>
              <option>Successful</option>
              <option>Unsuccessful</option>
            </select>
            <div className="filter-date">
              2025-01-20{" "}
              <span style={{ margin: "0 5px" }}>→</span> 2025-04-02
              <span className="date-icon" role="img" aria-label="calendar">
                📅
              </span>
            </div>
          </div>
          <div className="booking-table-container">
            <BookingTable bookingData={bookingData} />
            <div className="pagination">
              <button>{"<"}</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>{">"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}