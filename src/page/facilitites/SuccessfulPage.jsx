import React from 'react'
import Image from '../../assets/Succesful.png'
import { Link } from 'react-router-dom'

const SuccessfulPage = () => {
  return (
    <div className='flex  justify-center'>
      <div className='bg-white text-[16px] flex flex-col gap-4 items-center justify-center rounded-lg w-[574px] h-[450px]'>
        <img src={Image} alt="" className='w-[200px] h-[200px]' />
        <h1 className='text-[30px] text-center font-semibold'>Successful</h1>
        <p className='text-gray-700'>You have successfully added your facility</p>
        
      <Link to='/'> <button className='text-white  bg-[#02402d] px-4 py-2 rounded-lg'>Return to my Facilities</button>  </Link>  

      </div>
    </div>
  )
}

export default SuccessfulPage
