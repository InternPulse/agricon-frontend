import { motion } from 'framer-motion';
import heroImage from '/heroImage.webp'; 

function ServiceHero() {
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
                className="relative text-center text-white lg:px-80 z-20" 
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
                        Services
                    </motion.h1>
                </div>
            </motion.div>
        </section>
    );
}

export default ServiceHero;