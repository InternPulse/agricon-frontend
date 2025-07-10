import React, { useState } from 'react';
import { FaBitbucket, FaPen } from "react-icons/fa";
import { assets } from "../../assets/assets";
import { FaLocationDot } from "react-icons/fa6";
import Editfacility from './edtFacility/EditFacility';
import Modal from '../my-facility/modal/Modal';
import SuccessState from './edtFacility/SuccessState'; // Assuming this is for edit success
import Delete from './deleteFacility/Delete';
import { deleteFacilityById } from '../../actions/DeleteFacilityById';
import DeleteSuccess from './deleteFacility/Deletesuccess'; // Component for delete success

function MyFacility({ facilities }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditSuccessModalOpen, setIsEditSuccessModalOpen] = useState(false); // Renamed for clarity if you have multiple success states
  const [isDeleteSuccessModalOpen, setIsDeleteSuccessModalOpen] = useState(false); // New state for delete success
  const [selectedFacilityId, setSelectedFacilityId] = useState(null);

  // --- Handlers for Edit Modal ---
  const handleOpenEditModal = (id) => {
    setSelectedFacilityId(id);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleSaveSuccess = () => {
    setIsEditModalOpen(false);
    setIsEditSuccessModalOpen(true); // Using the new specific state

    // Automatically close edit success modal after 2 seconds
    setTimeout(() => {
      setIsEditSuccessModalOpen(false);
      // If you still need navigation here, add it back
    }, 2000);
  };

  // --- Handlers for Delete Modal ---
  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleOpenDeleteModal = (id) => {
    setSelectedFacilityId(id);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteFacilityById(selectedFacilityId);
      setIsDeleteModalOpen(false); 
      setIsDeleteSuccessModalOpen(true); 

      // Automatically close delete success modal after 2 seconds
      setTimeout(() => {
        setIsDeleteSuccessModalOpen(false);
      }, 2000);
    } catch (err) {
      console.error('Error deleting facility:', err);
      // You might want to show an error message to the user here
    }
  };

  return (
    <div className=" px-5 py-10">
      <div className="pt-5 space-y-3">
        {facilities.map(facility => (
          <div
            key={facility.id}
            className="border border-gray-400 md:flex items-center justify-between pl-3 pt-2 rounded-xl space-x-5 space-y-5 md:space-y-2">
            <div className="md:flex items-center gap-5">
              <img
                src={facility.facilityImage?.[0] || assets.greenhouseImage}
                alt={facility.name || "Facility image"}
                className="w-[160%] md:w-[30%] md:p-0 object-cover"
              />

              <div className="space-y-3 w-100">
                <h5 className="font-bold">{facility.name}</h5>
                <p className="flex items-center gap-3">
                  <FaLocationDot /> {facility.location}
                </p>
                <p>{facility.type}</p>
              </div>
            </div>
            <div className="md:space-y-10 pb-5 md:pb-0 px-5">
              <div className="flex items-center justify-end gap-5">
                <FaPen
                  className="border border-gray-400 rounded-xl p-2 fill-gray-500 cursor-pointer"
                  size={40}
                  onClick={() => handleOpenEditModal(facility.id)}
                />
                <FaBitbucket
                  className="border border-gray-400 rounded-xl p-2 fill-gray-500 cursor-pointer"
                  size={40}
                  onClick={() => handleOpenDeleteModal(facility.id)}
                />
              </div>
              <p>{facility.pricePerDay}</p>
            </div>
          </div>
        ))}
      </div>


      {/* Modal rendering Editfacility */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        title="Edit Facility"
      >
        <Editfacility onSaveSuccess={handleSaveSuccess} facilityId={selectedFacilityId} />
      </Modal>

      {/* Modal rendering Edit SuccessState */}
      <Modal
        isOpen={isEditSuccessModalOpen} // Use the specific edit success state
        onClose={() => setIsEditSuccessModalOpen(false)}
        title="Success"
      >
        <SuccessState />
      </Modal>

      {/* Modal rendering Delete confirmation */}
      <Modal isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal} title="Confirm">
        <Delete
          facilityId={selectedFacilityId}
          onClose={handleCloseDeleteModal}
          onDeleteConfirm={handleConfirmDelete}
        />
      </Modal>

      {/* New Modal for Delete Success */}
      <Modal
        isOpen={isDeleteSuccessModalOpen} // Use the new delete success state
        onClose={() => setIsDeleteSuccessModalOpen(false)}
        title="Deletion Successful"
      >
        <DeleteSuccess />
      </Modal>

    </div>
  );
}

export default MyFacility;