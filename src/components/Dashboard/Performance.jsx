import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

export default function TotalViewPerformanceCard() {
  const data = [
    { name: "Total Earnings", value: 33, color: "#95BF33" },
    { name: "Saved Produce", value: 27, color: "#B67B01" },
    { name: "Bookings", value: 40, color: "#02402D" },
  ];

  const COLORS = [data[0].color, data[1].color, data[2].color];

  const totalCount = "396K";

  // Custom Tooltip for the Pie Chart
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-300 rounded-md shadow-sm text-xs">
          <p className="font-semibold text-gray-800">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-[#D0D5DD] flex flex-col gap-5 items-start justify-start">
      <div className="flex justify-between items-center">
        <h3 className="text-[15px] max-w[100px] font-semibold text-gray-900">
          Total view performance
        </h3>

        {/* Legend at the top right, as per image */}
        <div className="w-[115px]">
          {" "}
          {/* Adjusted margin to align with top-right of chart area */}
          <ul className="text-[10px] text-gray-600 flex flex-col gap-[6px]">
            {data.map((entry, index) => (
              <li
                key={`legend-${index}`}
                className="flex items-center gap-[1px]"
              >
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: COLORS[index] }}
                ></div>
                <span className="text-[10px] font-medium">{entry.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative w-full h-48 flex items-center justify-center">
        {" "}
        {/* Adjusted height */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={45} // Size of the inner hole for donut
              outerRadius={70} // Outer size of the donut
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
              isAnimationActive={false} // Disable animation for static dummy data
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        {/* Central text "Total count 396K" */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center">
          <span className="text-[12px] text-gray-500">Total count</span>
          <span className="text-[22px] font-bold text-gray-900 leading-none">
            {totalCount}
          </span>
        </div>
      </div>
    </div>
  );
}
