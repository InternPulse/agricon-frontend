
import React from "react";
import { assets } from '../../assets/assets';

const LeftSide = () => {
    return (
        <div className="mt-5">
            <div className="hidden lg:flex flex-col items-center justify-center  px-4 py-8 md:p-10 space-y-4 bg-[#F0F2F5]">
                <img src={assets.agriconLogo} alt="agriCon" className="w-32 mb-6" />
                <img src={assets.authImage} alt="authImage" className="w-80 rounded-lg shadow-md" />
                <div className="text-center">
                    <h2 className="text-lg font-semibold text-black">Find Nearby Infrastructure</h2>
                    <p className="text-sm text-gray-600 mt-2">
                        Discover dryers, cold rooms, and processing units close to your farm.
                    </p>
                </div>
                <div className="flex gap-2 justify-center mt-4">
                    <div className="w-20 h-1 bg-black rounded-full"></div>
                    <div className="w-20 h-1 bg-[#A7E0CF] rounded-full"></div>
                    <div className="w-20 h-1 bg-[#A7E0CF] rounded-full"></div>
                    <div className="w-20 h-1 bg-[#A7E0CF] rounded-full"></div>
                    <div className="w-20 h-1 bg-[#A7E0CF] rounded-full"></div>
                </div>
            </div>

        </div>
    )
}

export default LeftSide