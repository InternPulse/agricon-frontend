import React from "react";
import Hero from "../../components/home/Hero";
import OurService from "../../components/home/OurService";
import WhyAgricon from "../../components/home/WhyAgricon";
import HowAgriconWorks from "../../components/home/HowAgriconWorks";
import Testimonials from "../../components/home/Testimonials";
import Faq from "../../components/home/Faq";
import Cta from "../../components/home/Cta";
import Footer from "../../components/home/Footer";

function Home() {
    return (
        <>
            
            <Hero />
            <OurService />
            <WhyAgricon />
            <HowAgriconWorks />
            <Testimonials />
            <Faq />
            <Cta />
            <Footer />
        </>
    )
}
export default Home;