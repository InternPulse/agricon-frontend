import SidebarUi from "../../components/infrastructure/ui/SidebarUi";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuBoxes } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { AiOutlineCustomerService } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import whiteAgriconLogo from "../../assets/whiteAgriconLogo.png";

export default function Sidebar() {
  const data = [
    { icon: <LuLayoutDashboard size={20} />, label: "Dashboard", to: "dashboard" },
    { icon: <LuBoxes size={20} />, label: "Facility", to: "" },
    {
      icon: <TbReportSearch size={20} />,
      label: "Booking History",
      to: "booking-history",
    },
    { icon: <MdPayments size={20} />, label: "Payment", to: "payment" },
    { icon: <MdOutlineSettings size={20} />, label: "Settings", to: "settings" },
    {
      icon: <AiOutlineCustomerService size={20} />,
      label: "Customer Support",
      to: "customer-support",
    },
  ];

  return (
    <>
      <aside className="sticky top-0 flex flex-col gap-4 bg-[#02402D] h-screen max-w-64 md:w-full pt-3.5 px-5 pb-7.5">
        <div className="pb-5 sm:pl-2 border-b border-[#FFAC00]">
          <div className="max-sm:flex max-sm:justify-center">
            <IoMdMenu size={30} className="sm:hidden text-white" />
          </div>
          <img
            src={whiteAgriconLogo}
            alt="Agricon Logo"
            className="max-sm:hidden max-w-[100px]"
          />
        </div>
        {data.map((item, index) => (
          <ul>
            <SidebarUi key={index} {...item} />
          </ul>
        ))}
      </aside>
    </>
  );
}
