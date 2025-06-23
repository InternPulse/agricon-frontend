import React from "react";

function StatusBadge({ status }) {
  const isSuccess = status === "Successful";
  return (
    <span className={isSuccess ? "status-success" : "status-failed"}>
      {status}
    </span>
  );
}

export default function BookingTable({ bookingData }) {
  return (
    <table className="booking-table">
      <thead>
        <tr>
          <th>Invoice</th>
          <th>Infrastructure</th>
          <th>Amount</th>
          <th>Date &amp; Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {bookingData.map((row, i) => (
          <tr key={i}>
            <td>{row.invoice}</td>
            <td>{row.infrastructure}</td>
            <td>{row.amount}</td>
            <td>
              {row.date}, {row.time}
            </td>
            <td>
              <StatusBadge status={row.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
