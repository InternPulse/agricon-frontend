import { useEffect, useState } from "react";
import Button from "../../components/infrastructure/ui/Button";
import { format } from "date-fns";

import agriconLogo from "../../assets/agriconLogo.png";
import coldRoom from "../../assets/coldRoom.png";
import logistics from "../../assets/logistics.png";
import pendingStamp from "../../assets/pendingStamp.png";

export default function BookingSummary() {
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     async function fetchBooking() {
  //       try {
  //         const response = await fetch("http://localhost:4000/bookings");
  //         const data = await response.json();

  //         if (Array.isArray(data) && data.length > 0) {
  //           const latestBooking = data[data.length - 1];
  //           setBooking(latestBooking);
  //         }
  //       } catch (err) {
  //         console.error("Failed to fetch booking data", err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }

  //     fetchBooking();
  //   }, []);

  useEffect(() => {
    const defaultBooking = {
      name: "John Doe",
      date: new Date().toISOString(),
      duration: 3,
      requirement: "Requires 24/7 temperature monitoring.",
    };

    setTimeout(() => {
      setBooking(defaultBooking);
      setLoading(false);
    }, 500); // Simulated loading delay
  }, []);

  if (loading) {
    return <div className="p-8 text-center">Loading booking summary...</div>;
  }

  if (!booking) {
    return (
      <div className="p-8 text-center text-red-500">No booking data found.</div>
    );
  }

  let orderDate = "N/A";
  try {
    if (booking.date) {
      const parsedDate = new Date(booking.date);
      if (!isNaN(parsedDate)) {
        orderDate = format(parsedDate, "do MMMM, yyyy");
      }
    }
  } catch (error) {
    console.error("Invalid booking date:", booking.date, error);
  }
  const duration = booking.duration || "N/A";
  const name = booking.name || "User";

  const coldStoragePrice = 1500;
  const logisticsPrice = 3000;
  const subTotal = coldStoragePrice * duration + logisticsPrice;
  const shipping = 750;
  const vat = 7.5;
  const total = subTotal + shipping + vat;

  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md mt-10">
      <img
        src={agriconLogo}
        alt="agricon logo"
        className="max-w-[73px] w-full mb-5"
      />
      <h1 className="text-2xl font-semibold mb-5">Booking summary</h1>
      <p className="text-gray-600 font-medium mb-2">Hello {name},</p>
      <p className="text-gray-500 text-sm mb-8">
        Below is your booking summary, confirm and continue to payment.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm border-t border-b border-gray-300 py-4 mb-8">
        <div className="border-r border-gray-300">
          <p className="text-sm text-gray-700">Order date</p>
          <p className="text-gray-800 font-medium">{orderDate}</p>
          <p className="text-green-600 text-xs">14:00 (WAT)</p>
        </div>
        <div className="border-r border-gray-300 max-lg:border-none">
          <p className="text-sm text-gray-700">Order number</p>
          <p className="text-gray-800 font-medium">N/A</p>
        </div>
        <div className="border-r border-gray-300">
          <p className="text-sm text-gray-700">Payment method</p>
          <p className="text-gray-800 font-medium">N/A</p>
        </div>
        <div>
          <p className="text-sm text-gray-700">Shipping address</p>
          <p className="text-black">15b Dolor Ave.</p>
          <p className="text-green-600 text-xs">Lagos, NGA.</p>
        </div>
      </div>

      {/* Facilities */}
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <img
            src={coldRoom}
            alt="Cold room"
            className="max-w-[80px] w-full object-cover rounded-md"
          />
          <div className="flex flex-col gap-4">
            <p className="font-medium text-lg">Cold Room Facility Storage</p>
            <p className="text-sm text-gray-500">Quantity: {duration} days</p>
          </div>
        </div>
        <p className="font-medium text-sm">
          ₦{coldStoragePrice.toLocaleString()}/day
        </p>
      </div>

      <hr className="border-t border-gray-300 my-12" />

      <div className="flex items-start justify-between mb-8">
        <div className="flex gap-4">
          <img
            src={logistics}
            alt="Logistics"
            className="max-w-[80px] w-full object-cover rounded-md"
          />
          <div className="flex flex-col gap-4">
            <p className="font-medium text-lg">Logistics Support</p>
            <p className="text-sm text-gray-500">Quantity: 1 trip</p>
          </div>
        </div>
        <p className="font-medium text-sm">
          ₦{logisticsPrice.toLocaleString()}/day
        </p>
      </div>

      <div className="flex flex-wrap justify-between mb-8 ">
        <img
          src={pendingStamp}
          alt="Pending"
          className="max-w-[134px] w-full mb-4"
        />

        {/* Summary */}
        <div className="flex flex-col gap-1 text-sm min-w-xs">
          <div className="flex justify-between">
            <span className="text-gray-500">Sub-total</span>
            <span className="font-medium">₦{subTotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Shipping fee</span>
            <span className="font-medium">₦{shipping.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">VAT</span>
            <span className="font-medium">₦{vat.toLocaleString()}</span>
          </div>
          <div className="flex justify-between border-t pt-2 font-bold text-lg">
            <span>TOTAL</span>
            <span>₦{total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-end">
        <Button className="w-[210px] bg-[#02402D] text-white rounded px-6 py-2">
          Continue to Payment
        </Button>
        <Button className="w-[210px] bg-white border border-gray-400 text-gray-700 rounded px-6 py-2">
          Cancel
        </Button>
      </div>
    </div>
  );
}
