import React, { useState } from 'react'
import MyFacilityComponent from '../../components/MyFacilityComponent'
import Image from '../../assets/FacilityImage.jpg'
import Modal from '../../components/Modal';
import AddFacilityComponent from '../../components/AddFacilityComponent'
import SuccessfulCopmonent from '../../components/SuccessfulCopmonent';

const MyFacility = () => {
    const [editFacilityModal, setEditFacilityModal] = useState(false);
    const [editImageFacilityModal, setImageFacilityModal] = useState(false);
    const [successModal, editSuccessModal] = useState(false);


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
      nextModal={()=> setEditFacilityModal(true)}
      />
      { editFacilityModal &&(
          <Modal
          title='Facility Information'
          onClose={()=>setEditFacilityModal(false)}
          >
            <AddFacilityComponent nextModal={()=> setImageFacilityModal(true)}/>
          </Modal>
        )
      }

      { editImageFacilityModal &&(
          <Modal
          // title='Facility Information'
          onClose={()=>setEditFacilityModal(false)}
          >
            < SuccessfulCopmonent nextModal={()=> {setImageFacilityModal(false)  }}/>
          </Modal>
        )
      }
    </div>
  )
}

export default MyFacility
