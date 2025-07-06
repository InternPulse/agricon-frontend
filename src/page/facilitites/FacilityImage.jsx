import React, { useContext, useState } from 'react';
import Modal from '../../components/Modal';
import FacilityImageComponent from '../../components/FacilityImageComponent';

const FacilityImage = () => {
  
  return (
       <div>
      <Modal children={<FacilityImageComponent />}/>
    </div>
  );
};

export default FacilityImage;
