// import Button from "../../components/infrastructure/ui/Button";
// import CalendarPicker from "../../components/infrastructure/ui/CalendarPicker";

// import { useActionState, useState, useEffect, useCallback } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns";
 
 
// // --- Extracted API Call Logic ---
// async function submitBooking(payload, token) {
//   const url = "https://agricon-express-backend.onrender.com/api/v1/bookings/";
//   let retries = 3;
 
//   for (let attempt = 0; attempt < retries; attempt++) {
//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Token is used here
//         },
//         body: JSON.stringify(payload),
//       });
 
//       if (response.ok) {
//         const bookingData = await response.json();
//         return { success: true, bookingData };
//       }
 
//       if (response.status === 429) {
//         const retryAfter = response.headers.get("Retry-After");
//         const waitTime = retryAfter
//           ? parseInt(retryAfter) * 1000
//           : 1000 * Math.pow(2, attempt);
//         await new Promise((resolve) => setTimeout(resolve, waitTime));
//         continue;
//       }
//         // Handle other errors
//       const errorText = await response.text();
//       console.error("Booking error:", errorText);
//       console.error("Response status:", response.status);
//       console.error("Response headers:", response.headers);
//         console.error("Payload:", JSON.stringify(payload, null, 2));    
       
 
//       const errorData = await response.json();
//       throw new Error(errorData.message || "Booking failed");
//     } catch (err) {
//       if (attempt === retries - 1) {
//         console.error("Booking error:", err.message);
//         throw err;
//       }
//     }
//   }
//   throw new Error("Maximum retries reached");
// }
 
 
// const FormInput = ({ label, id, type, placeholder, value, onChange, required, inputCn, labelCn }) => (
//   <div className="flex flex-col gap-4">
//     <label htmlFor={id} className={labelCn}>
//       {label} *
//     </label>
//     <input
//       id={id}
//       type={type}
//       name={id}
//       placeholder={placeholder}
//       className={inputCn}
//       value={value}
//       onChange={onChange}
//       required={required}
//     />
//   </div>
// );
 
// const CalendarPicker = ({ selectedDate, onDateSelect }) => {
//     const [currentMonth, setCurrentMonth] = useState(new Date());
   
//     const daysInMonth = useMemo(() => {
//       const start = startOfMonth(currentMonth);
//       const end = endOfMonth(currentMonth);
//       const days = eachDayOfInterval({ start, end });
   
//       const firstDayOfWeek = start.getDay();
//       const leadingEmptyDays = Array.from({ length: firstDayOfWeek }, (_, i) => null);
   
//       const totalCells = leadingEmptyDays.length + days.length;
//       const trailingEmptyDays = Array.from({ length: (7 - (totalCells % 7)) % 7 }, (_, i) => null);
   
//       return [...leadingEmptyDays, ...days, ...trailingEmptyDays];
//     }, [currentMonth]);
   
//     const goToPreviousMonth = () => {
//       setCurrentMonth(subMonths(currentMonth, 1));
//     };
   
//     const goToNextMonth = () => {
//       setCurrentMonth(addMonths(currentMonth, 1));
//     };
   
//     return (
//       <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 mt-2">
//         <div className="flex justify-between items-center mb-4">
//           <Button onClick={goToPreviousMonth} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">
//             &lt;
//           </Button>
//           <span className="font-semibold text-lg">
//             {format(currentMonth, "MMMM yyyy")}
//           </span>
//           <Button onClick={goToNextMonth} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">
//             &gt;
//           </Button>
//         </div>
//         <div className="grid grid-cols-7 gap-1 text-center text-sm">
//           {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
//             <div key={day} className="font-medium text-gray-600">{day}</div>
//           ))}
//           {daysInMonth.map((day, index) => (
//             <div
//               key={index}
//               className={`p-2 rounded-full cursor-pointer
//                 ${day ? 'hover:bg-blue-200' : 'cursor-default'}
//                 ${day && selectedDate && isSameDay(day, selectedDate) ? 'bg-blue-500 text-white' : ''}
//                 ${day && !isSameDay(day, currentMonth) && 'text-gray-400'}
//               `}
//               onClick={() => day && onDateSelect(day)}
//             >
//               {day ? format(day, 'd') : ''}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const DateInput = ({ label, id, selectedDate, setDate, inputCn, labelCn }) => {
//     const [showCalendar, setShowCalendar] = useState(false);
   
//     const handleDateChange = (date) => {
//       setDate(date);
//       setShowCalendar(false); // Close calendar after selection
//     };
   
//     return (
//       <div className="flex flex-col gap-4 relative">
//         <label htmlFor={id} className={labelCn}>
//           {label} *
//         </label>
//         <div className="relative">
//           <input
//             id={id}
//             type="text" // Changed to text to display formatted date
//             name={id}
//             placeholder="YYYY-MM-DD"
//             className={inputCn}
//             value={selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""}
//             readOnly // Make it read-only as date is picked from calendar
//             onClick={() => setShowCalendar(!showCalendar)} // Toggle calendar on click
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowCalendar(!showCalendar)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//           >
//             {/* Simple calendar icon using SVG */}
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//             </svg>
//           </button>
//         </div>
//         {showCalendar && (
//           <CalendarPicker selectedDate={selectedDate} onDateSelect={handleDateChange} />
//         )}
//       </div>
//     );
//   };
 
