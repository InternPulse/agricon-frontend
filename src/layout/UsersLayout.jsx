import React from 'react';
import { useAuth } from '../context/AuthContext';
import FacilityLayout from '../pages/infrastructure/Root';
import FarmerLayout from './Farmerlayout';

function UserLayout() {
    const { userRole } = useAuth();


  const renderDashboard = () => {
    switch (userRole) { 
      case 'OPERATOR':
        return <FacilityLayout />;
      case 'FARMER':
        return <FarmerLayout />;
      default:
        return <div>No roles found</div>
    }
  };

  return (
    <div>
      <main>
        {renderDashboard()}
      </main>
    </div>
  );
}

export default UserLayout;