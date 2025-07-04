import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (

    <div className='w-[15%] min-h-screen  top-0 left-0 md:block hidden bg-[#02402D] py-10  '>
<div className=' px-  flex flex-col  gap-2 items-center   text-white  '>
    <Link><h1>Setting</h1></Link>
    <Link to='/booking'><h1>Booking</h1></Link>
    </div>
    </div>
    
  )
}

export default SideBar
