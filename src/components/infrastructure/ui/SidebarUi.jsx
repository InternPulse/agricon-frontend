import { NavLink } from "react-router-dom";

export default function SidebarUi({ icon, label, to }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex w-full text-white sm:pl-2 py-2.5 items-center rounded sm:rounded-lg cursor-pointer hover:bg-amber-500 ${
            isActive ? "bg-[#FFAC00]" : undefined
          }`
        }
        end
      >
        <div className="mr-2.5 max-sm:mx-3 w-5">{icon}</div>
        <p className="max-sm:hidden text-sm tracking-[-0.0075em]">{label}</p>
      </NavLink>
    </li>
  );
}
