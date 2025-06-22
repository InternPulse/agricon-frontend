import { Outlet } from "react-router-dom";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";



function RootLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default RootLayout;