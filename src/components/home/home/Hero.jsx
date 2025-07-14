import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import heroImage from '/heroImage.jpg'; 

function Hero() {
    return (
        <section
            className="relative flex items-center justify-center h-screen overflow-hidden" 
            id='hero'
        >
            <img
                src={heroImage}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover z-0" 
            />

            <div className="absolute inset-0 bg-black opacity-50 z-10"></div> 

            <motion.div
                className="relative text-center text-white px-5  lg:px-50 z-20" 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: 'easeOut' }}
            >
                <div className="pt-15">
                    <motion.h1
                        className="text-3xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in-up"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Modern Infrastructure <br className=""/> for Smart Farming.
                    </motion.h1>
                    <motion.h6
                        className="text-lg px-5 md:text-xl mb-8 animate-fade-in-up delay-200 "
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                    >
                        Affordable infrastructure, Splitting costs, and coordinated logistics, all in one platform to help smallholder farmers thrive after the harvest.
                    </motion.h6>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <Link
                            to='/roles' className='hover:cursor-pointer bg-[#02402D] border border-[#FFAC00] rounded-full pl-5 py-3 font-bold'>
                            Get Started <FaAngleRight className="inline-block bg-[#FFAC00] rounded-full text-black mb-1 ml-2 mr-1" size={38}/>
                        </Link>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
}

export default Hero;