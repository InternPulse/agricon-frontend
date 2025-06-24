import React from "react";

const ExpenseReport = () => {
  return (
    <div className="expense border border-[#D0D5DD] rounded-xl w-full min-h-[294px] flex flex-col gap-3">
      <div className="head flex justify-between items-center p-4">
        <h2 className="font-semibold text-[#333333]">Expense Report</h2>
        <div className="text-xs font-semibold text-[#6b6b6b] space-x-4">
          <button className="border border-[#cccccc] rounded h-6 px-2 text-xs">
            6 months
          </button>
          <button>3 months</button>
          <button>30 Days</button>
          <button>7 Days</button>
        </div>
        <button className="border border-[#cccccc] rounded h-6 px-2 text-[10px] font-semibold">
          Export PDF
        </button>
      </div>
      <div className="chart">Chart...</div>
    </div>
  );
};

export default ExpenseReport;
