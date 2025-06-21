import Donut from "./Donut";

const CompleteProfile = () => {
  return (
    <div className="border border-[#D0D5DD] p-4 flex items-center justify-center w-full rounded-xl">
      <div className="w-full flex flex-col gap-12">
        <div className="container">
          <div className="flex items-center">
            <div className="w-[65px]">
              <Donut completionPercentage={62} />
            </div>
            <div className="font-semibold text-[18px] md:text-[15px] text-[#101928]">
              Complete Profile
            </div>
          </div>
          <p className="text-[#475367] text-[16px] md:text-[14px]">
            Set up your profile to unlock full access to bookings, payments, and
            personalized insights tailored to your farm operations.
          </p>
        </div>
        <button className="bg-[#02402D] w-full flex items-center justify-center text-white rounded-md text-[13px] h-10 font-semibold hover:bg-green-600 transition">
          Continue to profile
        </button>
      </div>
    </div>
  );
};

export default CompleteProfile;
