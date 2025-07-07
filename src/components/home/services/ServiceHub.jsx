import { assets, hubData } from "../../../assets/assets";
import ServiceCard from "./ServiceCard";
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'



function ServiceHub() {
    return (
        <div className="py-15 px-5 flex items-center justify-center sm:px-15">
            <div className="grid grid-cols-1 gap-5 xl:gap-32 lg:grid-cols-2">
                <div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{duration: 1.2, delay: 0.3}}
                    className="sm:hidden"
                >
                <img src={assets.servicehub}  alt="why_us"  className="w-[100%] lg:w-[100%] rounded-xl "/>
                </div>
                <div className="space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{duration: 0.8}}
                        className="text-2xl font-semibold  sm:text-4xl"
                    >
                        Agric<span className='text-[#FFAC00]'>o</span>n Service Hub
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{duration: 1.0}}
                    >
                        A one-stop hub for booking postharvest services, tracking availability, and connecting with nearby providers.
                    </motion.p>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {hubData.map((hub) => (
                            <motion.div
                                key={hub.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{duration: 1.4, delay: hub.id * 0.3}}
                                className="bg-[#F9FAFB] rounded-xl px-2 py-5"
                            >
                                    <img src={hub.image} alt='image_hub' className="mx-auto bg-[#F0F2F5] w-10 p-2 rounded-full"/>
                                    <h2 className="font-bold text-xl">{hub.name}</h2>
                                    <div className="font-semibold text-sm px-2">{hub.desc}</div>
                                    <FaArrowRight className="mx-auto bg-[#F0F2F5] p-2 rounded-full" size={28}/>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{duration: 1.2, delay: 0.3}}
                    className="hidden sm:inline-block"
                >
                    <img src={assets.servicehub} alt="why_us" className="w-[100%] lg:w-[80%] rounded-xl" />
                </motion.div>    
            </div>
        </div>
    )
}

export default ServiceHub;