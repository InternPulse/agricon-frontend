import React from "react";
import { FaBook, FaUser } from "react-icons/fa6";
import { assets } from "../assets/assets";
const Transaction = ({ title, hvalue1, hvalue2, details }) => {
  return (
    <div className="w-full border border-[#D0D5DD] rounded-[12px] lg:col-span-2 bg-white  overflow-x-auto">
      <table className="w-full divide-y divide-gray-200">
        <thead className="h-16">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-[24px] font-[500] text-[#1D2739]"
            >
              {title}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-[16px] font-medium text-gray-700"
            >
              {hvalue1}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-[16px] font-medium text-gray-700"
            >
              {hvalue2}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-[16px] font-medium text-gray-700"
            >
              ...
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {details.map((item, i) => (
            <tr key={i}>
              <td className="p-4 whitespace-nowrap">
                <div className="flex gap-2 items-center">
                  <div
                    className={`flex items-center justify-center bg-[#eeeeee] h-8 w-8 text-sm text-[#222222] rounded ${
                      item.size ? "rounded-full" : ""
                    }`}
                  >
                    {item.img ? <img src={item.img} alt="pic" /> : item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {item.title || item.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.date || "owner"}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 font-medium">
                {item.price || item.facility}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex text-xs leading-5 font-semibold rounded-full  ${
                    item.status === "Completed" || item.payment
                      ? "text-green-500"
                      : item.status === "Pending"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {item.status || item.payment}
                </span>
                <div className="text-[10px] text-gray-500 mt-1">{item.id}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
