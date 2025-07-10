import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const FacilityTransactionList = ({ transaction }) => {

  return (
    <div className="w-full border border-[#D0D5DD] rounded-[12px] lg:col-span-2 bg-white  overflow-x-auto overflow-y-hidden">
      <div className="h-16 p-4 flex justify-between items-center">
        <div className="">
          <h1 className=" text-[16px] font-[500] text-[#1D2739]">
            Transactions
          </h1>
          <p className="text-[11px] text-[#71717A]">
            Recent booking activities that has been carried in your account
          </p>
        </div>
        <div>
          <Link className="flex text-[#4F46E5] text-[10px] items-center gap-1">
            See all Transactions <ChevronRight width={12} height={12} />
          </Link>
        </div>
      </div>
      <table className="w-full divide-y divide-gray-200">
        <tbody className="bg-white divide-y divide-[#E4E4E7]">
          {transaction.map((item, i) => (
            <tr key={i} className="h-[77px]">
              <td>
                <div className="bg-green-100 rounded-full p-1 text-green-900 text-center text-[11px] font-semibold w-23 mx-2">
                  {item.status}
                </div>
              </td>
              <td className="p-4 whitespace-nowrap">
                <div className="flex gap-2 items-center">
                  <div>
                    <div className="text-[12px] font-medium text-gray-900">
                      {item.payment}
                    </div>
                    <div className="text-[12px] text-[#667185]">
                      {item.type}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-[12px]font-medium">
                <div className="text-[#101928] text-[12px]">{item.price}</div>
                <div className="text-[#667185] text-[12px]">{item.date}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex text-[12px] text-gray-500 leading-5 font-semibold rounded-full `}
                >
                  {item.facility}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacilityTransactionList;
