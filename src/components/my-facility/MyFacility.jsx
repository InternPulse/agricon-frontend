import React, { useState } from 'react'; 
import { FaBitbucket, FaPen } from "react-icons/fa";
import { assets } from "../../assets/assets"; 
import { FaLocationDot } from "react-icons/fa6";
import Editfacility from './edtFacility/EditFacility';
import Modal from './modal/Modal';
import SuccessState from './edtFacility/SuccessState';
import Delete from './deleteFacility/Delete';
import { useNavigate } from 'react-router-dom'; 

function MyFacility({ facilities }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const navigate = useNavigate(); 

  // --- Handlers for Edit Modal ---
  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

   
  const handleSaveSuccess = () => {
    setIsEditModalOpen(false); 
    setIsSuccessModalOpen(true); 

    // Automatically close success modal and redirect after 2 seconds
    setTimeout(() => {
      setIsSuccessModalOpen(false); 
      navigate('/my-facility'); 
    }, 2000); 
  };

  // --- Handlers for Delete Modal ---
  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };
  
  //Function to handle the actual deletion logic when confirmed from Delete modal
  const handleConfirmDelete = () => {
    console.log("Facility deletion confirmed!");
    setIsDeleteModalOpen(false); 
  };

  return (
    <div className=" px-5 py-10">
        <div className="pt-5">
        {facilities.map(facility => (
          <div
            key={facility.id}
            className="border border-gray-400 md:flex items-center justify-between px-5 py-1 rounded-xl space-x-5 space-y-5 md:space-y-2">
              <div className="md:flex items-center gap-5">
                <img src={assets.drying} alt="dryer" className="w-[50%] mx-auto p-2 md:p-0"/>
                <div className="space-y-3">
                  <h5 className="text-xl font-bold">{facility.name}</h5>
                  <p className="flex items-center gap-3">
                    <FaLocationDot /> {facility.address}
                  </p>
                  <p>{facility.type}</p>
                </div>
              </div>
              <div className="md:space-y-10 pb-5 md:pb-0 ">
                <div className="flex items-center justify-end gap-5">
                  <FaPen
                    className="border border-gray-400 rounded-xl p-2 fill-gray-500 cursor-pointer" 
                    size={40}
                    onClick={handleOpenEditModal} 
                  />
                  <FaBitbucket 
                    className="border border-gray-400 rounded-xl p-2 fill-gray-500 cursor-pointer" 
                    size={40}
                    onClick={handleOpenDeleteModal} 
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
        <Editfacility onSaveSuccess={handleSaveSuccess}/>
      </Modal>

      {/* Modal rendering SuccessState */}
      <Modal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)} 
        title="Success"
      >
        <SuccessState />
      </Modal>
      
      {/* Modal rendering Delete confirmation */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal} 
        title="Confirm" 
      >
        {/* Pass onClose to Delete so its internal buttons can close it, and onDeleteConfirm for deletion logic */}
        <Delete onClose={handleCloseDeleteModal} onDeleteConfirm={handleConfirmDelete} />
      </Modal>
    </div>
  );
}

export default MyFacility;