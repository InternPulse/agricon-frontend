import React, { useContext, useState } from 'react';
// import Modal from '../../components/Modal';
import Modal from '../../components/facilities/Modal';
import FacilityImageComponent from '../../components/facilities/FacilityImageComponent';

const FacilityImage = () => {
  
  return (
       <div>
      <Modal children={<FacilityImageComponent />}/>
    </div>
  );
};

export default FacilityImage;
