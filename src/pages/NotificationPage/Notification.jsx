import { useEffect, useState } from "react";
import NoNotification from "../../components/NotificationComponents/noNotification/NoNotification";
import IsNotification from "../../components/NotificationComponents/IsNotification/IsNotification";

export default function Notification() {
  const [fetchData, setFetch] = useState({});
  const { message, data } = fetchData;
  const [read, setRead] = useState(0);
  const [unRead, setUnread] = useState(0);
  const [markAsReadBody, setMarkAsReadBody] = useState();

  const fetchNotification = () => {
    fetch("https://agricon-express-backend.onrender.com/api/v1/notifications", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(
              `HTTP error! status: ${response.status}, message: ${
                errorData.message || "Unknown error"
              }`
            );
          });
        }
        return response.json();
      })
      .then((data) => {
        setFetch(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };
  const dummy = () => {
    setFetch({
      message: "Notifications fetched successfully",
      data: [
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
          title: `Welcome to AgriCon, ${
            (JSON.parse(localStorage.getItem("operatorProfile")) &&
              JSON.parse(localStorage.getItem("operatorProfile")).firstName) ||
            "Firstname"
          }!`,
          message:
            "Start by exploring nearby dryers, cold rooms, or processing units and make your first booking!",
          type: "welcome",
          isRead: true,
          createdAt: "July 15, 12:04 PM",
        },
      ],
    });
  };
  const markAsRead = () => {
    fetch(
      "https://agricon-express-backend.onrender.com/api/v1/notifications/1",
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(markAsReadBody),
      }
    );
  };

  //useEffect(fetchNotification, []);
  useEffect(dummy, []);

  useEffect(() => {
    data &&
      data.length > 0 &&
      data.forEach((note) =>
        note.isRead ? setRead(read + 1) : setUnread(unRead + 1)
      );
  }, [message]);

  return (
    <div>
      {data && data.length > 0 ? (
        <IsNotification
          data={data}
          mark={[markAsReadBody, setMarkAsReadBody]}
          unRead={unRead}
          read={read}
        />
      ) : (
        <NoNotification />
      )}
    </div>
  );
}
