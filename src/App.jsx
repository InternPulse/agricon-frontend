//how to use the images from the assets.js file
//import the directory below

import FacilityDetails from "./components/Facility-Details_View/FacilityView";
import Navbar from "./components/Facility-Details_View/Nav";
// import Login from "./components/Login";

function App() {
  return (
    <div className="text-gray-700 text-3xl  justify-center min-h-screen">
      <div>
        <div>
          <Navbar/>
        </div>

        <FacilityDetails/>
      </div>
    </div>
  );
}

export default App;
