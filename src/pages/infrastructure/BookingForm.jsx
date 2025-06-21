import Button from "../../components/infrastructure/ui/Button";
import CalendarPicker from "../../components/infrastructure/ui/CalendarPicker";

import { useActionState, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const labelCn =
  "placeholder:text-[#667185] placeholder:font-medium font-medium text-xl";
const inputCn =
  "border border-gray-400 rounded-lg text-gray-700 w-full max-w-[529px] p-4 py-3.5 focus:border-2 focus:border-[#02402D]";

export default function BookingForm() {
  const [startDate, setStartDate] = useState(null);

  async function signupAction(prevFormState, formData) {
    const name = formData.get("name");
    const date = formData.get("date");
    const duration = formData.get("duration");
    const requirement = formData.get("requirement");

    let error = [];

    if (!date) {
      error.push("Please enter a date");
    }

    if (error.length > 0) {
      return {
        error,
        enteredValues: { name, date, duration, requirement },
      };
    }

    try {
      const response = await fetch("http://localhost:4000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, date, duration, requirement }),
      });

      if (!response.ok) {
        throw new Error("Failed to post booking data");
      }
      return { success: true };
    } catch (error) {
      return {
        error: [error.message],
        enteredValues: { name, date, duration, requirement },
      };
    }
  }

  //   http://localhost:4000/bookings

  const [formState, formAction, pending] = useActionState(signupAction, {
    errors: null,
  }); //This is just a form related state. formAction receives the data from signUpAction and updates formState with it.
  return (
    <div className="grid xl:grid-cols-2 gap-12">
      <form action={formAction} className="flex flex-col gap-4 mb-16">
        <h1 className="mb-12 font-semibold text-[2rem]">New Booking</h1>
        <div className="flex flex-col gap-4">
          <label htmlFor="name" className={labelCn}>
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            className={inputCn}
            defaultValue={formState.enteredValues?.name}
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="date" className={labelCn}>
            Date & Time *
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yy"
            placeholderText="dd/mm/yy"
            className={inputCn}
          />
        </div>
        <input
          type="hidden"
          name="date"
          value={startDate ? format(startDate, "dd/MM/yy") : ""}
        />

        <div className="flex flex-col gap-4">
          <label htmlFor="duration" className={labelCn}>
            Duration *
          </label>
          <input
            id="duration"
            type="number"
            name="duration"
            placeholder="Enter duration hours"
            className={inputCn}
            defaultValue={formState.enteredValues?.duration}
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="requirement" className={labelCn}>
            Special Requirement
          </label>
          <textarea
            id="requirement"
            rows="4"
            cols="50"
            name="requirement"
            placeholder="Enter any special requirements"
            className={inputCn}
            defaultValue={formState.enteredValues?.requirement}
          />
        </div>
        {formState.error ? (
          formState.error.map((err, idx) => (
            <p key={idx} className="text-sm text-red-600">
              {err}
            </p>
          ))
        ) : pending ? (
          <p className="text-sm text-green-600">Confirming...</p>
        ) : formState.success ? (
          <p className="text-sm text-green-600">Booking successful!</p>
        ) : null}

        <Link to="/facility/booking-summary" className="flex justify-center items-center py-2.5 bg-[#02402D] hover:bg-[#03553F] transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-[#047D58] text-white w-full max-w-[529px] rounded-sm">
          Confirm Booking
        </Link>
      </form>

      <CalendarPicker />
    </div>
  );
}
