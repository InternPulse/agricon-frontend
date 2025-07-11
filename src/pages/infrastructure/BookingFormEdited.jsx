
import Button from "../../components/infrastructure/ui/Button";
import CalendarPicker from "../../components/infrastructure/ui/CalendarPicker";

import { useActionState, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const labelCn =
  "placeholder:text-[#667185] placeholder:font-medium font-medium text-xl";
const inputCn =
  "border border-gray-400 rounded-lg text-gray-700 w-full max-w-[529px] p-4 py-3.5 focus:border-2 focus:border-[#02402D]";

export default function BookingForm() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [facilityId, setFacilityId] = useState("");
  const [farmerId, setFarmerId] = useState("");
  const [amount, setAmount] = useState("");

  async function signupAction(prevFormState, formData) {
    const facilityId = formData.get("facilityId");
    const farmerId = formData.get("farmerId");
    const amount = formData.get("amount");

    if (
      !startDate ||
      !endDate ||
      isNaN(startDate.getTime()) ||
      isNaN(endDate.getTime())
    ) {
      return {
        error: ["Please select valid start and end dates"],
        enteredValues: {
          facilityId,
          farmerId,
          amount,
        },
      };
    }

    if (endDate <= startDate) {
      return {
        error: ["End date must be after start date"],
        enteredValues: {
          facilityId,
          farmerId,
          amount,
        },
      };
    }

    const isoStartDate = startDate.toISOString();
    const isoEndDate = endDate.toISOString();

    let error = [];

    if (!facilityId) error.push("Facility ID is required");
    if (!farmerId) error.push("Farmer ID is required");
    if (!amount) error.push("Amount is required");

    if (error.length > 0) {
      return {
        error,
        enteredValues: {
          facilityId,
          farmerId,
          startDate: isoStartDate,
          endDate: isoEndDate,
          amount,
        },
      };
    }

    const token =
      "";

    try {
      const response = await fetch(
        "https://agricon-express-backend.onrender.com/api/v1/bookings/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            facilityId: Number(facilityId),
            farmerId: Number(farmerId),
            startDate: isoStartDate,
            endDate: isoEndDate,
            amount: Number(amount),
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to post booking data");
      }
      return { success: true };
    } catch (error) {
      console.error("Booking error:", error);
      return {
        error: [error.message],
        enteredValues: {
          facilityId,
          farmerId,
          startDate: isoStartDate,
          endDate: isoEndDate,
          amount,
        },
      };
    }
  }

  const [formState, formAction, pending] = useActionState(signupAction, {
    errors: null,
  });

  return (
    <div className="grid xl:grid-cols-2 gap-12">
      <form action={formAction} className="flex flex-col gap-4 mb-16">
        <h1 className="mb-12 font-semibold text-[2rem]">New Booking</h1>

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

        {formState.error ? (
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
