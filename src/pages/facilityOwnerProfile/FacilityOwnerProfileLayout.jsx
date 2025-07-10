import React from 'react'
import SubHeader from './SubHeader'
import { Outlet } from 'react-router-dom'
// import SideBar from '../../component/SideBar'
// import SideBar from '../../components/SideBar'

const FacilityOwnerProfileLayout = () => {
  return (
    <div className='py-10 px-5'>
        <Outlet />
    </div>
  )
}

export default FacilityOwnerProfileLayout
