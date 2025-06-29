import React from 'react'
import SubHeader from './SubHeader'
import { Outlet } from 'react-router-dom'
// import SideBar from '../../component/SideBar'
import SideBar from '../../components/SideBar'

const FacilityOwnerProfileLayout = () => {
  return (
    <div className='flex justify-center'>
      <SideBar />

      <div className='flex flex-col gap-10 flex-1 py-10 md:px-10 px-5'>
         <SubHeader />
      <div>
        <Outlet />
      </div>
      </div>
       
    </div>
  )
}

export default FacilityOwnerProfileLayout
