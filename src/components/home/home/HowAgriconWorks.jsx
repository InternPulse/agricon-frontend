import { Link } from "react-router-dom";
import { assets, howWeWorkData } from "../../../assets/assets";
import { FaAngleRight } from "react-icons/fa";
import { motion } from 'framer-motion'


function HowAgriconWorks() {
    return (
        <div className="bg-[#F7F7F7] py-15 px-5 flex items-center justify-center sm:px-15" id='contact'>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <motion.div
                    className="lg:hidden inline-block mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                     whileInView={{opacity: 1, y: 0}}
                     transition={{duration: 1.0, delay: 0.3}}
                >
                    <img src={assets.howwework} alt="how_we_work" className="w-[100%]"/>
                </motion.div>
                <div className="space-y-5">
                    <motion.p
                        className="font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1.0, delay: 0.5}}
                    >
                        How AgriC<span className='text-[#FFAC00]'>o</span>n Works for You.
                    </motion.p>
                    <motion.h2
                        className="text-xl font-semibold  sm:text-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1.0, delay: 0.7}}
                    >
                        Simple Steps to Save Your Harvest
                    </motion.h2>
                    {howWeWorkData.map((items) => (
                    <motion.div
                        key={items.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1.0, delay: items.id * 0.1}}
                        className="pl-5 flex items-center gap-5">
                        <p className="-mt-24 font-bold md:-mt-12">{items.id}</p>
                        <div className="">
                            <h5 className="font-bold">{items.title}</h5>
                            <p>{items.description}</p>
                        </div>
                    </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.0, delay: 0.9}}
                    >
                        <Link to='/roles'
                            className='hover:cursor-pointer text-green-100 bg-[#02402D] border border-[#FFAC00]      rounded-full pl-5 py-3 font-bold'
                        >
                            Find Your Facility <FaAngleRight className="inline-block bg-[#FFAC00] rounded-full text-black mb-1 ml-2 mr-1" size={38}/>
                        </Link>
                    </motion.div>
                </div>
                <motion.div
                    className="hidden lg:inline-block"
                    initial={{ opacity: 0, y: 20 }}
                     whileInView={{opacity: 1, y: 0}}
                     transition={{duration: 1.0, delay: 0.3}}
                >
                    <img src={assets.howwework}  alt="how_we_work" className="w-[90%]" />
                </motion.div>
            </div>
        </div>
    )
}

export default HowAgriconWorks;