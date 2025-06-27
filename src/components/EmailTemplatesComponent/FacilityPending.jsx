import React from "react";
import { assets } from "../../assets/assets";

export default function FacilityPending() {
  return (
    <section className="flex flex-col min-h-screen justify-center items-center bg-[#F7F7F7] px-4 py-8 addFont">
      <div className="w-full max-w-[600px] rounded-[32px] bg-white shadow-md p-6 md:p-8 lg:p-[32px] flex flex-col justify-between">
        <img
          src={assets.agriconLogo}
          alt="Agricon logo"
          className="w-[120px] h-auto"
        />

        <div className="mt-8 space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-5">
            <h1
              className="text-[20px] md:text-[24px] 
             font-[600] leading-[22px]"
            >
              Facility Status Update
            </h1>
            <h2
              className="text-[20px] md:text-[24px] 
             font-[600] leading-[22px]"
            >
              Thanks for submitting your facility, [Facility Name]!
            </h2>
            <p
              className="text-[14px] md:text-[16px] 
             leading-[100%] font-[400]"
            >
              Hi [First Name],
            </p>
            <p
              className="text-[14px] md:text-[16px] 
              font-[400]"
            >
              We’re currently reviewing your submission, and it is marked as
              pending approval.
            </p>

            <p
              className="text-[14px] md:text-[16px] 
              font-[400]"
            >
              You’ll be notified once it has been approved. This usually takes
              1–2 business days. In the meantime, ensure your profile details
              are accurate and complete to speed up the process.
            </p>
          </div>

          {/* button */}
          <div>
            <button className="bg-[#02402D] h-[48px] md:h-[56px] w-full md:w-[267px] text-[#F9FAFB] text-[14px] md:text-[16px] font-[500] px-6 py-2 rounded-full transition cursor-pointer">
             Review My Facility Details
            </button>
          </div>
        </div>

        <div
          className="space-y-6 mt-8 md:mt-[32px] 
        "
        >
          <p className=" text-[14px] md:text-[16px] font-[400] leading-snug">
            If you have any questions, feel free to reach our support team.
          </p>

          <div
            className="space-y-8 
          "
          >
            <div>
              <p className=" text-[14px] md:text-[16px] font-normal leading-snug">
                Need help?
              </p>
              <p className=" text-[14px] md:text-[16px] font-normal leading-snug">
                Contact our support team at support@agricon.ng
              </p>
            </div>

            <div>
              <p className=" text-[14px] md:text-[16px] font-normal leading-snug">
                © 2025 Agricon. All rights reserved.
              </p>
              <p className="text-[14px] md:text-[16px] font-normal leading-snug">
                You're receiving this email because you have an Agricon account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
