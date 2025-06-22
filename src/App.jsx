//how to use the images from the assets.js file
//import the directory below
import { Route, Routes } from "react-router-dom";
import { assets } from "./assets/assets";
import Sidebar from "./components/sideBar";
import Sample from "./pages/samplePage";


function Overview() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div>
          <h1>Overview page for Dashboard</h1>
          <img src={assets.agriconLogo} alt="agriCon" />
          <div>Welcome to Agricon</div>
        </div>
      </div>
    </>
  );
}

function App() {
  

  return (
    <>
      <div className="flex w-full">
        <Sidebar />
          <div className="pl-68 h-[200%]">
          <Routes>
             {/* render it this way in your various components */}
              <Route path='/' element={<Overview />}/>
              <Route path='/facilities' element={<Sample/>}/>
            </Routes>
          </div>
      </div>
    </>
  )
}


export default App;
