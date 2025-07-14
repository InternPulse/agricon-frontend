import { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CalendarPicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(
    format(new Date(), "hh:mm a")
  );

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const resetDateTime = () => {
    const now = new Date();
    setSelectedDate(now);
    setSelectedTime(format(now, "hh:mm a"));
    setCurrentMonth(now);
  };

  const renderHeader = () => (
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm font-semibold text-gray-600">
        {format(currentMonth, "MMMM yyyy")}
      </span>
      <div className="flex items-center gap-2">
        <FiChevronLeft onClick={prevMonth} className="cursor-pointer" />
        <FiChevronRight onClick={nextMonth} className="cursor-pointer" />
      </div>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const date = new Date();
    const dayNames = ["S", "M", "T", "W", "T", "F", "S"];
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center text-xs text-gray-400">
          {dayNames[i]}
        </div>
      );
    }
    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "d");
        const cloneDay = day;

        days.push(
          <div
            key={day}
            className={`text-center py-1 text-sm rounded-full cursor-pointer
              ${!isSameMonth(day, monthStart) ? "text-gray-300" : ""}
              ${
                isSameDay(day, selectedDate)
                  ? "bg-[#E4EBFF] text-[#194BFB]"
                  : "hover:bg-gray-100"
              }
            `}
            onClick={() => setSelectedDate(cloneDay)}
          >
            {formattedDate}
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(<div className="grid grid-cols-7">{days}</div>);
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="hidden md:inline-block grid xl:grid-cols-2 gap-8 rounded-xl border p-6 h-max w-full shadow-sm">
      <div>
        <p className="font-medium text-gray-700 mb-2">Pick time & date</p>
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>

      <div className="mt-4 flex flex-col gap-30">
        <div className="flex flex-col gap-8">
          <input
            type="text"
            value={format(selectedDate, "MMMM d, yyyy")}
            readOnly
            className="w-full border rounded-md px-3 py-2 text-sm text-gray-700"
          />
          <input
            type="text"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full border rounded-md px-3 py-2 text-sm text-gray-700"
          />
        </div>

        <div className="flex items-center justify-between mt-2">
          <button className="text-gray-500 text-sm hover:underline">
            Cancel
          </button>
          <button
            onClick={resetDateTime}
            className="px-3 py-1 text-sm bg-[#80BF80] text-white rounded-full hover:bg-green-100"
          >
            Reset date & time
          </button>
        </div>
      </div>
    </div>
  );
}
