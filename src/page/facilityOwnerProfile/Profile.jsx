import React from 'react'
 const facilityUserDetails =
            {   
                fullName: 'Yings Alex Ayoola',
                emailAddress:"Yings.alex.ayoola@gmail.com",
                phoneNumber:'080123456789',
                facilityAddress:'Mahattan freeway, Lagos'
            }

            const DetailRow = ({label, value})=>(
                <div>
                    <h1 className='text-[12px] text-[#999999]'>
                        {label}</h1>
                    <p>
                        {value}</p>
                </div>
            )
        

const Profile = () => {
       const {
        fullName, 
        emailAddress,
        phoneNumber,
        facilityAddress
       } = facilityUserDetails;
       
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex inter flex-col gap-8 w-full'>
    
        {/* personal details */}
        <div className='flex flex-col gap-8 bg-white px-4 py-4 rounded'>
            <h1 className='font-semibold text-[16px] text-[#1a1a1a]'>Personal details</h1>

                <div className='grid md:grid-cols-2 gap-10  md:text-[14px] text-[12px]  '>
                    <DetailRow label='Full Name' value={fullName} />
                     <DetailRow label='Email Address' value={emailAddress} />
                     <DetailRow label='Phone Number' value={phoneNumber} />
                     <DetailRow label='Facility Address' value={facilityAddress} />
                </div>
                 </div>
      </div>
    </div>
  )
}

export default Profile
