import BookingForm from "./pages/infrastructure/BookingForm";
import ComingSoon from "./pages/infrastructure/ComingSoon";
import FacilityDetails from "./pages/infrastructure/FacilityDetails";
import Facility from "./pages/infrastructure/Facility";
import RootLayout from "./pages/infrastructure/Root";
import SignUp from "./pages/signUp/SignUp";
import BookingSummary from "./pages/infrastructure/BookingSummary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FacilityProvider from "./components/infrastructure/FacilityContext";

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
    <FacilityProvider>
      <RouterProvider router={router} />
    </FacilityProvider>
  );
}

export default App;
