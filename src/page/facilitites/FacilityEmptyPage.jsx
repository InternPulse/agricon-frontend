import React, { useState } from 'react'
import Image from '../../assets/FacilityEmpty.png'
import { CgSortAz } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal';
import AddFacilityComponent from '../../components/AddFacilityComponent';
import FacilityImageComponent from '../../components/FacilityImageComponent';
import SuccessfulCopmonent from '../../components/SuccessfulCopmonent';


const FacilityEmptyPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFacilityImage, setShowFacilityImage] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
 
  return (
    <div className=''> 
      <div className='flex flex-col  gap-10'>
      {/* buttons */}
        <div className=' flex justify-end md:text-[14px] text-[10px] gap-4'>
                <div className='flex cursor-pointer items-center rounded-lg md:px-3 px-1 md:py-4  py-1 border border-[#99DFC9]'> 
                    <CgSortAz className='md:text-2xl text-lg'/>
                    <button>Sort By</button>
                </div>                
                <div className='flex items-center cursor-pointer bg-[#02402D] text-white px-3 md:py-4 py-1 rounded-lg'>
                    <IoMdAdd className='md:text-2xl text-lg'/>
                    <button onClick={()=>setShowModal(true)}>Add Facility</button>
                                  </div>
              

                
        </div>

        {/* body */}
        <div className='flex flex-col gap-6 items-center justify-center'>
            <img src={Image} 
            className='md:w-48 w-24 md:h-48'
            alt="" />

            <h1 className='text-[18px] text-center font-semibold'>Your Facility is Empty</h1>
            <p className='text-[16px] text-[#667185] text-center'>Click the add button to start adding your facility.</p>


        </div>

        {showModal && (
              <Modal 
              title='Facility Information'
              onClose={()=>setShowModal(false)}>
               <AddFacilityComponent nextModal={()=>{setShowFacilityImage(true); setShowModal(false)}} />
              </Modal>
                    )}
        {
          showFacilityImage &&(
            <Modal 
            title='Facility Image'
            onClose={()=>setShowFacilityImage(false)}
            >
                <FacilityImageComponent  onSucess={()=>{setShowFacilityImage(false); setShowModal(false); setShowSuccessModal(true)}}/>
            </Modal>
            
          )
        }

        {
          showSuccessModal && (
            <Modal>
                <SuccessfulCopmonent />
            </Modal>
          )
        }

      </div>



   
    </div>
  )
}

export default FacilityEmptyPage
