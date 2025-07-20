import React, { useCallback, useEffect, useState } from "react";
import { FaBook, FaUser } from "react-icons/fa6";
import { getFarmerTransaction } from "../../actions/getFarmerTransaction";
import EmptyFarmerTransaction from "./EmptyFarmerTransaction";

const Transaction = ({ userId }) => {
  const [transaction, setTransaction] = useState([]);

  const fetchAllTransactions = useCallback(async () => {
    try {
      const data = await getFarmerTransaction(userId);
      console.log(data);
      setTransaction(data?.transaction || []);
    } catch (error) {
      console.error("Error getting transaction:", error);
      setTransaction([]);
    }
  }, [userId]);

  useEffect(() => {
    fetchAllTransactions();
  }, [fetchAllTransactions]);

  const tableHeaders = [
    { key: "facility", label: "Facility" },
    { key: "price", label: "Amount" },
    { key: "status", label: "Status" },
    { key: "details", label: "" },
  ];

  return (
    <div className="w-full border border-[#D0D5DD] rounded-md bg-white">
      {transaction.length > 0 ? (
        <table className="w-full divide-y divide-gray-200">
          <thead className="h-16">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[24px] font-[500] text-[#1D2739]"
              >
                Facility
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-[16px] font-medium text-gray-700"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[16px] font-medium text-gray-700"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-[16px] font-medium text-gray-700"
              >
                Details
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transaction.map((item, i) => (
              <tr key={item.id || i}>
                <td className="p-4 whitespace-nowrap">
                  <div className="flex gap-2 items-center">
                    <div
                      className={`flex items-center justify-center bg-[#eeeeee] h-8 w-8 text-sm text-[#222222] rounded ${
                        item.size ? "rounded-full" : ""
                      }`}
                    >
                      {item.img ? (
                        <img
                          src={item.img}
                          alt="pic"
                          className="w-full h-full object-cover rounded-inherit"
                        />
                      ) : item.icon ? (
                        React.createElement(item.icon, { size: 20 })
                      ) : (
                        <FaBook />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {item.title || item.name || "N/A Facility"}
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.date || "N/A Date"}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 font-medium">
                  ₦
                  {item.price?.toLocaleString() ||
                    item.amount?.toLocaleString() ||
                    "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.status === "Completed" ||
                      item.payment === "Completed"
                        ? "text-green-500"
                        : item.status === "Pending" ||
                          item.payment === "Pending"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.status || item.payment || "N/A Status"}
                  </span>
                  <div className="text-[10px] text-gray-500 mt-1">
                    ID: {item.id || "N/A"}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">...</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // empty state of no transaction
        <EmptyFarmerTransaction />
      )}
    </div>
  );
};

export default Transaction;
