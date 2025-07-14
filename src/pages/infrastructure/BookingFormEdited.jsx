import Button from "../../components/infrastructure/ui/Button";
import CalendarPicker from "../../components/infrastructure/ui/CalendarPicker";

import { useActionState, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const labelCn =
  "placeholder:text-[#667185] placeholder:font-medium font-medium text-xl";
const inputCn =
  "border border-gray-400 rounded-lg text-gray-700 w-full max-w-[529px] p-4 py-3.5 focus:border-2 focus:border-[#02402D]";

export default function BookingFormEdited() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // facilityId and amount states are kept for consistency with form data,
  // even if they are readOnly and populated from localStorage
  const [facilityId, setFacilityId] = useState("");
  const [farmerId, setFarmerId] = useState(""); // This state is technically controlled, but value comes from localStorage and is readOnly
  const [amount, setAmount] = useState("");

  const navigate = useNavigate();

  // Retrieve initial values from localStorage for readOnly fields
  const initialFacId = localStorage.getItem("facilityId");
  const initialPrice = localStorage.getItem("pricePerDay");
  const farmerDetailsString = localStorage.getItem("farmerProfile");
  const userId = farmerDetailsString ? JSON.parse(farmerDetailsString) : null;
  const { id: initialFarmerId } = userId

  // Effect to set initial form values from localStorage when component mounts
  useEffect(() => {
    if (initialFacId) setFacilityId(initialFacId);
    if (initialFarmerId !== 'N/A') setFarmerId(initialFarmerId); 
    if (initialPrice) setAmount(initialPrice);
  }, [initialFacId, initialFarmerId, initialPrice]);


  async function signupAction(prevFormState, formData) {
    const currentFacilityId = formData.get("facilityId");
    const currentFarmerId = formData.get("farmerId"); 
    const currentAmount = formData.get("amount");
    const currentStartDate = formData.get("startDate");
    const currentEndDate = formData.get("endDate");

    const error = [];

    if (!currentFacilityId) error.push("Facility ID is required");
    if (!currentFarmerId) error.push("Farmer ID is required");
    if (!currentAmount) error.push("Amount is required");

    if (!currentStartDate || !currentEndDate) {
      error.push("Start and End Dates are required");
    } else if (new Date(currentEndDate) <= new Date(currentStartDate)) {
      error.push("End date must be after start date");
    }

    if (error.length > 0) {
      return {
        error,
        enteredValues: { facilityId: currentFacilityId, farmerId: currentFarmerId, startDate: currentStartDate, endDate: currentEndDate, amount: currentAmount },
      };
    }

    const payload = {
      facilityId: Number(currentFacilityId),
      farmerId: Number(currentFarmerId),
      startDate: new Date(currentStartDate).toISOString(),
      endDate: new Date(currentEndDate).toISOString(),
      amount: Number(currentAmount),
    };

    const token = localStorage.getItem('access_token');
    const url = "https://agricon-express-backend.onrender.com/api/v1/bookings/";

    let retries = 3;

    for (let attempt = 0; attempt < retries; attempt++) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          const bookingResponseData = await response.json();

          const bookingDetails = {
            bookingId: bookingResponseData.id,
            facilityId: currentFacilityId,
            farmerId: currentFarmerId, // Store the farmerId obtained from the form (which came from localStorage)
            startDate: currentStartDate,
            endDate: currentEndDate,
            amount: currentAmount,
            status: 'pending_payment',
          };
          localStorage.setItem('currentBookingDetails', JSON.stringify(bookingDetails));

          console.log("New booking details stored in localStorage:", bookingDetails);

          return { success: true, bookingId: bookingDetails.bookingId };
        }

        if (response.status === 429) {
          const retryAfter = response.headers.get("Retry-After");
          const waitTime = retryAfter
            ? parseInt(retryAfter) * 1000
            : 1000 * 2 ** attempt;
          await new Promise((resolve) => setTimeout(resolve, waitTime));
          continue;
        }

        const errorData = await response.json();
        throw new Error(errorData.message || "Booking failed");
      } catch (err) {
        if (attempt === retries - 1) {
          console.error("Booking error:", err.message);
          return {
            error: [err.message],
            enteredValues: { facilityId: currentFacilityId, farmerId: currentFarmerId, startDate: currentStartDate, endDate: currentEndDate, amount: currentAmount },
          };
        }
      }
    }
  }

  const [formState = {}, formAction, pending] = useActionState(signupAction, {
    errors: null,
  });

  // Redirect and reset form fields when the booking is successful
  useEffect(() => {
    if (formState.success) {
      // Clear form fields
      setFacilityId("");
      setFarmerId(""); // Reset farmerId state as well
      setAmount("");
      setStartDate(null);
      setEndDate(null);

      // Redirect to the booking summary page, passing bookingId as a query parameter
      navigate(`/farmer/facility/booking-summary?bookingId=${formState.bookingId}`);
    }
  }, [formState.success, formState.bookingId, navigate]);

  return (
    <div className="grid xl:grid-cols-2 gap-12">
      <form action={formAction} className="flex flex-col gap-4 mb-16">
        <h1 className="mb-12 font-semibold text-[2rem]">New Booking Edited</h1>

        <div className="flex flex-col gap-4">
          <label htmlFor="facilityId" className={labelCn}>
            Facility ID *
          </label>
          <input
            id="facilityId"
            type="number"
            name="facilityId"
            placeholder="Enter facility ID"
            className={inputCn}
            value={initialFacId} // Displays initial value from localStorage
            onChange={(e) => setFacilityId(e.target.value)} // State updates, but readOnly prevents user input
            required
            readOnly
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="farmerId" className={labelCn}>
            Farmer ID *
          </label>
          <input
            id="farmerId"
            type="number"
            name="farmerId"
            placeholder="Enter farmer ID"
            className={inputCn}
            value={initialFarmerId} // Displays initial value from localStorage
            onChange={(e) => setFarmerId(e.target.value)} // State updates, but readOnly prevents user input
            required
            readOnly
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="startDate" className={labelCn}>
            Start Date *
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="YYYY-MM-DD"
            className={inputCn}
            required
          />
        </div>
        <input
          type="hidden"
          name="startDate"
          value={startDate ? format(startDate, "yyyy-MM-dd") : ""}
        />

        <div className="flex flex-col gap-4">
          <label htmlFor="endDate" className={labelCn}>
            End Date *
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="YYYY-MM-DD"
            className={inputCn}
            required
          />
        </div>
        <input
          type="hidden"
          name="endDate"
          value={endDate ? format(endDate, "yyyy-MM-dd") : ""}
        />

        <div className="flex flex-col gap-4">
          <label htmlFor="amount" className={labelCn}>
            Amount *
          </label>
          <input
            id="amount"
            type="number"
            name="amount"
            placeholder="Enter amount"
            className={inputCn}
            value={initialPrice} // Displays initial value from localStorage
            onChange={(e) => setAmount(e.target.value)} // State updates, but readOnly prevents user input
            required
            readOnly
          />
        </div>

        {formState?.error ? (
          formState.error.map((err, i) => (
            <p key={i} className="text-sm text-red-600">
              {err}
            </p>
          ))
        ) : pending ? (
          <p className="text-sm text-green-600">Confirming...</p>
        ) : formState.success ? (
          <p className="text-sm text-green-600">Booking successful! Redirecting...</p>
        ) : null}

        <Button
          type="submit"
          className="flex justify-center items-center py-2.5 bg-[#02402D] hover:bg-[#03553F] transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-[#047D58] text-white w-full max-w-[529px] rounded-sm"
          disabled={pending}
        >
          {pending ? <ClipLoader /> : "Continue"}
        </Button>
      </form>

      <CalendarPicker className='hidden md:inline-block'/>
    </div>
  );
}