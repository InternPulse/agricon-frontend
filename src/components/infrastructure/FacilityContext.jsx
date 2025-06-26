import { useEffect, useState, createContext } from "react";
import { facilityData } from "../../data";

export const FacilityContext = createContext();

export default function FacilityProvider({ children }) {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    async function fetchFacility() {
      try {
        const response = await fetch(
          "https://agricon-express-backend.onrender.com/api/v1/facilities/"
        );
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("No facilities available");
        }
        console.log(resData);
        setFacilities(
          resData.map((data) => {
            return {
              id: data.id,
              name: data.name,
              location: data.location,
              type: data.type,
            };
          })
        );
      } catch (error) {
        console.error(error.message || "No facility data, using mok data...");
        setFacilities(facilityData);
      }
    }

    fetchFacility();
  }, []);

  return (
    <FacilityContext.Provider value={{facilities}}>
      {children}
    </FacilityContext.Provider>
  );
}
