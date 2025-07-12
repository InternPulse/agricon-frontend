import React, { useState } from "react";

import Navbar from "../IsNotification/NavBar";
import Cards from "./Cards";
import Cardss from "./Cards copy";

export default function IsNotification({ read, unRead, data }) {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(false);
    console.log("Notification deleted");
  };
  

  return (
    <div className="px-4 md:px-6 lg:px-10 py-6 addFont">
      <Navbar read={read} unRead={unRead} />
      <Cards
        data={data}
        showModal={showModal}
        handleDelete={handleDelete}
        setShowModal={setShowModal}
      />
    </div>
  );
}
