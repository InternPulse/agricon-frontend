import React from "react";
import Hero from "../../components/home/home/Hero";
import OurService from "../../components/home/home/OurService";
import WhyAgricon from "../../components/home/home/WhyAgricon";
import HowAgriconWorks from "../../components/home/home/HowAgriconWorks";
import Testimonials from "../../components/home/home/Testimonials";
import Faq from "../../components/home/home/Faq";
import Cta from "../../components/home/home/Cta";

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
        </>
    )
}
export default Home;