import React, { useState } from "react";
import logo from "../../assets/agriconLogo.png";
import companyImage from "../../assets/authImage.png";
import lightBar from "../../assets/LightBar.png";
import darkBar from "../../assets/darkBar.png";
import { assets } from '../../assets/assets';
import ResetEmailForm from "../../components/authentication/ResetEmailForm";

export default function ForgotPassword() {
  const [isActive, setIsActive] = useState(1);

  return (
    <main >
      {/* Left Panel */}
      {/* <section className="flex flex-col items-center justify-center bg-[#F0F2F5] p-8 md:p-[75px] rounded-md w-full max-w-[600px] mx-auto">
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
      </section> */}

      
  {/*=============================Right Panel============================================*/}
      <ResetEmailForm />
      
    </main>
  );
}
