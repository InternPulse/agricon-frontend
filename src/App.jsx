//how to use the images from the assets.js file
//import the directory below

import Booking from "./components/Facility-Details_View/Booking";
import FacilityDetails from "./components/Facility-Details_View/FacilityView";
import Navbar from "./components/Facility-Details_View/Nav";
import './App.scss';
import BookingSummary from "./components/Facility-Details_View/Booking-Summary";
function App() {
  return (
    <div className="text-gray-700 text-3xl  justify-center min-h-screen">
      <div>
        <Navbar/>

        <FacilityDetails/>
        <Booking/>
        <BookingSummary/>
      </div>
    </div>
  );
}

export default App;
