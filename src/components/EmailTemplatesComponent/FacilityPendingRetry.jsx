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
          <div className="space-y-4 md:space-y-6">
            <h1
              className="text-[20px] md:text-[24px] 
             font-[600] leading-[22px]"
            >
              Payment/Booking Unsuccessful on Agricon
            </h1>
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
              We noticed an issue while processing your recent [payment/booking
              attempt] on Agricon. Unfortunately, the transaction for [Facility
              Name or Booking Reference] was unsuccessful.
            </p>

            <div>
              <p
                className="text-[14px] md:text-[16px] 
              font-[400]"
              >
                What this means:
              </p>
              <p
                className="text-[14px] md:text-[16px] 
              font-[400]"
              >
                Your booking has not been confirmed, and no payment was
                processed.
              </p>
            </div>

            <div
              className="mt-6  
            "
            >
              <p className="font-[400] text-[14px] md:text-[16px]">
                What you can do:
              </p>
              <ul className="list-disc ml-6  text-[14px] md:text-[16px] leading-[24px]">
                <li>
                  Check your payment details and ensure they are up to date
                </li>
                <li>Try the transaction again using a valid payment method</li>
                <li>
                  If funds were debited in error, they will be automatically
                  reversed within 24–48 hours.
                </li>
              </ul>
            </div>
          </div>

          {/* button */}
          <div>
            <button className="bg-[#02402D] h-[48px] md:h-[56px] w-full md:w-[249px] text-[#F9FAFB] text-[14px] md:text-[16px] font-[500] px-6 py-2 rounded-lg transition cursor-pointer">
              Retry Payment/Booking
            </button>
          </div>
        </div>

        <div
          className="space-y-6 mt-8 md:mt-[32px] 
        "
        >
          <p className=" text-[14px] md:text-[16px] font-[400] leading-[100%]">
            If you need any help or have questions, our support team is here for you.
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
