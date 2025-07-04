
import { motion } from 'framer-motion'
import { offerData } from '../../../assets/assets';


function OurService() {
    return (
        <div className='px-5 py-15 bg-[#F7F7F7] sm:px-15' id='services'>
            <motion.div
                className='text-center space-y-6 mb-8'
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{duration: 1, delay: 0.5}}
            >
                <h6 className='font-bold text-[#02402D]'>Our Services</h6>
                <h1 className='text-2xl font-bold'>What Agric<span className='text-[#FFAC00]'>o</span>n Offers</h1>
            </motion.div>
            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'
            > 
                {offerData.map((offer) => (
                    <motion.div
                        key={offer.id}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1.0, delay: offer.id * 0.3 }}
                        className="border border-gray-400 rounded-xl py-6 px-3 w-[100%] text-center space-y-5"
                        >
                            <img src={offer.icon} className='mx-auto bg-[#8FBFFA3D] rounded-full p-3'/>
                            <h2 className="font-bold text-xl">{offer.name}</h2>
                            <div className="font-semibold px-2">{offer.description}</div>
                    </motion.div> 
                ))}
            </motion.div>
        </div>
    )
}

export default OurService;