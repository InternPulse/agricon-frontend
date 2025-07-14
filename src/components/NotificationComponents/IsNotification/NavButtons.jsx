import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "./IsNotification";

const NavButtons = ({ items }) => {
  const [filter, setFilter] = useContext(FilterContext);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    setFilter(activeTab);
  }, [activeTab]);

  // switch button active state
  const getButtonClasses = (tabName) => {
    return `p-1 rounded-md transition-colors px-4 duration-200 ease-in-out ${
      activeTab === tabName
        ? "bg-green-100 text-sm sm:text-base text-gray-800"
        : "text-[#8B8B8B] text-sm sm:text-base sm:text-gray-800 hover:bg-gray-200"
    }`;
  };

  return (
    <div className="w-full max-w-100 md:max-w-130 flex flex-wrap justify-between items-center p-1 bg-white">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => {
            setActiveTab(item);
          }}
          className={getButtonClasses(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default NavButtons;
