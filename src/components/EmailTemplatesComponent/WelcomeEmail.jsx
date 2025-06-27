import React from "react";
import { assets } from "../../assets/assets";

export default function WelcomeEmail() {
  return (
    <section className="flex flex-col min-h-screen justify-center items-center bg-[#F7F7F7] px-4 py-8">
      <div className="w-full max-w-[600px]  rounded-[32px] bg-white shadow-md p-6 md:p-8 lg:p-[32px] flex flex-col justify-between">
        <img
          src={assets.agriconLogo}
          alt="Agricon logo"
          className="w-[120px] h-auto"
        />

        <div className="mt-8 space-y-4">
          <h1 className="text-[20px] md:text-[24px] addFont font-semibold leading-snug">
            Welcome to Agricon
          </h1>
          <p className="text-[14px] md:text-[16px] font-normal addFont leading-snug">
            Hi Tolulope,
          </p>
          <p className="text-[14px] md:text-[16px] font-normal addFont leading-snug">
            You’re now part of AgriCon — where farmers and facility owners
            connect to reduce post-harvest losses.
          </p>

          {/* What's Next Section */}
          <div className="mt-6 space-y-2">
            <p className="font-medium text-[14px] md:text-[16px]">What’s next?</p>
            <ul className="list-disc ml-6 space-y-1 text-[14px] md:text-[16px] leading-[24px]">
              <li>🔍 Book nearby drying, cold, or processing facilities</li>
              <li>🏢 List your own facility</li>
              <li>📱 Access AgriCon on web</li>
            </ul>
          </div>

          {/* Footer */}
          <p className="text-[14px] md:text-[16px] addFont font-normal leading-[22px] mt-4">
            Thanks for signing up. We're here to help you and your team. If you
            have any questions, contact us at{" "}
            <a
              href="mailto:hello@agricon.com"
              className="text-[#02402D] underline"
            >
              hello@agricon.com
            </a>
            .
          </p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <button className="bg-[#02402D] addFont w-full md:w-[173px] h-[48px] md:h-[56px] text-white text-[14px] md:text-[16px] font-medium px-6 py-2 rounded-full transition cursor-pointer">
            Open Agricon
          </button>
        </div>
      </div>
    </section>
  );
}
