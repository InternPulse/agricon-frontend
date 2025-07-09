import React from 'react'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteFacilityComponent = ({cancel}) => {
  return (
    
      <div className='flex  items-center justify-center '>
        <div className='flex flex-col items-center w-[290px] gap-4 '>
            <IoMdInformationCircleOutline className='text-8xl text-center' />
            <h1 className='text-3xl font-semibold'>Delete Facility</h1>
            <p className='md:text-[16px] text-[10px] text-[#667185] text-center'>This will permanently remove the facility and all related booking information. Are you sure you want to continue?</p>
            <div className='flex items-center gap-2 justify-center rounded-lg text-[#E00000D9] bg-[#E0000014] w-full p-2 '>
             <button className='text-center '>Delete Facility</button>
             <RiDeleteBin6Line className='' />
            </div>

            <button
            onClick={cancel}
            className='text-black border w-full p-2 rounded-lg text-[16px]'>  Cancel</button>
           

          </div>
      </div>
    
  )
}

export default DeleteFacilityComponent
