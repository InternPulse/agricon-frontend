import React, { useContext } from "react";
import { assets } from "../../../assets/assets";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { FilterContext } from "./IsNotification";

export default function Cards({
  data,
  showModal,
  handleDelete,
  setShowModal,
  mark,
}) {
  const [state, _] = useContext(FilterContext);
  return (
    <div>
      {/* Notification Cards */}
      <div className="grid grid-cols-1 gap-6">
        {data.map((data) => {
          return state === "Unread" ? (
            !data.isRead && (
              <Card
                key={data.id}
                data={data}
                setShowModal={setShowModal}
                mark={mark}
              />
            )
          ) : state === "Read" ? (
            data.isRead && (
              <Card
                key={data.id}
                data={data}
                setShowModal={setShowModal}
                mark={mark}
              />
            )
          ) : (
            <Card
              key={data.id}
              data={data}
              setShowModal={setShowModal}
              mark={mark}
            />
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

const Card = ({ data, setShowModal, mark }) => {
  const [markAsReadBody, setMarkAsReadBody] = mark;
  return (
    <div
      key={data.id}
      className={`${
        !data.isRead && data.type === "error"
          ? "bg-[#E0A7A7]/10"
          : !data.isRead
          ? "bg-[#A7E0CF]/10"
          : ""
      } w-full p-2 md:px-2 md:py-4 md:h-[122px] lg:p-5 rounded-md`}
    >
      <div className="flex gap-2 w-full">
        <div
          className={`size-10 md:size-16 min-w-[40px] rounded-full flex  items-center justify-center ${
            data.type === "error" ? "bg-[#E2737333]" : "bg-[#C1E273]/50"
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
            className="size-5 md:size-8"
          />
        </div>

        <div className="w-full flex flex-col md:flex-row md:flex-1/2 space-x-1 md:justify-between md:items-center">
          {/* content */}
          <div className="space-y-1">
            <p className="text-[18px] sm:text-[20px] font-semibold  ">
              {data.title}
            </p>
            <p className="text-[14px] sm:text-[15px] font-light">
              {data.message}
            </p>
            <p className="text-sm font-light mb-2">{data.createdAt}</p>
          </div>

          {/* buttons */}
          <div className="gap-2 sm:gap-4  sm:h-[42px] lg:space-x-2 flex items-center md:justify-center ">
            <button
              className="bg-[#02402D] p-1 px-2 sm:p-2 text-xs sm:text-[16px] text-[#F9FAFB] rounded-md md:font-semibold sm:w-[122px] cursor-pointer"
              onClick={() => {
                setMarkAsReadBody({
                  title: data.title,
                  message: data.message,
                  status: data.status,
                  timestamp: data.createdAt,
                });
                console.log(markAsReadBody);
              }}
            >
              {data.type === "booking" ? "View Receipt" : "View Details"}
            </button>
            <button
              className="sm:w-[71px] border border-vibrant-red py-1 px-2 sm:p-2 text-xs sm:text-[16px] text-vibrant-red rounded-md sm:font-semibold"
              onClick={() => setShowModal(true)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
