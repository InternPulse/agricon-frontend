import React, { useContext } from 'react';
import Modal from '../../components/Modal';
import AddFacilityComponent from '../../components/AddFacilityComponent';

const AddFacility = () => {
 
  return (
    
    <div className=''>
      <Modal children={<AddFacilityComponent />}/>
    </div>
  );
};

export default AddFacility;
