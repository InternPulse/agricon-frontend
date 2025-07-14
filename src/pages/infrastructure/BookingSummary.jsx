import Button from "../../components/infrastructure/ui/Button";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { format, differenceInDays } from "date-fns";

import agriconLogo from "../../assets/agriconLogo.png";
import coldRoom from "../../assets/coldRoom.png";
import pendingStamp from "../../assets/pendingStamp.png";

export default function BookingSummary() {
  const [name, setName] = useState("User");
  const [orderDate, setOrderDate] = useState("N/A");
  const [orderNumber, setOrderNumber] = useState("N/A");
  const [duration, setDuration] = useState(0);
  const [coldStoragePrice, setColdStoragePrice] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(2000);
  const [vat, setVat] = useState(0);
  const [total, setTotal] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const farmerProfileString = localStorage.getItem("farmerProfile");
    if (farmerProfileString) {
      try {
        const farmerProfile = JSON.parse(farmerProfileString);
        setName(farmerProfile.name || "Farmer");
      } catch (e) {
        console.error("Error parsing farmerProfile from localStorage:", e);
      }
    }

    const bookingDetailsString = localStorage.getItem("currentBookingDetails");
    if (bookingDetailsString) {
      try {
        const bookingDetails = JSON.parse(bookingDetailsString);
        console.log("Retrieved bookingDetails from localStorage:", bookingDetails);

        setOrderNumber(bookingDetails.bookingId || "N/A");

        const startDate = bookingDetails.startDate ? new Date(bookingDetails.startDate) : null;
        const endDate = bookingDetails.endDate ? new Date(bookingDetails.endDate) : null;

        if (startDate) {
          setOrderDate(format(startDate, "dd/MM/yyyy"));
        }

        let calculatedDuration = 0;
        if (startDate && endDate) {
          calculatedDuration = differenceInDays(endDate, startDate);
          if (calculatedDuration < 1) {
            calculatedDuration = 1;
          }
          setDuration(calculatedDuration);
        }

        const pricePerDay = bookingDetails.amount ? Number(bookingDetails.amount) : 0;
        setColdStoragePrice(pricePerDay);

        const calculatedSubTotal = pricePerDay * calculatedDuration; // Removed logisticsPrice
        setSubTotal(calculatedSubTotal);

        const calculatedVat = calculatedSubTotal * 0.075;
        setVat(calculatedVat);

        const calculatedTotal = calculatedSubTotal + shipping + calculatedVat;
        setTotal(calculatedTotal);

      } catch (e) {
        console.error("Error parsing currentBookingDetails from localStorage:", e);
      }
    } else {
      console.warn("No 'currentBookingDetails' found in localStorage. User might not have completed a booking yet.");
    }
  }, [shipping]); // Removed logisticsPrice from dependencies

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
          <p className="text-gray-800 font-medium">{orderNumber}</p>
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

      {/* Logistics section removed */}

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