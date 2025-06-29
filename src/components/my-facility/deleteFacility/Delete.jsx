import React from 'react';
import { FaBitbucket } from 'react-icons/fa'; 


function Delete({ onClose, onDeleteConfirm }) {
    return (
        <div className="p-4"> 
            <div className="text-center space-y-5">
                <div className="space-y-2">
                    <div className="flex items-center justify-center">
                       
                        <p className="font-bold border-3 border-gray-700 rounded-full w-12 h-12 flex items-center justify-center text-2xl text-gray-700">i</p>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Delete Facility?</h2>
                    <p className="px-6 text-gray-700">
                        This will permanently remove the facility and all related booking information. Are you sure you want to continue?
                    </p>
                </div>
                <div className="px-6 space-y-3"> 
                    <button
                        onClick={onDeleteConfirm} 
                        className="flex items-center justify-center gap-2 py-2 w-full bg-red-100 text-red-500 font-bold rounded-md hover:bg-red-300 transition duration-200"
                    >
                        Delete <FaBitbucket />
                    </button>
                    <button
                        onClick={onClose} 
                        className="flex items-center justify-center border border-gray-800 py-2 w-full text-gray-800 font-bold rounded-md hover:bg-gray-100 transition duration-200"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Delete;