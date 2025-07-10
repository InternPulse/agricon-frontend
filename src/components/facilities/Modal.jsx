import React from 'react'
import { MdCancel } from 'react-icons/md'
import { useLocation } from 'react-router-dom'


const Modal = ({ children, title, onClose }) => {
  const { pathname } = useLocation();
  const hideHeader = pathname === '/successfuledit'
  return (
    <div className='bg-black/20  fixed inset-0 flex items-center justify-center backdrop-blur-sm'>
      <div className='bg-white p-8 rounded-lg shadow-lg relative w-full max-w-lg '>
        {
          !hideHeader && (
               <div className={ `${pathname === '/successfuledit' ? 'hidden' : ''} flex justify-between items-center mb-4`}>
          {title && <h2 className="md:text-lg text-sm font-semibold">{title}</h2>}
          <MdCancel className="text-2xl text-gray-400 cursor-pointer" onClick={onClose} />
        </div>
          )
        }
       
        <div className='overflow-y-scroll hide-scrollbar md:h-[79vh] h-[50vh] '>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
