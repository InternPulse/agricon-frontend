import React from 'react'
import Modal from '../../components/Modal'
import SuccessfulCopmonent from '../../components/SuccessfulCopmonent'

const SuccesfulEdit = () => {
  return (
    <div>
      <Modal children={<SuccessfulCopmonent successMessage='You have successfully updated your information'/>}/>
    </div>
  )
}

export default SuccesfulEdit
