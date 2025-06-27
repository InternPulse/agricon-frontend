import React from "react";
import { assets } from "../../assets/assets"; // Replace with your actual assets path

export default function AlternativeLoginEmailTemp() {
  return (
    <section className="min-h-screen flex justify-center items-center px-4 py-8 addFont bg-white">
      <div className="w-full max-w-[600px] bg-gradient-to-t from-[#067252] to-[#0B9D0B] rounded-lg shadow-md overflow-hidden relative">
        {/* Header Banner with Logo and Centered Text */}
        <div
          className="relative h-40 md:h-60 bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.farmerBg})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Logo at top-left */}
          <div className="absolute top-4 left-4 z-20">
            <img
              src={assets.agriconLogoWhite}
              alt="Agricon Logo"
              className="w-[50px] md:w-[110px] object-contain"
            />
          </div>

          {/* Centered Heading */}
          <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-center px-4">
            <h1 className="text-xl md:text-[32px] font-semibold leading-snug">
              Hello Tolulope,
              <br />
              Welcome to Agricon
            </h1>
          </div>
        </div>

        {/* Floating Card */}
        <div className="relative z-10 -mt-12 w-full bg-white mx-auto max-w-[90%] md:max-w-[547px] rounded-xl shadow-lg p-6 md:p-8 space-y-4">
          <h2 className="text-lg md:text-[24px] font-[600] text-center">
            Begin Your Industrious Journey
          </h2>
          <div className="space-y-2 leading-[27px]">
            <p className="text-[15px] md:text-[16px] text-center md:text-start font-[500] ">
              We’re excited to have you on board. Whether you’re a farmer
              looking for tools, land, or support or just exploring what’s
              possible, we’re here to make your journey smoother.
            </p>
            <p className="text-[15px] md:text-[16px] text-center md:text-start font-[500] ">
              Your login was successful, and your account is now ready to help
              you discover resources, connect with providers, and take your
              farming goals to the next level.
            </p>
          </div>

          <div className="flex justify-center">
            <button className="bg-[#02402D] w-full max-w-[180px] text-[#FFFFFF] text-sm md:text-[18px] font-[700] px-6 py-4 rounded-full cursor-pointer">
              Start Exploring
            </button>
          </div>
        </div>

        {/* Section 2: Grow with confidence */}
        <div className="relative z-10 mt-5 w-full bg-white mx-auto max-w-[90%] md:max-w-[547px] rounded-xl shadow-lg p-6 md:p-8 space-y-7">
          <h2 className="text-lg md:text-[24px] font-[600] text-center">
            Grow with confidence
          </h2>
          <p className="text-[15px] md:text-[16px] text-center md:text-start font-[500] ">
            Explore tools and infrastructure near you. Get access to the land,
            storage, and equipment that powers your farming goals. Start
            browsing now and find the support you need this season.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-4 w-full md:w-[480px]">
            {[
              {
                img: assets.tractorImage,
                title: "Heavy Duty Tractor",
                location: "123 Farm Avenue, Wuse II, Abuja ",
              },
              {
                img: assets.siloImage,
                title: "Grain Silos",
                location: "123 Farm Avenue, Wuse II, Abuja ",
              },
              {
                img: assets.greenhouseImage,
                title: "Greenhouse",
                location: "123 Farm Avenue, Wuse II, Abuja ",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-start w-full md:max-w-[132px] h-[156px] space-y-1"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[109px] rounded-md sm:object-contain md:max-w-[121px] md:object-cover"
                />

                <p className="text-xs md:text-[14px] font-[600]">
                  {item.title}
                </p>
                <p className="text-xs md:text-[10px] font-[300] text-[#000000]">
                  {item.location}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="bg-[#02402D] h-[58px] text-[#FFFFFF] text-sm md:text-[18px] font-[700] px-5 py-2 rounded-full cursor-pointer">
              Find Facilities Near Me
            </button>
          </div>
        </div>

        {/* Section 3: Become a Facility Owner */}
        <div className="relative z-10 mt-5 w-full bg-white mx-auto max-w-[90%] md:max-w-[547px] rounded-xl shadow-lg p-6 md:p-8 space-y-5">
          <h2 className="text-lg md:text-[24px] font-[600] text-center">
            Become A Facility Owner
          </h2>
          <div className="space-y-2">
            <p className="text-sm md:text-base text-center  md:text-start text-[#000000] font-[500] leading-[27px]">
              Many farmers need access to facilities you already have. By
              listing your space or equipment, you’re not only earning, you’re
              also supporting agriculture where it matters most.
            </p>
            <p className="text-sm md:text-base text-center  md:text-start text-[#000000] font-[500] leading-[27px]">
              Join a growing network of facility owners helping farmers thrive.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className=" ml-0 md:ml-5 mt-5 text-center md:text-start  text-[#FFFFFF] px-4 py-6 space-y-8 ">
          <div className="text-[16px] font-[400] leading-[21px]">
            <p>Need help? We’re just a click away.</p>
            <p>support@agricon.ng Visit our Help Center</p>
          </div>

          <div className="text-[16px] font-[400] leading-[21px] ">
            <p>Follow us for updates and success stories:</p>
            <p className="space-x-1">
              <a href="#" className="underline">
                [Facebook]
              </a>
              <a href="#" className="underline">
                [Instagram]
              </a>
              <a href="#" className="underline">
                [LinkedIn]
              </a>
            </p>
          </div>

          <div>
            <p className="">© 2025 Agricon. All rights reserved.</p>
            <p>
              You’re receiving this email because you have an Agricon account.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
