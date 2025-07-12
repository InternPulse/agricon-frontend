import React, { useCallback, useEffect, useState } from "react";
import { FaBook, FaUser } from "react-icons/fa6";
import { getFarmerTransaction } from "../../actions/getFarmerTransaction";
import EmptyFarmerTransaction from "./EmptyFarmerTransaction";


const Transaction = ({ userId }) => {
  const [transaction, setTransaction] = useState([]);
  
  
    const fetchAllTransactions = useCallback(async () => {
      try {
        const data = await getFarmerTransaction(userId);
        console.log(data)
        setTransaction(data?.transaction || []);
      } catch (error) {
        console.error("Error getting transaction:", error);
        setTransaction([]); 
      } 
    }, [userId]);
  
  
    useEffect(() => {
      fetchAllTransactions();
    }, [fetchAllTransactions]);

  return (
    <div className="w-full border border-[#D0D5DD] rounded-[12px] lg:col-span-2 bg-white  overflow-x-auto">
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
              {transaction.hvalue1}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-[16px] font-medium text-gray-700"
            >
              {transaction.hvalue2}
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-[16px] font-medium text-gray-700"
            >
              ...
            </th>
          </tr>
        </thead>
        {transaction.length > 0 ? (
        <tbody className="bg-white divide-y divide-gray-200">
            {transaction.map((item, i) => (
              <tr key={i}>
                <td className="p-4 whitespace-nowrap">
                  <div className="flex gap-2 items-center">
                    <div
                      className={`flex items-center justify-center bg-[#eeeeee] h-8 w-8 text-sm text-[#222222] rounded ${transaction.size ? "rounded-full" : ""
                        }`}
                    >
                      {transaction.img ? <img src={transaction.img} alt="pic" /> : transaction.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {transaction.title || transaction.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {transaction.date || "owner"}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-700 font-medium">
                  {transaction.price || transaction.facility}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex text-xs leading-5 font-semibold rounded-full  ${transaction.status === "Completed" || transaction.payment
                        ? "text-green-500"
                        : item.status === "Pending"
                          ? "text-yellow-500"
                          : "text-red-500"
                      }`}
                  >
                    {transaction.status || transaction.payment}
                  </span>
                  <div className="text-[10px] text-gray-500 mt-1">{transaction.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">...</td>
              </tr>
            ))}
        </tbody>
      ) : (
        <EmptyFarmerTransaction />
      )}
      </table>
    </div>
  );
};

export default Transaction;
