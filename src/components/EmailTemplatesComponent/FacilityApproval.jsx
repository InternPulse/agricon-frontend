import React from "react";
import { assets } from "../../assets/assets";

export default function FacilityApproval() {
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
              Great News!
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
              Your facility, [Facility Name], has been successfully approved and
              is now visible to farmers seeking the services you offer.
            </p>
            <div
              className="mt-6  
            "
            >
              <p className="font-[400] text-[14px] md:text-[16px]">
                You can now:
              </p>
              <ul className="list-disc ml-6 space-y-1 text-[14px] md:text-[16px] leading-[24px]">
                <li>Manage your facility profile</li>
                <li>Receive booking requests from farmers</li>
                <li>Monitor your performance through your dashboard</li>
              </ul>
            </div>
          </div>

          {/* button */}
          <div>
            <button className="bg-[#02402D] h-[48px] md:h-[56px] w-full md:w-[287px] text-[#F9FAFB] text-[14px] md:text-[16px] font-[500] px-6 py-2 rounded-full transition cursor-pointer">
              Go To My Facility Dashboard
            </button>
          </div>
        </div>

        <div
          className="space-y-6 mt-8 md:mt-[32px] 
        "
        >
          <p className=" text-[14px] md:text-[16px] font-[400] leading-snug">
            Thanks for contributing to the Agricon network !
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
