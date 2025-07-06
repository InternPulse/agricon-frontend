import React from 'react'
import MyFacilityComponent from '../../components/MyFacilityComponent'
import Image from '../../assets/FacilityImage.jpg'



const MyFacility = () => {
  return (
    <div className='bg-white h-screen'>
      <MyFacilityComponent 
      image={Image}
      status='Available'
      facilityName= 'Grains Silos'
      type='coldroom'
      address='123 Farm Avenue, Wuse II, Abuja D4620'
      time='8:00am - 17:00pm'
      price='NGN20,000/per day'
      />
    </div>
  )
}

export default MyFacility
