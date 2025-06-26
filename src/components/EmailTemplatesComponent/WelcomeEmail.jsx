import React from "react";
import { assets } from "../../assets/assets";

export default function WelcomeEmail() {
  return (
    <section className="flex flex-col min-h-[100vh] justify-center items-center bg-[#F7F7F7]">
      <div className="w-[600px] h-[578px] rounded-[32px] bg-white shadow-md p-[32px] flex flex-col justify-between">
        <img
          src={assets.agriconLogo}
          alt="Agricon logo"
          className="w-[120px] h-auto"
        />

        <div className="mt-[32px] space-y-4">
          <h1 className="text-[24px] addFont font-[600] leading-[32px]">
            Welcome to Agricon
          </h1>
          <p className="text-[16px] font-[400] addFont leading-[100%]">Hi Tolulope,</p>
          <p className="text-[16px] font-{400] addFont leading-[100%]">
            You’re now part of AgriCon — where farmers and facility owners
            connect to reduce post-harvest losses.
          </p>

          {/* What's Next Section */}
          <div className="mt-[24px] space-y-2">
            <p className="font-medium">What’s next?</p>
            <ul className="list-disc ml-8 space-y-1 text-[16px] leading-[24px]">
              <li>🔍 Book nearby drying, cold, or processing facilities</li>
              <li>🏢 List your own facility</li>
              <li>📱 Access AgriCon on web.</li>
            </ul>
          </div>

          {/* Footer */}
          <p className="text-[16px] addFont font-[400] leading-[20px] mt-4">
            Thanks for signing up. We're here to help you and your team. If you
            have any questions, contact us at{" "}
            <a href="mailto:hello@agricon.com" >
              hello@agricon.com
            </a>
            .
          </p>
        </div>

        {/* Button */}
        <div className="mt-[32px]">
          <button className="bg-[#02402D] addFont top-[15px] w-[173px] h-[56px]  text-[#F9FAFB] text-[16px] font-medium px-6 py-2 rounded-full transition cursor-pointer">
            Open Agricon
          </button>
        </div>
      </div>
    </section>
  );
}
