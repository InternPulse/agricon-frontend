import { useEffect, useState, createContext } from "react";

export const FacilityContext = createContext();

export default function FacilityProvider({ children }) {
  const [facilities, setFacilities] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFacility() {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzUxOTMwNDUyLCJpYXQiOjE3NTE4OTQ0NTIsImp0aSI6ImE4YWEwN2NjNzJhNzRkZTlhMmM4MDJkNDQwOTY3NjdkIiwidXNlcl9pZCI6IjE5MjkyMjYyLWYwMjMtNDhiMS04YjQzLWJmYjI1NzJiYjM1YSIsImVtYWlsIjoiZ29nb21hcm9zaTYxQGdtYWlsLmNvbSIsInJvbGUiOiJGQVJNRVIifQ.evEmFF1Oni8FSB_RjV0SJcMeAiAzw_MuX-zvsPGqP5M";
      try {
        const response = await fetch(
          "https://agricon-express-backend.onrender.com/api/v1/facilities?limit=10&page=2&available=true",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const resData = await response.json();
        console.log(resData);

        if (!response.ok) {
          throw new Error("No facilities available");
        }
        console.log(resData);
        setFacilities(
          resData.facilities.map((data) => {
            return {
              id: data.id,
              operatorId: data.operatorId,
              name: data.name,
              location: data.location,
              type: data.type,
              available: data.available,
              capacity: data.capacity,
              contact: data.contact,
              description: data.description,
              createdAt: data.createdAt,
              updatedAt: data.updatedAt,
              pricePerDay: data.pricePerDay,
              facilityImage: data.facilityImage,
            };
          })
        );
      } catch (error) {
        console.error(error.message || "No facility data, using mock data...");
        setError(true);
      }
    }

    fetchFacility();
  }, []);

  return (
    <FacilityContext.Provider value={{ facilities, error }}>
      {children}
    </FacilityContext.Provider>
  );
}
