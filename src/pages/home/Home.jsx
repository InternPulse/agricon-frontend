import React from "react";
import Navbar from "../../components/home/Navbar";
import Hero from "../../components/home/Hero";
import OurService from "../../components/home/OurService";
import WhyAgricon from "../../components/home/WhyAgricon";
import HowAgriconWorks from "../../components/home/HowAgriconWorks";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <OurService />
            <WhyAgricon />
            <HowAgriconWorks />
        </>
    )
}
export default Home;