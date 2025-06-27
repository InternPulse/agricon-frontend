import React, { useContext } from "react";
import { ViewFarmerContext } from "../../pages/Bookings/Bookings";
import { assets } from "../../assets/assets";

const FarmerDetails = () => {
  const tableData = [
    {
      id: 1,
      farmerName: "Lindsey Stroud",
      farmerImage: assets.Ladicia,
      facility: "SunHarvest Drying Yard",
      dateTime: "Jul 2, 2025, 10:AM",
      duration: "2 hours",
      status: "Upcoming",
    },
    {
      id: 2,
      farmerName: "John Doe",
      farmerImage: assets.Ladicia,
      facility: "GreenFields Processing",
      dateTime: "Jul 3, 2025, 2:PM",
      duration: "4 hours",
      status: "Completed",
    },
    {
      id: 3,
      farmerName: "Jane Smith",
      farmerImage: assets.Ladicia,
      facility: "AquaFarm Innovations",
      dateTime: "Jul 4, 2025, 9:AM",
      duration: "1.5 hours",
      status: "Cancelled",
    },
  ];
  const { activeFarmer } = useContext(ViewFarmerContext);
  console.log(activeFarmer);
  return (
    <div>
      {activeFarmer &&
        tableData.map((farmer) =>
          farmer.id === activeFarmer ? (
            <div>
              <div className="top">
                <div className="profile">
                  <div>
                    <img src={farmer.farmerImage} />
                  </div>
                  <div>
                    <h1>{farmer.farmerName}</h1>
                    <p>{farmer.farmerName}@gmail.com</p>
                  </div>
                </div>
                <div className="btns">
                  <button>Reschedule Booking</button>
                  <button>Cancel Booking</button>
                </div>
              </div>
              <div className="bottom">
                <form action="">
                  <div>
                    
                  </div>
                </form>
              </div>
            </div>
          ) : (
            ""
          )
        )}
    </div>
  );
};

export default FarmerDetails;
