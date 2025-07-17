import React from 'react'
import { Outlet } from 'react-router-dom'


const FacilityOwnerProfileLayout = () => {
  return (
    <div className='py-10 px-5 mt-15'>
        <Outlet />
    </div>
  )
}

export default FacilityOwnerProfileLayout
