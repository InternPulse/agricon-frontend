import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0  flex items-center justify-center z-50 p-4 backdrop-blur-lg  "
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg drop-shadow-2xl p-6 w-full max-w-lg relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          {title && <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl leading-none font-semibold"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="py-4">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;