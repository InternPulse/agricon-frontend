import React from "react";
import { assets } from "../../assets/assets";

export default function WelcomeEmail() {
  return (
    <section className="flex flex-col min-h-[100vh] justify-center items-center bg-[#F7F7F7]">
      <div className="w-[600px] h-[674px]  rounded-[32px] shadow-md bg-[#FFFFFF] p-[32px] flex flex-col justify-between">
        <img
          src={assets.agriconLogo}
          alt="Agricon logo"
          className="w-[120px] h-auto"
        />

        <div className="mt-[32px] space-y-4">
          <h1 className="text-[24px] addFont font-[600] leading-[22px]">
            Thank You! Here’s Your Receipt
          </h1>
          <h2 className="text-[24px] addFont font-[500] leading-[22px]">
            Payment received for your booking.
          </h2>

          {/* What's Next Section */}
          <div className="mt-[24px] font-[400]  space-y-5">
            <p className="text-[16px] leading-[24px]">Hi Tolulope,</p>

            <p className="text-[16px] addFont leading-[24px]">
              Here’s a summary of your payment:
            </p>

            <ul className="list-none   text-[16px] leading-[24px]">
              <li>🧾 Receipt No: AGRC-[XXXX]</li>
              <li>🏭 Facility: [Cold Room A]</li>
              <li>🗓️ Date: [June 22, 2025]</li>
              <li>⏰ Time: [10:00 AM – 2:00 PM]</li>
              <li>💰 Amount Paid: ₦8,000</li>
              <li>💳 Payment Method: Wallet</li>
              <li>🔁 Transaction ID: TXN-[XXXXXX]</li>
              <li>📍 Location: [Ibadan, Oyo State]</li>
            </ul>
          </div>

          <div className="mt-[42px] mb-8">
            <button className="bg-[#02402D] addFont  text-white text-[16px] font-medium px-6 py-2 rounded-full transition cursor-pointer">
              Download Receipt
            </button>
          </div>

          <div>
            <p className="text-[16px] addFont leading-[24px] mt-4">
              Thanks for using AgriCon!
            </p>
            <p className="text-[16px] addFont leading-[24px] pb-2">
              Need help? Contact support@agricon.ng
            </p>
          </div>

          {/* Footer */}
        </div>

        {/* Button */}
      </div>
    </section>
  );
}
