import React, { useEffect, useState } from "react";
import SearchBar from "../../components/navbar/SearchBar";
import NoNotification from "../../components/NotificationComponents/noNotification/NoNotification";
import AllNotification from "../../components/NotificationComponents/IsNotification/IsNotification";
import IsNotification from "../../components/NotificationComponents/IsNotification/IsNotification";

export default function Notification() {
  const [data, setData] = useState([]);
  const [read, setRead] = useState(0);
  const [unRead, setUnread] = useState(0);

  useEffect(() => {
    setData([
      {
        id: 0,
        userId: "",
        title: "Booking Confirmed",
        message:
          "Your booking for Cold Room A has been confirmed for June 22, 2025",
        type: "booking",
        isRead: true,
        createdAt: "June 20, 10:35 AM",
      },
      {
        id: 0,
        userId: "",
        title: "Booking Confirmed",
        message:
          "Your booking for Cold Room A has been confirmed for June 22, 2025",
        type: "booking",
        isRead: false,
        createdAt: "June 20, 10:35 AM",
      },
      {
        id: 1,
        userId: "",
        title: "Error Processing Payment",
        message:
          "Please review the wallet details and fix the error to process your payment",
        type: "error",
        isRead: false,
        createdAt: "April 2, 8:35 AM",
      },
      {
        id: 2,
        userId: "",
        title: "Welcome to AgriCon, {First Name}!",
        message:
          "Start by exploring nearby dryers, cold rooms, or processing units and make your first booking!",
        type: "welcome",
        isRead: true,
        createdAt: "July 15, 12:04 PM",
      },
    ]);
  }, []);

  useEffect(() => {
    data.forEach((note) =>
      note.isRead ? setRead(read + 1) : setUnread(unRead + 1)
    );
  }, [data]);

  return (
    <div>
      {data && data.length > 0 ? (
        <IsNotification data={data} unRead={unRead} read={read} />
      ) : (
        <NoNotification />
      )}
    </div>
  );
}