// // --- Main BookingForm Component ---
// export default function BookingForm({ onBookingConfirmed }) { 
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   // Centralized state for form inputs
//   const [formData, setFormData] = useState({
//     facilityId: "",
//     farmerId: "",
//     amount: "",
//   });
 
 
//   const handleInputChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   }, []);
 
//   // Form validation and action handler
//   const bookingAction = useCallback(async (prevFormState, form) => {
//     const { facilityId, farmerId, amount } = formData;
//     const errors = [];
//     const payload = {};
//     const enteredValues = { ...formData, startDate: form.get("startDate"), endDate: form.get("endDate") };
 
//     // Validation
//     if (!facilityId || isNaN(Number(facilityId))) errors.push("Facility ID is required and must be a number");
//     if (!farmerId || isNaN(Number(farmerId))) errors.push("Farmer ID is required and must be a number");
//     if (!amount || isNaN(Number(amount))) errors.push("Amount is required and must be a number");
 
//     const startDateValue = form.get("startDate");
//     const endDateValue = form.get("endDate");
 
//     if (!startDateValue || !endDateValue) {
//       errors.push("Start and End Dates are required");
//     } else if (new Date(endDateValue) <= new Date(startDateValue)) {
//       errors.push("End date must be after start date");
//     }
 
//     if (errors.length > 0) {
//       return { error: errors, enteredValues };
//     }
 
//     // Prepare payload for API
//     payload.facilityId = Number(facilityId);
//     payload.farmerId = Number(farmerId);
//     payload.amount = Number(amount);
//     payload.startDate = new Date(startDateValue).toISOString();
//     payload.endDate = new Date(endDateValue).toISOString();
 
//     // --- Token declaration and retrieval ---
//     const token = localStorage.getItem("userAuthToken");
 
//     if (!token) {
//         return { error: ["Authentication required. Please log in."], enteredValues };
//     }
    
 
//     // API Call
//     try {
//       const result = await submitBooking(payload, token);
//       // Pass the confirmed booking data to the parent component
//       return { success: result.success, confirmedBooking: payload };
//     } catch (err) {
//       return { error: [err.message], enteredValues };
//     }
//   }, [formData]);
 
//   const [formState, formAction, pending] = useActionState(bookingAction, { errors: null });
 
 
//   useEffect(() => {
//     if (formState.success && formState.confirmedBooking) {
//       // Call the prop function to pass confirmed booking data to parent
//       onBookingConfirmed(formState.confirmedBooking);
 
//       // Reset form fields
//       setFormData({ facilityId: "", farmerId: "", amount: "" });
//       setStartDate(null);
//       setEndDate(null);
//     }
//   }, [formState.success, formState.confirmedBooking, onBookingConfirmed]); 

//   // CSS classes
//   const labelCn =
//     "placeholder:text-[#667185] placeholder:font-medium font-medium text-xl";
//   const inputCn =
//     "border border-gray-400 rounded-lg text-gray-700 w-full max-w-[529px] p-4 py-3.5 focus:border-2 focus:border-[#02402D]";
 
//   return (
//     <div className="grid xl:grid-cols-2 gap-12">
//       <form action={formAction} className="flex flex-col gap-4 mb-16">
//         <h1 className="mb-12 font-semibold text-[2rem]">New Booking</h1>
 
//         <FormInput
//           label="Facility ID"
//           id="facilityId"
//           type="number"
//           placeholder="Enter facility ID"
//           value={formData.facilityId}
//           onChange={handleInputChange}
//           required
//           inputCn={inputCn}
//           labelCn={labelCn}
//         />
       
//         <FormInput
//           label="Farmer ID"
//           id="farmerId"
//           type="number"
//           placeholder="Enter farmer ID"
//           value={formData.farmerId}
//           onChange={handleInputChange}
//           required
//           inputCn={inputCn}
//           labelCn={labelCn}
//         />
       
//         <DateInput
//           label="Start Date"
//           id="startDate"
//           selectedDate={startDate}
//           setDate={setStartDate}
//           inputCn={inputCn}
//           labelCn={labelCn}
//         />
 
//         <DateInput
//           label="End Date"
//           id="endDate"
//           selectedDate={endDate}
//           setDate={setEndDate}
//           inputCn={inputCn}
//           labelCn={labelCn}
//         />
 
//         <FormInput
//           label="Amount"
//           id="amount"
//           type="number"
//           placeholder="Enter amount"
//           value={formData.amount}
//           onChange={handleInputChange}
//           required
//           inputCn={inputCn}
//           labelCn={labelCn}
//         />
 
//         {/* Status and Error Messages */}
//         {formState?.error && (
//           formState.error.map((err, i) => (
//             <p key={i} className="text-sm text-red-600">
//               {err}
//             </p>
//           ))
//         )}
 
//         {pending && <p className="text-sm text-green-600">Confirming...</p>}
//         {formState.success && <p className="text-sm text-green-600">Booking successful! Redirecting to summary...</p>}
 
//         <button
//           type="submit"
//           className="flex justify-center items-center py-2.5 bg-[#02402D] hover:bg-[#03553F] transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-[#047D58] text-white w-full max-w-[529px] rounded-sm"
//           disabled={pending}
//         >
//           {pending ? "Confirming..." : "Confirm Booking"}
//         </button>
//       </form>
//       <CalendarPicker/>
//     </div>
//   );
// }