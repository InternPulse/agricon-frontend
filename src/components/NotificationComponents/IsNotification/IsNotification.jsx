import React, { createContext, useState } from "react";

import Navbar from "../IsNotification/NavBar";
import Cards from "./Cards";
export const FilterContext = createContext();

export default function IsNotification({ read, unRead, data, mark }) {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("All");

  const handleDelete = () => {
    setShowModal(false);
    console.log("Notification deleted");
  };

  return (
    <FilterContext.Provider value={[filter, setFilter]}>
      <div className="px-4 md:px-6 lg:px-10 py-6 addFont mt-20">
        <Navbar read={read} mark={mark} unRead={unRead} />
        <Cards
          data={data}
          showModal={showModal}
          handleDelete={handleDelete}
          setShowModal={setShowModal}
        />
      </div>
    </FilterContext.Provider>
  );
}
