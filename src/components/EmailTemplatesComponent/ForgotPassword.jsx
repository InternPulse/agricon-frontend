import React from "react";
import { assets } from "../../assets/assets";

export default function WelcomeEmail() {
  return (
    <section className="flex flex-col min-h-screen justify-center items-center bg-[#F7F7F7] px-4 py-8">
      <div className="w-full max-w-[600px] rounded-[32px] bg-white shadow-md p-6 md:p-8 lg:p-[32px] flex flex-col justify-between">
        <img
          src={assets.agriconLogo}
          alt="Agricon logo"
          className="w-[120px] h-auto"
        />

        <div className="mt-8 space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-5">
            <h1 className="text-[20px] md:text-[24px] addFont font-semibold leading-tight">
              Forgot Your Password?
            </h1>
            <h2 className="text-[20px] md:text-[24px] addFont font-medium leading-tight">
              No worries — let's get you back in.
            </h2>
            <p className="text-[14px] md:text-[16px] addFont leading-snug font-normal">
              Hi Tolulope,
            </p>
            <p className="text-[14px] md:text-[16px] addFont leading-snug font-normal">
              We received a request to reset your AgriCon account password.
              Click the button below to set a new one:
            </p>
          </div>

          {/* button */}
          <div>
            <button className="bg-[#02402D] h-[48px] md:h-[56px] w-full md:w-[191px] addFont text-white text-[14px] md:text-[16px] font-medium px-6 py-2 rounded-full transition cursor-pointer">
              Reset Password
            </button>
          </div>
        </div>

        <div className="space-y-6 mt-8 md:mt-[32px]">
          <p className="addFont text-[14px] md:text-[16px] font-normal leading-snug">
            (This link will expire in 60 minutes.)
          </p>

          <div className="space-y-4">
            <div>
              <p className="addFont text-[14px] md:text-[16px] font-normal leading-snug">
                Didn’t request this?
              </p>
              <p className="addFont text-[14px] md:text-[16px] font-normal leading-snug">
                If you didn’t request a password reset, you can safely ignore
                this email.
              </p>
            </div>

            <div>
              <p className="addFont text-[14px] md:text-[16px] font-normal leading-snug">
                Need help?
              </p>
              <p className="addFont text-[14px] md:text-[16px] font-normal leading-snug">
                Contact our support team at support@agricon.ng
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
