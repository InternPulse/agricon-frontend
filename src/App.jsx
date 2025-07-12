import Example from "./components/Example";
import Bookings from "./pages/Bookings/Bookings";
import FacilityOwnerDashboard from "./pages/Dashboard/FacilityOwnerDashboard";
import Dashboard from "./pages/Dashboard/FacilityOwnerDashboard";
import FarmerDashboard from "./pages/Dashboard/FarmerDashboard";
import { createContext, useState } from "react";

export const SidebarContext = createContext();

function App() {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <SidebarContext.Provider value={{ open, toggleSidebar }}>
      <FarmerDashboard role='Facility Owner'/>
    </SidebarContext.Provider>
  );
}
export default App;
