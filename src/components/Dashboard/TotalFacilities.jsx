import { TrendingDown } from "lucide-react";
import { PiCalendarCheckBold } from "react-icons/pi";
import { TbDots } from "react-icons/tb";

const TotalFacilities = () => {
  return (
    <div className="self-start bg-white w-[226px] h-[182px] p-6 rounded-xl border border-[#D0D5DD] flex flex-col justify-between">
      <div className="container space-y-[32px] w-[194px] h-[134px]">
        <div className="top flex flex-col h-[82px] w-full gap-[24px]">
          <div className="h-[24px] w-full flex justify-between items-center">
            <h3 className="text-[14px] font-medium text-gray-700 mb-2">
              Total Facilities
            </h3>
            <div className="pr-3 pb-1">
              <TbDots />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4 h-[34px]">
            <div className="gap-[2px] flex items-baseline">
              <PiCalendarCheckBold className="self-start mt-1" />
              <span className="text-[28px] font-bold text-gray-900">32</span>
              <i className="text-[14px] font-normal text-[#667185]">
                available
              </i>
            </div>
          </div>
        </div>
        <div className="bottom items-baseline h-[20px] text-[12px] gap-1 flex items-center">
          <div className="w-5 h-5 flex items-center justify-center text-red-600">
            <TrendingDown />
          </div>
          <div className="flex items-center gap-[2px]">
            <span className="flex text-[12px] items-center gap-1 font-semibold text-red-600 mr-1">
              Down 17%
            </span>
            <span>Month-over-month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalFacilities;
