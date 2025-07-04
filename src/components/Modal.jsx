import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm bg-opacity-50  flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] md:w-[500px]">
        {children}
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className=""
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
