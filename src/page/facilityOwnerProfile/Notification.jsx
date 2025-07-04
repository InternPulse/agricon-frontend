import React, { useState } from 'react';
import { MdToggleOn, MdToggleOff } from 'react-icons/md';
// import { useAuth } from '../../context/AuthContext';

const NotificationToggle = ({ label, description, enabled, onToggle }) => {
  
  
  return (
    <div className='flex justify-between items-start gap-4 md:w-1/2'>
      <div>
        <h1 className='font-semibold md:text-[14px]  text-[12px]'>{label}</h1>
        <p className='text-[12px] text-[#999999]'>{description}</p>
      </div>

      <button
        onClick={onToggle}
        aria-label={`Toggle ${label}`}
        className={`text-5xl ${enabled ? 'text-[#00E04F]' : 'text-gray-300'}`}
      >
        {enabled ? <MdToggleOn /> : <MdToggleOff />}
      </button>
    </div>
  );
};

const Notifications = () => {
  const [desktopEnabled, setDesktopEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
// const {user, token, loading } = useAuth();
  return (
    <div className='bg-white p-4 rounded  flex flex-col gap-6'>
      <h1 className='font-bold text-[16px]'>Notifications</h1>

      <NotificationToggle
        label='Enable Desktop Notification'
        description='Stay notified in real time on your desktop'
        enabled={desktopEnabled}
        onToggle={() => setDesktopEnabled(!desktopEnabled)}
      />
        {/* <h1> {user.firstName} </h1> */}
      <NotificationToggle
        label='Enable Email Alert'
        description='Get updates in your inbox'
        enabled={emailEnabled}
        onToggle={() => setEmailEnabled(!emailEnabled)}
      />
    </div>
  );
};

export default Notifications;
