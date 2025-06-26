import authImage from "../../assets/authImage.png";
import agriconLogo from "../../assets/agriconLogo.png"
import Carousels from "../../components/signUp/Carousels";
import Credentials from "../../components/signUp/Credentials";

export default function SignUp() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 p-10 sm:p-18 lg:p-24 xl:p-30">
      <div className="order-2 lg:order-1">
        <div className="flex flex-col py-[4.7rem] px-[4.2rem] items-center justify-center h-full bg-[#F0F2F5]">
          <img
            className="hidden lg:block w-auto mb-[2.3rem]"
            src={agriconLogo}
            alt="Agricon Logo"
          />
          <img
            className="w-full max-w-[441px] mb-[2.3rem]"
            src={authImage}
            alt="Sign up image"
          />
          <p className="font-Inter mb-2 text-xl font-semibold text-[#010E0A]">
            Find Nearby Infrastructure
          </p>
          <p className="font-Inter mb-9 text-[#010E0A] text-sm">
            Discover dryers, cold rooms, and processing units close to your
            farm.
          </p>
          <Carousels />
        </div>
      </div>

      <div className="flex justify-center mb-8 lg:hidden">
        <img className="w-[120px]" src={agriconLogo} alt="Agricon Logo" />
      </div>
      <div className="order-1 lg:order-2">
        <Credentials />
      </div>
    </div>
  );
}
