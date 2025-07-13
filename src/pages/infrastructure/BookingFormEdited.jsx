import Button from "../../components/infrastructure/ui/Button";
import CalendarPicker from "../../components/infrastructure/ui/CalendarPicker";

import { useActionState, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const labelCn =
  "placeholder:text-[#667185] placeholder:font-medium font-medium text-xl";
const inputCn =
  "border border-gray-400 rounded-lg text-gray-700 w-full max-w-[529px] p-4 py-3.5 focus:border-2 focus:border-[#02402D]";

export default function BookingFormEdited() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [facilityId, setFacilityId] = useState("");
  const [farmerId, setFarmerId] = useState("");
  const [amount, setAmount] = useState("");

  async function signupAction(prevFormState, formData) {
    const facilityId = formData.get("facilityId");
    const farmerId = formData.get("farmerId");
    const amount = formData.get("amount");

    const error = [];

    if (!facilityId) error.push("Facility ID is required");
    if (!farmerId) error.push("Farmer ID is required");
    if (!amount) error.push("Amount is required");

    const startDate = formData.get("startDate");
    const endDate = formData.get("endDate");

    if (!startDate || !endDate) {
      error.push("Start and End Dates are required");
    } else if (new Date(endDate) <= new Date(startDate)) {
      error.push("End date must be after start date");
    }

    if (error.length > 0) {
      return {
        error,
        enteredValues: { facilityId, farmerId, startDate, endDate, amount },
      };
    }

    const payload = {
      facilityId: Number(facilityId),
      farmerId: Number(farmerId),
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
      amount: Number(amount),
    };

    const token =
      ""; // Replace with your actual token retrieval logic
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
          return { success: true };
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
            enteredValues: { facilityId, farmerId, startDate, endDate, amount },
          };
        }
      }
    }
  }

  const [formState = {}, formAction, pending] = useActionState(signupAction, {
    errors: null,
  });

  // Reset form fields when the booking is successful
  useEffect(() => {
    if (formState.success) {
      setFacilityId("");
      setFarmerId("");
      setAmount("");
      setStartDate(null);
      setEndDate(null);
    }
  }, [formState.success]);

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
            value={facilityId}
            onChange={(e) => setFacilityId(e.target.value)}
            required
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
            value={farmerId}
            onChange={(e) => setFarmerId(e.target.value)}
            required
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
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
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
          <p className="text-sm text-green-600">Booking successful!</p>
        ) : null}

        <Button
          type="submit"
          className="flex justify-center items-center py-2.5 bg-[#02402D] hover:bg-[#03553F] transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-[#047D58] text-white w-full max-w-[529px] rounded-sm"
          disabled={pending}
        >
          {pending ? "Confirming..." : "Confirm Booking"}
        </Button>
      </form>

      <CalendarPicker />
    </div>
  );
}
