import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LiaTimesSolid } from "react-icons/lia";
import { FaCheckCircle } from "react-icons/fa";

const ChangePassword = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // password validation
  const handleSubmit = async (e) => {
    e.preventDefault();
     
    if (newPassword !== confirmPassword) {
      setMessage("New passwords do not match.");
      return;
    }

    if (newPassword.length < 6) {
      setMessage("New password must be at least 6 characters.");
      return;
    }

    setMessage("");
    setShowModal(true);

    // Placeholder until API is ready
    // console.log("Send to API:", {
    //   currentPassword,
    //   newPassword,
    // });
  };


  return (
    <div className="bg-[#F7F7F7] min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-lg w-full max-w-lg p-6 sm:p-8">
        <h2 className="text-[#101928] text-2xl font-bold text-center py-6">
          Change Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-800 text-sm">Current Password</label>
            <input
              type="password"
              placeholder="Type current password"
              value={currentPassword} 
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="text-sm w-full p-3 rounded-lg mt-2 border border-gray-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 text-sm">New Password</label>
            <input
              type="password"
              placeholder="Type new password"
              value={newPassword} 
              onChange={(e) => setNewPassword(e.target.value)}
              className="text-sm w-full p-3 rounded-lg mt-2 border border-gray-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-800 text-sm">Confirm New Password</label>
            <input
              type="password"
              placeholder="Retype new password"
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="text-sm w-full p-3 rounded-lg mt-2 border border-gray-400"
              required
            />
            {message && (
              <p className="text-red-500 text-sm">{message}</p>
            )}

          </div>
          <button
            type="submit"
            className="bg-[#02402D] hover:bg-green-950 text-white w-full p-3 rounded transition"
          >
            Change Password
          </button>
          <button
            type="button"
            className="bg-white text-red-500 border border-red-500 w-full p-3 rounded transition"
            onClick={() => navigate('/settings', { state: { activeTab: 'Privacy & Security' } })}
          >
            Cancel
          </button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#F7F7F7] bg-opacity-40 z-50 px-4">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md text-center relative">
            <button
              className="absolute top-4 right-4 text-gray-500 text-xl"
              onClick={() => navigate('/settings', { state: { activeTab: 'Privacy & Security' } })}
            >
              <LiaTimesSolid />
            </button>
            <div className="flex justify-center mb-4">
              <div className="text-[#104E21] text-5xl">
                <FaCheckCircle />
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              You have successfully changed your password! 🎉
            </h2>
            <button
              className="mt-4 bg-[#104E21] w-full text-white px-6 py-3 rounded hover:bg-green-950 transition"
              onClick={() => navigate('/settings', { state: { activeTab: 'Privacy & Security' } })}
            >
              Back to Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangePassword;
