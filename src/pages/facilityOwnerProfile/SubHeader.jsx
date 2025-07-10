import { useState } from "react";
import Profile from "./Profile";
import Notification from './Notification';
import PrivacyAndSecurity from './PrivacyAndSecurity';

const SubHeader = () => {
    const [activeTab, setActiveTab] = useState('profile');

    // switch button active state
    const getButtonClasses = (tabName) => {
        return `p-1 rounded-md transition-colors px-4 font-bold duration-200 ease-in-out ${
            activeTab === tabName
                ? 'bg-gray-300 text-gray-800'
                : 'text-gray-800 hover:bg-gray-200'
        }`;
    };

    return (
        <div className='w-full mb-10'>
            <div className=''>
                <div className='py-2'>
                    <div className='flex flex-wrap items-center p-1 gap-5 space-x-1 bg-white'>
                        <button
                            onClick={() => setActiveTab('profile')}
                            className={getButtonClasses('profile')}
                        >
                            Profile
                        </button>
                        <button
                            onClick={() => setActiveTab('notification')}
                            className={getButtonClasses('notification')}
                        >
                            Notification
                        </button>
                        <button
                            onClick={() => setActiveTab('privacy')}
                            className={getButtonClasses('privacy')}
                        >
                            Privacy & Security
                        </button>
                    </div>
                </div>
            </div>

            {/* Corrected Conditional Rendering */}
            {activeTab === 'profile' && <Profile />}
            {activeTab === 'notification' && <Notification />}
            {activeTab === 'privacy' && <PrivacyAndSecurity />}
        </div>
    );
};

export default SubHeader;