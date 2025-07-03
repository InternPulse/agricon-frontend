//how to use the images from the assets.js file
//import the directory below
import { Route, Routes } from "react-router-dom";
import { assets } from "./assets/assets";
import Sidebar from "./components/sidebar/Sidebar";
import Sample from "./pages/samplePage";
import ForgotPassword from "./components/EmailTemplatesComponent/ForgotPassword";
import BookingComfirmationAndReceipt from "./components/EmailTemplatesComponent/BookingComfirmationAndReceipt";
import WelcomeEmail from "./components/EmailTemplatesComponent/WelcomeEmail";
import Email from "./pages/EmailFeatures/Email";
import SearchBar from "./components/navbar/SearchBar";
import Notification from "./pages/NotificationPage/Notification";
import AllNotification from "./pages/AllNotification";

function Overview() {
  return (
    <>
      {" "}
      <div className="hidden md:block">
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
      {/* for big screeen */}
      <div className="h-screen w-screen   md:flex  bg-ghost-white">
        <div className=" md:inline-block">
          <Sidebar />
        </div>

        <div className="flex-1  md:pl-64 ">
          {/* <Notification /> */}
          <div className="md:flex">
            <SearchBar />
          </div>

          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/facility" />
            <Route path="/booking" />
            <Route path="/payments" />
            <Route path="/settings" />
            <Route path="/notification" element={<AllNotification />} />
          </Routes>
        </div>
      </div>

   
    </>
  );

  // return <Email />;
}

export default App;
