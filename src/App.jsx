//how to use the images from the assets.js file
//import the directory below
import { Route, Routes } from "react-router-dom";
import { assets } from "./assets/assets";
import Sidebar from "./components/sidebar";
import Sample from "./pages/samplePage";
import ForgotPassword from "./components/EmailTemplatesComponent/ForgotPassword";
import BookingComfirmationAndReceipt from "./components/EmailTemplatesComponent/BookingComfirmationAndReceipt";
import WelcomeEmail from "./components/EmailTemplatesComponent/WelcomeEmail";
import Email from "./pages/EmailFeatures/Email";

function Overview() {
  return (
    <>
      <div className="bg-red-600">
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
  // return (
  //   <>
  //     <div className="flex w-full">
  //       <Sidebar />
  //       <div className="pl-68 h-[200%]">
  //         <Routes>
  //           {/* render it this way in your various components */}
  //           <Route path="/" element={<Overview />} />
  //           <Route path="/facilities" element={<Sample />} />
  //         </Routes>
  //       </div>
  //     </div>
  //   </>
  // );
  return <Email />;
}

export default App;
