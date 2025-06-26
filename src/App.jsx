import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Services from './pages/home/Services';
// import Navbar from './components/home/Navbar';
// import Footer from './components/home/Footer';
import AboutUs from './pages/home/AboutUs';
import Contact from './pages/home/Contact';
import BookingSummary from './pages/infrastructure/BookingSummary';
import BookingForm from './pages/infrastructure/BookingForm';
import FacilityDetails from './pages/infrastructure/FacilityDetails';
import RootLayout from './pages/infrastructure/Root';
import Facility from './pages/infrastructure/Facility';




function App() {

  return (
    <div>
      {/* <Navbar /> */}
        <div>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/services' element={<Services />}/>
              <Route path='/about' element={<AboutUs />}/>
              <Route path='/contact' element={<Contact />}/>
              
              <Route>
                <Route path='facility' element={<RootLayout />}>
                  <Route index element={<Facility />}/>
                  <Route path='facility-details' element={<FacilityDetails />}/>
                  <Route path='booking' element={<BookingForm />}/>
                  <Route path='booking-summary' element={<BookingSummary />}/>
                </Route>
              </Route>
          </Routes>
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default App;
