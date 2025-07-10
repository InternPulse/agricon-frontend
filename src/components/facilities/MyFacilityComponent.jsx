import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { PiClockUserBold } from "react-icons/pi";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


const MyFacilityComponent = ({image, status, facilityName, type, address, time,route,price,nextModal,deletePage}) => {
    const navigate = useNavigate();
  return (
    <div>
      <div className='flex md:p-4 p-2 justify-between border border-[#D0D5DD] rounded-lg items-center'>
        {/* image and details */}
        <div className='flex md:gap-6 gap-2'>
           {/* image */}
            <div className='relative'>
                 <img src={image} className='w-32 h-36 rounded-lg ' alt="" />
                 <p className={`${status=== 'Available' ? 'text-green-500':'text-red-600'} text-yellow-600 md:text-lg text-[10px] absolute top-0`}>
                    {status}</p>
            </div>

            {/* details */}
            <div className='flex  flex-col gap-2 '>
               
              <div className='flex gap-2 items-center '>
                <h1 className='md:text-[20px] text-[10px]'>{facilityName}</h1>
                <li className='md:text-[14px] text-[8px] text-[#344054]'>{type}</li>
              </div>
              <div className='flex gap-1 text-[#02402d] items-center md:text-[14px] text-[8px]'>
                <IoLocationOutline />
                {address}
              </div>

              <div className='flex md:text-[14px] text-[8px] items-center gap-1 text-[#02402d]'>
                <PiClockUserBold />
                <p>{time}</p>
              </div>

              <button className='border md:w-1/2 w-3/4 bg-[#02402d] text-white md:py-2 py-1 rounded-lg md:text-lg text-[10px]' onClick={route}>
              View details</button>

            </div>


           

        </div>

        {/* edit and delete */}
        <div className='flex flex-col gap-3'>
          <div className='flex gap-2 justify-end md:text-4xl text-2xl'>
                <MdOutlineEdit className='border border-[#808080] md:p-1 md:text-[4xl] text-xl rounded-lg cursor-pointer' 
                onClick={nextModal}/>
              
                <RiDeleteBin6Line
                onClick={deletePage}
                className='border md:text-[4xl] text-xl border-[#808080] md:p-1 rounded-lg '/>
            </div>

            <h1 className='font-semibold text-[8px] md:text-[14px]'>{price}</h1>

        </div>

      </div>
    </div>
  )
}

export default MyFacilityComponent
