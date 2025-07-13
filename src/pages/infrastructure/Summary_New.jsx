
// import { useEffect, useState } from "react";
// // import Button from "../../components/infrastructure/ui/Button";
// import { format, differenceInDays } from "date-fns";
 
// import agriconLogo from "../../assets/agriconLogo.png";
// import coldRoom from "../../assets/coldRoom.png";
// import logistics from "../../assets/logistics.png";
// import pendingStamp from "../../assets/pendingStamp.png";
 
 
// async function getBookingDetails(bookingId) {
 
//   return {
//     bookingId: bookingId || "ORD12345", // Simulated booking ID
//     name: "John Doe",
//     startDate: new Date("2025-07-15T00:00:00Z").toISOString(),
//     endDate: new Date("2025-07-18T00:00:00Z").toISOString(),
//     amount: 50000, 
//     facilityId: 1, 
//     farmerId: 101, 
//     status: 'pending', 
//   };
// }
 
 
// // --- Main BookingSummary Component ---
// export default function BookingSummary({ confirmedBooking = null }) {
//   const [booking, setBooking] = useState(confirmedBooking);
//   const [loading, setLoading] = useState(!confirmedBooking);
//   const [error, setError] = useState(null);
 
 
//   useEffect(() => {
   
//     if (confirmedBooking) {
//       setBooking(confirmedBooking);
//       setLoading(false);
//       return;
//     }
 
   
//     const fetchBooking = async () => {
//       try {
//         setLoading(true);
//         // Replace 'null' with an actual booking ID retrieval logic (e.g., from URL params)
//         const bookingData = await getBookingDetails(null);
//         setBooking(bookingData);
//       } catch (err) {
//         console.error("Failed to fetch booking data", err);
//         setError("Failed to load booking summary. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
 
//     fetchBooking();
//   }, [confirmedBooking]);
 
//   if (loading) {
//     return <div className="p-8 text-center">Loading booking summary...</div>;
//   }
 
//   if (error || !booking) {
//     return (
//       <div className="p-8 text-center text-red-500">
//         {error || "No booking data found."}
//       </div>
//     );
//   }
 
//   // --- Calculations and Data Formatting (Refactored) ---
 
//   const { name, startDate, endDate, amount } = booking;
//   const parsedStartDate = startDate ? new Date(startDate) : null;
//   const parsedEndDate = endDate ? new Date(endDate) : null;
 
//   let durationInDays = 0;
//   if (parsedStartDate && parsedEndDate) {
//     durationInDays = differenceInDays(parsedEndDate, parsedStartDate);
//     if (durationInDays < 0) durationInDays = 0; // Ensure duration is non-negative
//   }
 
//   const orderDate = parsedStartDate ? format(parsedStartDate, "do MMMM, yyyy") : "N/A";
//   const duration = durationInDays || 1; // Default to 1 if dates are invalid
//   const userName = name || "User";
 
 
 
//   const coldStoragePricePerDay = 1500;
//   const logisticsPrice = 3000;
//   const shipping = 750;
//   const vatRate = 0.075; // 7.5%
 
 
//   const subTotal = amount || (coldStoragePricePerDay * duration) + logisticsPrice;
 
//   const vat = subTotal * vatRate;
//   const total = subTotal + shipping + vat;
 
//   // --- Component Rendering ---
//   return (
//     <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md mt-10">
//       <img
//         src={agriconLogo}
//         alt="agricon logo"
//         className="max-w-[73px] w-full mb-5"
//       />
//       <h1 className="text-2xl font-semibold mb-5">Booking summary</h1>
//       <p className="text-gray-600 font-medium mb-2">Hello {userName},</p>
//       <p className="text-gray-500 text-sm mb-8">
//         Below is your booking summary, confirm and continue to payment.
//       </p>
 
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm border-t border-b border-gray-300 py-4 mb-8">
//         <div className="border-r border-gray-300">
//           <p className="text-sm text-gray-700">Order date</p>
//           <p className="text-gray-800 font-medium">{orderDate}</p>
//           <p className="text-green-600 text-xs">14:00 (WAT)</p>
//         </div>
//         <div className="border-r border-gray-300 max-lg:border-none">
//           <p className="text-sm text-gray-700">Order number</p>
//           <p className="text-gray-800 font-medium">{booking.bookingId || "N/A"}</p>
//         </div>
//         <div className="border-r border-gray-300">
//           <p className="text-sm text-gray-700">Payment method</p>
//           <p className="text-gray-800 font-medium">N/A</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-700">Shipping address</p>
//           <p className="text-black">15b Dolor Ave.</p>
//           <p className="text-green-600 text-xs">Lagos, NGA.</p>
//         </div>
//       </div>
 
//       {/* Facilities: Display details from the booking */}
//       <div className="flex items-start justify-between">
//         <div className="flex gap-4">
//           <img
//             src={coldRoom}
//             alt="Cold room"
//             className="max-w-[80px] w-full object-cover rounded-md"
//           />
//           <div className="flex flex-col gap-4">
//             <p className="font-medium text-lg">Cold Room Facility Storage</p>
//             <p className="text-sm text-gray-500">
//               {durationInDays > 0 ? `Duration: ${durationInDays} days` : "Duration: N/A"}
//             </p>
//           </div>
//         </div>
//         {/* Displaying the amount associated with the cold room based on the form input */}
//         <p className="font-medium text-sm">
//           ₦{subTotal.toLocaleString()}
//         </p>
//       </div>
 
//       <hr className="border-t border-gray-300 my-12" />
 
//       {/* Logistics Support (If applicable) */}
//       <div className="flex items-start justify-between mb-8">
//         <div className="flex gap-4">
//           <img
//             src={logistics}
//             alt="Logistics"
//             className="max-w-[80px] w-full object-cover rounded-md"
//           />
//           <div className="flex flex-col gap-4">
//             <p className="font-medium text-lg">Logistics Support</p>
//             <p className="text-sm text-gray-500">Quantity: 1 trip</p>
//           </div>
//         </div>
//         <p className="font-medium text-sm">
//           ₦{logisticsPrice.toLocaleString()}
//         </p>
//       </div>
 
//       <div className="flex flex-wrap justify-between mb-8 ">
//         <img
//           src={pendingStamp}
//           alt="Pending"
//           className="max-w-[134px] w-full mb-4"
//         />
 
//         {/* Summary */}
//         <div className="flex flex-col gap-1 text-sm min-w-xs">
//           <div className="flex justify-between">
//             <span className="text-gray-500">Sub-total</span>
//             <span className="font-medium">₦{subTotal.toLocaleString()}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-gray-500">Shipping fee</span>
//             <span className="font-medium">₦{shipping.toLocaleString()}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-gray-500">VAT ({vatRate * 100}%)</span>
//             <span className="font-medium">₦{vat.toLocaleString()}</span>
//           </div>
//           <div className="flex justify-between border-t pt-2 font-bold text-lg">
//             <span>TOTAL</span>
//             <span>₦{total.toLocaleString()}</span>
//           </div>
//         </div>
//       </div>
 
//       <div className="flex flex-wrap gap-4 justify-end">
//         <Button className="w-[210px] bg-[#02402D] text-white rounded px-6 py-2">
//           Continue to Payment
//         </Button>
//         <Button className="w-[210px] bg-white border border-gray-400 text-gray-700 rounded px-6 py-2">
//           Cancel
//         </Button>
//       </div>
//     </div>
//   );
// }