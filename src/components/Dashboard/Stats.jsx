import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

const Stats = () => {
  return (
    <div className="stats grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
      <Stat title="TOTAL BOOKED" value={0} change={36} state="+" />
      <Stat title="TODAY’S BOOKING" value={0} change={14} state="-" />
      <Stat title="PENDING BOOKINGS" value={0} change={36} state="+" />
      <Stat title="ACTIVE FACILITIES" value={0} change={25} state="+" />
    </div>
  );
};

export default Stats;

const Stat = ({ title, value, change, state }) => {
  return (
    <div className="flex flex-grow p-2 flex-col border border-[#E4E4E7]  rounded-lg px-4 py-2 gap-2">
      <div className="text-[#667185] text-[12px]">{title}</div>
      <div className="flex justify-between items-center">
        <p className="text-[24px] font-bold">{value}</p>
        <p
          className={`text-[12px] ${
            state === "+" ? "text-[#22C55E]" : "text-[#EF4444]"
          } flex items-center font-semibold`}
        >
          {state} {change}%{" "}
          <span>
            {state === "+" ? (
              <ArrowUp className="w-[12px]" />
            ) : (
              <ArrowDown className="w-[12px]" />
            )}
          </span>
        </p>
      </div>
    </div>
  );
};
