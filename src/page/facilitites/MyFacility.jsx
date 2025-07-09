import React, { useState } from 'react'
import MyFacilityComponent from '../../components/facilities/MyFacilityComponent'
import Image from '../../assets/FacilityImage.jpg'
// import Modal from '../../components/Modal';
import Modal from '../../components/facilities/Modal'
import AddFacilityComponent from '../../components/facilities/AddFacilityComponent'
import SuccessfulCopmonent from '../../components/facilities/SuccessfulCopmonent';
import DeleteFacilityComponent from '../../components/facilities/DeleteFacilityComponent'

const MyFacility = () => {
    const [editFacilityModal, setEditFacilityModal] = useState(false);
    const [editImageFacilityModal, setImageFacilityModal] = useState(false);
    const [successModal, editSuccessModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false)

  return (
    <div className='bg-white h-screen'>
      <div className='flex flex-col gap-6'>

         <MyFacilityComponent 
      image={Image}
      deletePage={()=>setDeleteModal(true)}
      status='Available'
      facilityName= 'Grains Silos'
      type='coldroom'
      address='123 Farm Avenue, Wuse II, Abuja D4620'
      time='8:00am - 17:00pm'
      price='NGN20,000/per day'
      nextModal={()=> setEditFacilityModal(true)}
      />

       <MyFacilityComponent 
      image={Image}
      deletePage={()=>setDeleteModal(true)}
      status='Available'
      facilityName= 'Grains Silos'
      type='coldroom'
      address='123 Farm Avenue, Wuse II, Abuja D4620'
      time='8:00am - 17:00pm'
      price='NGN20,000/per day'
      nextModal={()=> setEditFacilityModal(true)}
      />

      </div>
     
      { editFacilityModal &&(
          <Modal
          title='Facility Information'
          onClose={()=>setEditFacilityModal(false)}
          >
            <AddFacilityComponent nextModal={()=> setImageFacilityModal(true)}/>
          </Modal>
        )
      }
      {
        deleteModal && (
          <Modal>
            <DeleteFacilityComponent 
            cancel={()=> setDeleteModal(false)}
            />
          </Modal>
        )
      }

      { editImageFacilityModal &&(
          <Modal
          // title='Facility Information'
          onClose={()=>setEditFacilityModal(false)}
          >
            < SuccessfulCopmonent nextModal={()=> {{setImageFacilityModal(false)   }}}/>
          </Modal>
        )
      }
    </div>
  )
}

export default MyFacility
