import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { PiClockUserBold } from "react-icons/pi";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


const MyFacilityComponent = ({image, status, facilityName, type, address, time,route,price}) => {
    const navigate = useNavigate();
  return (
    <div>
      <div className='flex p-4 justify-between border border-[#D0D5DD] rounded-lg items-center'>
        {/* image and details */}
        <div className='flex gap-6'>
           {/* image */}
            <div className='relative'>
                 <img src={image} className='w-32 h-36 rounded-lg ' alt="" />
                 <p className={`${status=== 'Available' ? 'text-green-500':'text-red-600'} text-yellow-600 absolute top-0`}>
                    {status}</p>
            </div>

            {/* details */}
            <div className='flex  flex-col gap-2 '>
               
              <div className='flex gap-2 items-center '>
                <h1 className='text-[20px]'>{facilityName}</h1>
                <li className='text-[14px] text-[#344054]'>{type}</li>
              </div>
              <div className='flex gap-1 text-[#02402d] items-center text-[14px]'>
                <IoLocationOutline />
                {address}
              </div>

              <div className='flex text-[14px] items-center gap-1 text-[#02402d]'>
                <PiClockUserBold />
                <p>{time}</p>
              </div>

              <button className='border w-1/2 bg-[#02402d] text-white py-2 rounded-lg' onClick={route}>View details</button>

            </div>


           

        </div>

        {/* edit and delete */}
        <div className='flex flex-col gap-3'>
          <div className='flex gap-2 justify-end md:text-4xl text-2xl'>
                <MdOutlineEdit className='border border-[#808080] p-1 rounded-lg ' />
                <RiDeleteBin6Line className='border border-[#808080] p-1 rounded-lg '/>
            </div>

            <h1 className='font-semibold text-[14px]'>{price}</h1>

        </div>

      </div>
    </div>
  )
}

export default MyFacilityComponent
