import React, { useState } from "react";
import logo from "../assets/agriconLogo.png";
import companyImage from "../assets/authImage.png";
import lightBar from "../assets/LightBar.png";
import darkBar from "../assets/darkBar.png";
import Form from "../../components/Form/Form.jsx";

export default function ForgotPassword() {
  const [isActive, setIsActive] = useState(1);

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2  px-6 py-12 md:px-16 md:py-16 items-center">
      {/* Left Panel */}
      <section className="flex flex-col items-center justify-center bg-[#F0F2F5] p-8 md:p-[75px] rounded-md w-full max-w-[600px] mx-auto">
        <header className="mb-8">
          <img src={logo} alt="logo" className="w-[140px]" />
        </header>

        <div className="mb-8">
          <img
            src={companyImage}
            alt="companyimage"
            className="w-full max-w-[441px] h-auto object-contain"
          />
        </div>

        <footer className="text-center space-y-4 w-full">
          <div>
            <h2 className="text-lg font-semibold text-[#010E0A]">
              Find Nearby Infrastructure
            </h2>
            <p className="text-sm text-[#010E0A]">
              Discover dryers, cold rooms, and processing units close to your
              farm.
            </p>
          </div>

          {/* Had to reduce the width of the bar in response to the screen sizes */}

          <div className=" flex gap-2 justify-center  mt-10">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => {
              const active = num === isActive;
              return (
                <img
                  key={num}
                  src={active ? darkBar : lightBar}
                  onClick={() => setIsActive(num)}
                  className="cursor-pointer w-[35px] md:w-[82px] lg:w-[55px] xl:w-[82px]"
                />
              );
            })}
          </div>
        </footer>
      </section>

      {/* Right Panel */}
      <Form />
    </main>
  );
}
