import { useEffect, useState, createContext } from "react";
import { facilityData } from "../../data";

export const FacilityContext = createContext();

export default function FacilityProvider({ children }) {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    async function fetchFacility() {
      try {
        let token = localStorage.getItem("access");

        if (!token) {
          token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzUxNTg4MzYyLCJpYXQiOjE3NTE1NTIzNjIsImp0aSI6IjA2MTI2NjcyZGU0YzRjNjdiMWZhMzFiYjBjYTY1MDU1IiwidXNlcl9pZCI6IjdmZDNhOTIxLWQ0MTktNDhlYy05ZDgzLTI0NjZlYTE5N2JjMiIsImVtYWlsIjoiZmFjaWxpdHk4QGV4YW1wbGUuY29tIiwicm9sZSI6Ik9QRVJBVE9SIn0.CZl3g9l9evNK32jkgEsR9qDqz38OL0_ADTSeppN8c7k";
          localStorage.setItem("access", token);
          console.warn(
            "Token was missing. Injected test token for dev use."
          );
        }

        const response = await fetch(
          "https://agricon-express-backend.onrender.com/api/v1/facilities?limit=3&page=2&available=true",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("No facilities available");
        }
        console.log(resData);
        setFacilities(
          resData.data.map((data) => {
            return {
              id: data.id,
              name: data.type,
              location: data.location,
              type: data.type,
            };
          })
        );
      } catch (error) {
        console.error(error.message || "No facility data, using mock data...");
        setFacilities(facilityData);
      }
    }

    fetchFacility();
  }, []);

  return (
    <FacilityContext.Provider value={{ facilities }}>
      {children}
    </FacilityContext.Provider>
  );
}
