import React from "react";
import { assets } from "../../../assets/assets";

export default function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-ghost-white/10 backdrop-blur-sm flex justify-center items-end md:items-center z-50">
      <div className="relative bg-white rounded-t-xl flex flex-col items-center md:rounded-[16px] w-full md:w-[574px] h-[60%] md:h-[70%] lg:h-[80%] xl:h-[60%] md:justify-center p-6 md:p-8 text-center shadow-xl">
        {/* Handle bar for mobile */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-25 h-1 bg-gray-400 rounded-full md:hidden" />

        <div className="text-[40px] mb-4 mt-6 md:mt-0">
          <img src={assets.infoIcon} alt="info" />
        </div>

        <h2 className="text-md md:text-[30px] font-semibold mb-2">
          Delete Notification?
        </h2>

        <p className="text-center text-[14px] md:text-base text-cool-gray mb-6 mx-auto md:w-[342px]">
          This will permanently remove the notification. Are you sure you want
          to continue?
        </p>

        <div className="flex flex-col gap-5 lg:mt-4">
          <button
            onClick={onConfirm}
            className="bg-soft-pink text-sm text-semi-red font-medium py-2 rounded-lg hover:bg-red-200 flex w-[200px] md:w-[342px] items-center justify-center gap-2 lg:h-14"
          >
            <span>Yes</span>
            <img src={assets.deleteIcon} alt="delete" />
          </button>

          <button
            onClick={onClose}
            className="border text-sm border-gray-border text-gray-700 font-medium py-2 rounded-lg hover:bg-gray-100 w-full md:w-[342px] lg:h-14"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
