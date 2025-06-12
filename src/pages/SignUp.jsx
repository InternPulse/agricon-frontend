import authImage from "../assets/authImage.png";
import agriconLogo from "../assets/agriconLogo.png";
import Carousels from "../components/Carousels";
import Credentials from "../components/Credentials";

export default function SignUp() {
  return (
    <div className="flex justify-between p-32">
      <div className="flex flex-col py-[4.7rem] px-[4.2rem] items-center max-w-[575px] bg-[#F0F2F5]">
        <img
          className="w-full max-w-[138.08px] mb-[2.3rem]"
          src={agriconLogo}
          alt="Agricon Logo"
        />
        <img
          className="w-full max-w-[441px] mb-[2.3rem]"
          src={authImage}
          alt="Sign up image"
        />
        <p className="font-Inter mb-2 font-semibold text-[#010E0A]">
          Find Nearby Infrastructure
        </p>
        <p className="font-Inter mb-9 text-[#010E0A] text-xs">
          Discover dryers, cold rooms, and processing units close to your farm.
        </p>
        <Carousels />
      </div>
      <Credentials />
    </div>
  );
}
