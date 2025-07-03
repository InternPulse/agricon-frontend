import React, { useState } from "react";

import AllNotificationNavbar from "../ActiveNotificationBar/AllNotificationNavbar";
import AllNotificationCards from "../ActiveNotificationBar/AllNotificationCards";

export default function ActiveNotification() {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(false);
    console.log("Notification deleted");
  };

  return (
    <div className="px-4 md:px-6 lg:px-10 py-6 addFont">
      <AllNotificationNavbar />
      <AllNotificationCards
        showModal={showModal}
        handleDelete={handleDelete}
        setShowModal={setShowModal}
      />
    </div>
  );
}
