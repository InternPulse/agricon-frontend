import React, { useContext, useState } from "react";
import { assets } from "../../../assets/assets";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { FilterContext } from "./IsNotification";

export default function Cards({ data, showModal, handleDelete, setShowModal }) {
  const [state, setState] = useContext(FilterContext);
  return (
    <div>
      {/* Notification Cards */}
      <div className="grid grid-cols-1 gap-6">
        {data.map((data) => {
          return state === "Unread" ? (
            data.isRead && (
              <div
                key={data.id}
                className="bg-[#A7E0CF1A] p-4 lg:p-5 rounded-md"
              >
                <div className="flex items-start lg:items-center  space-x-4 ">
                  {/* logo */}
                  <div>
                    <div
                      className={`size-10 rounded-full flex  items-center justify-center ${
                        data.type === "error"
                          ? "bg-[#E2737333]"
                          : "bg-[#C1E27366]"
                      }`}
                    >
                      <img
                        src={
                          data.type === "booking"
                            ? assets.iconPark
                            : data.type === "error"
                            ? assets.polygon
                            : data.type === "welcome"
                            ? assets.wave
                            : ""
                        }
                        alt="icon"
                        className="size-5"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:flex-1/2 lg:justify-between lg:items-center">
                    {/* content */}
                    <div className="space-y-1">
                      <p className="text-md font-semibold  ">{data.title}</p>
                      <p className="text-sm font-light">{data.message}</p>
                      <p className="text-sm font-light mb-2">
                        {data.createdAt}
                      </p>
                    </div>

                    {/* buttons */}
                    <div className="space-x-4 lg:space-x-2 lg:flex lg:items-center justify-center ">
                      <button className="bg-deep-green p-2 text-xs text-white rounded-md font-semibold lg:w-23">
                        {data.type === "booking"
                          ? "View Receipt"
                          : "View Details"}
                      </button>
                      <button
                        className="border border-vibrant-red p-2 text-xs text-vibrant-red rounded-md font-semibold"
                        onClick={() => setShowModal(true)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          ) : (
            <div key={data.id} className="bg-[#A7E0CF1A] p-4 lg:p-5 rounded-md">
              <div className="flex items-start lg:items-center  space-x-4 ">
                {/* logo */}
                <div>
                  <div
                    className={`size-10 rounded-full flex  items-center justify-center ${
                      data.type === "error"
                        ? "bg-[#E2737333]"
                        : "bg-[#C1E27366]"
                    }`}
                  >
                    <img
                      src={
                        data.type === "booking"
                          ? assets.iconPark
                          : data.type === "error"
                          ? assets.polygon
                          : data.type === "welcome"
                          ? assets.wave
                          : ""
                      }
                      alt="icon"
                      className="size-5"
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:flex-1/2 lg:justify-between lg:items-center">
                  {/* content */}
                  <div className="space-y-1">
                    <p className="text-md font-semibold  ">{data.title}</p>
                    <p className="text-sm font-light">{data.message}</p>
                    <p className="text-sm font-light mb-2">{data.createdAt}</p>
                  </div>

                  {/* buttons */}
                  <div className="space-x-4 lg:space-x-2 lg:flex lg:items-center justify-center ">
                    <button className="bg-deep-green p-2 text-xs text-white rounded-md font-semibold lg:w-23">
                      {data.type === "booking"
                        ? "View Receipt"
                        : "View Details"}
                    </button>
                    <button
                      className="border border-vibrant-red p-2 text-xs text-vibrant-red rounded-md font-semibold"
                      onClick={() => setShowModal(true)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <DeleteConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
