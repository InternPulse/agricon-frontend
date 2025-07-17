import { motion } from 'framer-motion'
import { aboutOffer } from '../../../assets/assets';



function Offer() {

   

    return (
        <div className="flex items-center justify-center py-15 px-5">
            <div className="space-y-10">
                <motion.h1
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{duration: 1.0}}
                    className="text-center font-bold text-2xl sm:text-4xl"
                >
                    What We Offer
                </motion.h1>
                <div
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                >
                    {aboutOffer.map((about) => (   
                        <motion.div
                            key={about.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{duration: 1.4, delay: about.id * 0.3}}
                            className="bg-[#F9FAFB] drop-shadow-lg rounded-md  px-3 py-3">
                            <div className="flex items-center  space-x-3">
                                <img src={about.image} alt={about.name} className="w-12 h-12 object-contain bg-[#02402D] px-3 rounded-full" /> 
                                <h2 className="font-bold text-xl">{about.name}</h2>
                            </div>
                            <div className="font-semibold px-1 pt-3">{about.desc}</div>
                        </motion.div>
                    ))}     
                </div>    
            </div>
        </div>
    );
}

export default Offer;