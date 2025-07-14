import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";

const Stats = () => {
  return (
    <div className="stats flex flex-wrap gap-2">
      <div className="flex flex-grow p-2 flex-col border border-[#E4E4E7]  rounded-lg px-4 py-2 gap-2 max-w-5/10 sm:max-w-19/20 sm:min-w-50">
        <div className="text-[#667185] text-[12px]">TOTAL BOOKED</div>
        <div className="flex justify-between items-center">
          <p className="text-[24px] font-bold">0</p>
          <p className="text-[12px] text-[#22C55E] flex items-center font-semibold">
            + 36%{" "}
            <span>
              <ArrowUp className="w-[12px]" />
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-grow p-2 flex-col border border-[#E4E4E7]  rounded-lg px-4 py-2 gap-2 max-w-5/10 sm:max-w-19/20 sm:min-w-50">
        <div className="text-[#667185] text-[12px]">TODAY’S BOOKING</div>
        <div className="flex justify-between items-center">
          <p className="text-[24px] font-bold">0</p>
          <p className="text-[12px] text-[#EF4444] flex items-center font-semibold">
            - 14%{" "}
            <span>
              <ArrowDown className="w-[12px]" />
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-grow p-2 flex-col border border-[#E4E4E7]  rounded-lg px-4 py-2 gap-2 max-w-5/10 sm:max-w-19/20 sm:min-w-50">
        <div className="text-[#667185] text-[12px]">PENDING BOOKINGS</div>
        <div className="flex justify-between items-center">
          <p className="text-[24px] font-bold">0</p>
          <p className="text-[12px] text-[#22C55E] flex items-center font-semibold">
            + 36%{" "}
            <span>
              <ArrowUp className="w-[12px]" />
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-grow p-2 flex-col border border-[#E4E4E7]  rounded-lg px-4 py-2 gap-2 max-w-5/10 sm:max-w-19/20 sm:min-w-50 md:max-w-70">
        <div className="text-[#667185] text-[12px]">ACTIVE FACILITIES</div>
        <div className="flex justify-between items-center">
          <p className="text-[24px] font-bold">0</p>
          <p className="text-[12px] text-[#22C55E] flex items-center font-semibold">
            + 25%{" "}
            <span>
              <ArrowUp className="w-[12px]" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
