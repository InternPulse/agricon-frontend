import React from "react";
import NoNotification from "../components/NotificationComponents/noNotification/NoNotification";
import ActiveNotification from "../components/NotificationComponents/activeNotification/ActiveNotification";

export default function AllNotification() {
  return (
    <div className="mt-20 lg:p-3 lg:mt-0">
      {/* <NoNotification /> */}
      <ActiveNotification />
    </div>
  );
}
