import React from 'react'
import Image from '../../assets/Succesful.png'
// import Image from '../../'
import { useNavigate } from 'react-router-dom'


const SuccessfulCopmonent = ({ successMessage }) => {
    const navigate = useNavigate();
  return (
    <div>
      
      <div className='flex  justify-center'>
           <div className='bg-white text-[16px] md:p-1 p-4 flex flex-col gap-4 items-center justify-center rounded-lg md:w-[574px] w-[100px] md:h-[450px] h-[200px]'>
        <img src={Image} alt="" className='w-[200px]  h-[200px]' />
        <h1 className='text-[30px] text-center font-semibold'>Successful!</h1>
        <p className='text-gray-700 md:text-[14px] text-[12px]'>{successMessage} </p>
        
       <button 
       
       onClick={()=> navigate('/myfacility')}
       className='text-white  bg-[#02402d] cursor-pointer px-4 py-2 rounded-lg'>Return to my Facilities</button>  

      </div>

    </div>
    </div>
  )
}

export default SuccessfulCopmonent
