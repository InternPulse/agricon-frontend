//how to use the images from the assets.js file
//import the directory below

import Navbar from "./components/Facility-Details_View/Nav";
import Login from "./components/Login";

function App() {
  return (
    <div className="text-gray-700 text-3xl  justify-center min-h-screen">
      <div>
        <div>
          <Navbar/>
        </div>

        {/* <Login /> */}
      </div>
    </div>
  );
}

export default App;
