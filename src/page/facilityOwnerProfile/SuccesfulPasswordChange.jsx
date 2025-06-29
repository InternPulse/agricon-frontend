import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SuccesfulPasswordChange = () => {
  return (
    <div className='bg-gray-200 h-screen justify-center flex items-center' >

        <div className='bg-white h-[448px] w-[500px]   rounded-[16px] flex flex-col gap-8 items-center justify-center'>
            <FaCheckCircle className='text-[#104E21] md:text-8xl text-6xl'/>
            <h1
            className='text-3xl font-bold text-center'
            >You have successfully changed your password🎉</h1>

                <Link to='/profile'>
            <button
            className='cursor-pointer bg-[#104e21] px-40 py-2 rounded text-white w-full'
            >Back to Setting</button>
            </Link>
        </div>
      
    </div>
  )
}

export default SuccesfulPasswordChange
