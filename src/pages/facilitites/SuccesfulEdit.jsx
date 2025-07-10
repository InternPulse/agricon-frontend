import React from 'react'
// import Modal from '../../components/Modal'
// import SuccessfulCopmonent from '../../components/SuccessfulCopmonent'
import SuccessfulCopmonent from '../../components/facilities/SuccessfulCopmonent'
import Modal from '../../components/facilities/Modal'

const SuccesfulEdit = () => {
  return (
    <div>
      <Modal children={<SuccessfulCopmonent successMessage='You have successfully updated your information'/>}/>
    </div>
  )
}

export default SuccesfulEdit
