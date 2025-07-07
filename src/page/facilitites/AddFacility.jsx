import React, { useContext } from 'react';
// import Modal from '../../components/Modal';
import Modal from '../../components/facilities/Modal';
import AddFacilityComponent from '../../components/facilities/AddFacilityComponent';

const AddFacility = () => {
 
  return (
    
    <div className=''>
      <Modal children={<AddFacilityComponent />}/>
    </div>
  );
};

export default AddFacility;
