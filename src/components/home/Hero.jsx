import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section
            className="
                relative flex items-center justify-center h-screen 
                bg-[url(/heroImage.jpg)] bg-cover bg-center bg-no-repeat
            "
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative  text-center text-white lg:px-80">
                <div className="pt-15">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in-up">
                        Modern Infrastructure <br className="lg:hidden"/> for Smart Farming
                    </h1>
                    <p className="text-lg px-5 md:text-xl mb-8 animate-fade-in-up delay-200 ">
                    Affordable infrastructure, Splitting costs, and coordinated logistics, all in one platform to help smallholder farmers thrive after the harvest.
                    </p>
                    <Link to='/signup' className='hover:cursor-pointer bg-[#02402D] border border-[#FFAC00] rounded-full pl-5 py-3 font-bold'>
                        Get Started <FaAngleRight className="inline-block bg-[#FFAC00] rounded-full text-black mb-1 ml-2 mr-1" size={38}/>
                    </Link>
                    
                </div>
            </div>
        </section>
    )
}

export default Hero;