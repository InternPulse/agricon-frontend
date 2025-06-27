import React from "react";
import { assets } from "../../assets/assets";

export default function WelcomeEmail() {
  return (
    <section className="flex flex-col min-h-screen justify-center items-center bg-[#F7F7F7] px-4 py-8 addFont">
      <div className="w-full max-w-[600px] rounded-[32px] shadow-md bg-white p-6 md:p-8 flex flex-col justify-between">
        {/* Logo */}
        <img
          src={assets.agriconLogo}
          alt="Agricon logo"
          className="w-[100px] md:w-[120px] h-auto"
        />

        {/* Content */}
        <div className="mt-8 space-y-4">
          <h1 className="text-[20px] md:text-[24px]  font-semibold leading-snug">
            Thank You! Here’s Your Receipt
          </h1>
          <h2 className="text-[20px] md:text-[24px]  font-medium leading-snug">
            Payment received for your booking.
          </h2>

          {/* Summary */}
          <div className="mt-6 font-normal space-y-5">
            <p className="text-[14px] md:text-[16px] leading-[24px]">
              Hi Tolulope,
            </p>

            <p className="text-[14px] md:text-[16px]  leading-[24px]">
              Here’s a summary of your payment:
            </p>

            <ul className="list-none text-[14px] md:text-[16px] leading-[24px] space-y-1">
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

          {/* Button */}
          <div className="mt-8">
            <button className="bg-[#02402D]  w-full md:w-auto text-white text-[14px] md:text-[16px] font-medium px-6 py-3 rounded-full transition cursor-pointer">
              Download Receipt
            </button>
          </div>

          {/* Footer */}
          <div>
            <p className="text-[14px] md:text-[16px]  leading-[24px] mt-4">
              Thanks for using AgriCon!
            </p>
            <p className="text-[14px] md:text-[16px]  leading-[24px] pb-2">
              Need help? Contact{" "}
              <a
                href="mailto:support@agricon.ng"
                className="text-[#02402D] underline"
              >
                support@agricon.ng
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
