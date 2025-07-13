import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "./IsNotification";

const NavButtons = ({ items }) => {
  const [filter, setFilter] = useContext(FilterContext);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    console.log(activeTab);
    setFilter(activeTab);
  }, [activeTab]);

  // switch button active state
  const getButtonClasses = (tabName) => {
    return `p-1 rounded-md transition-colors px-4 duration-200 ease-in-out ${
      activeTab === tabName
        ? "bg-green-100 text-gray-800"
        : "text-gray-800 hover:bg-gray-200"
    }`;
  };

  return (
    <div className="flex flex-wrap items-center p-1 gap-5 space-x-1 bg-white">
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
