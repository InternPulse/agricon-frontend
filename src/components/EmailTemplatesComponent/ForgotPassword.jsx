import React from "react";
import { assets } from "../../assets/assets";

export default function WelcomeEmail() {
  return (
    <section className="flex flex-col min-h-[100vh] justify-center items-center bg-[#F7F7F7]">
      <div className="w-[600px] h-[610px] rounded-[32px] bg-white shadow-md p-[32px] flex flex-col justify-between">
        <img
          src={assets.agriconLogo}
          alt="Agricon logo"
          className="w-[120px] h-auto"
        />

        <div className="mt-[32px] space-y-12">
          <div className="space-y-5">
            <h1 className="text-[24px] addFont font-[600] leading-[22px]">
              Forgot Your Password?
            </h1>
            <h2 className="text-[24px] addFont font-[500] leading-[22px]">
              No worries — let's get you back in.
            </h2>
            <p className="text-[16px] addFont leading-[100%] font-[400]">
              Hi Tolulope,
            </p>
            <p className="text-[16px] addFont leading-[100%] font-[400]">
              We received a request to reset your AgriCon account password.
              Click the button below to set a new one:
            </p>
          </div>

          {/* button */}
          <div className="mt-[32px]">
            <button className="bg-[#02402D] h-[56px] w-[191px] addFont text-white text-[16px] font-medium px-6 py-2 rounded-full transition cursor-pointer">
              Reset Password
            </button>
          </div>
        </div>

        <div className="space-y-8 mt-[32px]">
          <p className="addFont text-[16px] font-[400] leading-[100%]">
            (This link will expire in 60 minutes.)
          </p>

          <div className="space-y-4">
            <div className="">
              <p className="addFont text-[16px] font-[400] leading-[100%] ">
                Didn’t request this?
              </p>
              <p className="addFont text-[16px] font-[400] space-y-2 leading-[100%]">
                If you didn’t request a password reset, you can safely ignore
                this email.
              </p>
            </div>

            <div>
              <p className="addFont text-[16px] font-[400] leading-[100%] ">Need help ?</p>
              <p className="addFont text-[16px] font-[400] space-y-2 leading-[100%]">
                Contact our support team at support@agricon.ng
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
