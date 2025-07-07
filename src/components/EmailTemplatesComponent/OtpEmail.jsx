import React from "react";
import { assets } from "../../assets/assets";

export default function OtpEmail() {
  return (
    <section className="flex flex-col min-h-screen justify-center items-center bg-[#F7F7F7] px-4 py-8 addFont">
      <div className="w-full max-w-[600px] rounded-[32px] bg-white shadow-md p-6 md:p-8 lg:p-[32px] flex flex-col justify-between">
        <img
          src={assets.agriconLogo}
          alt="Agricon logo"
          className="w-[120px] h-auto"
        />

        <div className="mt-8 space-y-8 md:space-y-7">
          <div className="space-y-4 md:space-y-5">
            <h1 className="text-[20px] md:text-[24px] addFont font-[600] leading-[22px]">
              Verify Your Email – AgriCon One-Time Password (OTP)
            </h1>

            <p className="text-[14px] md:text-[16px] addFont leading-snug font-[400]">
              Hi Tolulope,
            </p>
            <p className="text-[14px] md:text-[16px] addFont leading-snug font-[400]">
              Your AgriCon OTP is:
            </p>
          </div>

          {/* button */}
          <div className="flex flex-col  items-center">
            <button className="bg-[#475367] p-[10px] font-[400] text-[#FFFFFF] h-[39px] w-full md:max-w-[77px] rounded-sm">
              362781
            </button>
          </div>
        </div>

        <div className="space-y-6 mt-8 md:mt-[32px]">
          <div className="space-y-1">
            <p className="text-[14px] md:text-[16px] font-[400] leading-[100%]">
              This code will expire in 10 minutes.
            </p>
            <p className="text-[14px] md:text-[16px] font-[400] leading-[100%]">
              Please enter this code in the app to continue setting up your
              account.
            </p>
          </div>

          <div className="space-y-9 ">
            <div className="space-y-1 font-[400] ">
              <p className=" text-[14px] md:text-[16px]  leading-[100%]">
                Need Help?
              </p>
              <p className=" text-[14px] md:text-[16px]  leading-[100%]">
                If you didn’t request this, please ignore this email.
              </p>
              <p className=" text-[14px] md:text-[16px] leading-[100%]">
                For support, contact us at support@agricon.ng
              </p>
            </div>

            <div className="space-y-1 font-[400] mb-4 ">
              <p className="text-[14px] md:text-[16px]  leading-[100%]">
                AgriCon Nigeria
              </p>
              <p className=" text-[14px] md:text-[16px]  leading-[100%]">
                Connecting Farmers to Shared Infrastructure
              </p>
              <p className=" text-[14px] md:text-[16px]  leading-[100%]">
                © 2025 AgriCon. All rights reserved.account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
