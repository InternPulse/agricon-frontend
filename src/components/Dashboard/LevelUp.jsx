import { GoArrowUpRight } from "react-icons/go";
import { LuWarehouse } from "react-icons/lu";

const LevelUp = () => {
  return (
    <div className="bg-[#02402D] rounded-xl w-full p-4">
      <div className="text-white w-full flex flex-col items-center gap-2">
        <div className="self-start p-4 w-20 h-20 grid place-items-center bg-[#101928] rounded-full">
          <LuWarehouse className="text-[#95BF33] size-12" />
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-[22px] font-normal leading-[30px]">
            Level up your post-harvest strategy to the next level .
          </h3>
          <p className="text-[14px] text-gray-300 mb-2 leading-tight">
            Book the right infrastructure , from cold rooms to dryers and take
            full control of your harvest . Keep your produce fresh cut down
            post-harvest losses .
          </p>
        </div>
        <button className="w-full h-10 bg-white text-[#02402D] text-sm font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out flex items-center gap-1 justify-center">
          Get started <GoArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default LevelUp;
