import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Services from './pages/home/Services';
import Navbar from './components/home/Navbar';
import Footer from './components/home/Footer';
import AboutUs from './pages/home/AboutUs';
import Contact from './pages/home/Contact';


const router = createBrowserRouter([
  { path: "/", element: <SignUp /> },
  {
    path: "/facility",
    element: <RootLayout />,
    children: [
      { path: ":id", element: <ComingSoon /> },
      { index: true, element: <Facility /> },
      { path: "facility-details", element: <FacilityDetails /> },
      { path: "booking", element: <BookingForm /> },
      { path: "booking-summary", element: <BookingSummary /> },
    ],
  },
]);

function App() {

  return (
    <div>
      <Navbar />
        <div>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/services' element={<Services />}/>
              <Route path='/about' element={<AboutUs />}/>
              <Route path='/contact' element={<Contact />}/>
          </Routes>
        </div>
        <Footer />
    </div>
  )
}

export default App;
