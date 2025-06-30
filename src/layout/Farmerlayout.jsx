import { Outlet } from "react-router-dom";
import Side from "../components/home/Side";
import { getFarmerProfile } from "../api/getFarmerProfile";
import { useCallback, useEffect, useState } from "react";
import { ClipLoader } from 'react-spinners';
import Header from '../components/Dashboard/Header'


function FarmerLayout() {
    const [farmerData, setFarmerData] = useState(null); 
      const [loading, setLoading] = useState(true);
    
      // Function to fetch the farmer's profile
      const getProfile = useCallback(async () => {
        setLoading(true); 
        try {
            const data = await getFarmerProfile();
            localStorage.setItem("farmerProfile", JSON.stringify(data));
          console.log(data)
            setFarmerData(data);
      
        } catch (error) {
          setFarmerData(null, error); // Set to null on error
        } finally {
          setLoading(false); 
        }
      }, []);
    
      useEffect(() => {
        getProfile();
      }, [getProfile]);
    

      if (loading) {
        return (
          <div className='flex justify-center items-center min-h-screen'>
            <ClipLoader color='#02402D' />
          </div>
        );
      }
    
    
    return (
        <div className="flex w-full">
            <Side />
            <div className="pl-0 md:pl-64 w-full">
                <div>
                <Header
                    title='Farmer'
                    userName={farmerData.firstName}
                    picture={<span 
                    className="bg-green-900 text-2xl text-green-50 font-bold px-2 rounded-full">{farmerData.firstName.at(0).toUpperCase()}</span>}
                />
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default FarmerLayout;