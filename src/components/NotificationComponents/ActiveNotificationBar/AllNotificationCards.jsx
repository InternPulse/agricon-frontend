import React from "react";
import { assets } from "../../../assets/assets";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

export default function AllNotificationCards({
  showModal,
  handleDelete,
  setShowModal,
}) {
  return (
    <div>
      {/* Notification Cards */}
      <div className="grid grid-cols-1 gap-6">
        {[1, 2, 3].map((id, i) => {
          const icons = [assets.iconPark, assets.polygon, assets.wave];
          const bgColors = [
            "bg-[#C1E27366]",
            "bg-[#E2737333]",
            "bg-[#C1E27366]",
          ];
          const titles = [
            "Booking Confirmed",
            "Error Processing Payment",
            "Welcome to AgriCon, [First Name]!",
          ];
          const descriptions = [
            "Your booking for Cold Room A has been confirmed for June 22, 2025",
            "Please review the wallet details and fix the error to process your payment",
            "Start by exploring nearby dryers, cold rooms, or processing units and make your first booking!",
          ];
          const actions = ["View Receipt", "View Details", "View Details"];

          const date = [
            "June 20, 10:35 AM",
            "June 20, 10:35 AM",
            "June 10, 10:35 AM",
          ];

          return (
            <div key={id} className="bg-[#A7E0CF1A] p-4 lg:p-5 rounded-md">
              <div className="flex items-start lg:items-center  space-x-4 ">
                {/* logo */}
                <div>
                  <div
                    className={`size-10 rounded-full flex  items-center justify-center ${bgColors[i]}`}
                  >
                    <img src={icons[i]} alt="icon" className="size-5" />
                  </div>
                </div>

                {/* content and button */}

                {/* content and button */}
                <div className="flex flex-col lg:flex-row lg:flex-1/2 lg:justify-between lg:items-center">
                  {/* content */}
                  <div className="space-y-1">
                    <p className="text-md font-semibold  ">{titles[i]}</p>
                    <p className="text-sm font-light">{descriptions[i]}</p>
                    <p className="text-sm font-light mb-2">{date[i]}</p>
                  </div>

                  {/* buttons */}
                  <div className="space-x-4 lg:space-x-2 lg:flex lg:items-center justify-center ">
                    <button className="bg-deep-green p-2 text-xs text-white rounded-md font-semibold lg:w-23">
                      {actions[i]}
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
