import React from "react";
import { assets } from "../../../assets/assets";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

export default function Cardss({
  data,
  showModal,
  handleDelete,
  setShowModal,
}) {
  return (
    <div className="mee">
      {data.map((data) => {
        <div>me</div>;
      })}
    </div>
  );
}
