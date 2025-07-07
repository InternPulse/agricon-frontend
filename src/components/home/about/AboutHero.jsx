import { assets } from "../../../assets/assets";
import { motion } from 'framer-motion'


function AboutHero() {
    return (
        <div className="px-5 flex items-center justify-center pt-25 pb-15">
            <div className="grid grid-cols-1 gap-15 sm:grid-cols-2">
                <div className="lg:space-y-50 xl:space-y-54 space-y-10 pt-10">
                    <div className="space-y-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{duration: 1.0}}
                            className="text-2xl font-bold  sm:text-4xl">
                            About Agric<span className='text-[#FFAC00]'>o</span>n
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{duration: 1.2}}
                        >
                            At Agricon, we believe that farming doesn't stop at the harvest, it’s just the beginning. Every year, thousands of Nigerian farmers lose crops, income, and opportunities due to poor infrastructure, disorganized logistics, and a lack of trusted systems to manage what comes after harvest. We’re here to change that.
                        </motion.p>
                        <div className="space-y-2">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{duration: 1.4}}
                            >
                                Agricon is a digital platform that helps smallholder farmers and cooperatives access and book critical postharvest infrastructures such as storage facilities, transport, and processing centers directly from their devices. We make it easier to manage logistics, track availability, and plan smarter.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{duration: 1.4}}
                            >
                                Built for farmers. Backed by data. Designed for impact.
                            </motion.p>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{duration: 1.4, delay: 0.1}}
                    >
                        <img src={assets.about} alt="about_img" className="rounded-xl"/>
                    </motion.div>
                </div>
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{duration: 1.4, delay: 0.1}}
                    >
                        <img src={assets.mission} alt="mission_img" className="rounded-xl"/>
                    </motion.div>
                    <div className="space-y-5">
                            <motion.h1 
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{duration: 1.5}}
                                className="text-2xl font-bold  sm:text-4xl">
                                Our Mission
                            </motion.h1>
                            <motion.p
                                 initial={{ opacity: 0, y: 20 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{duration: 1.7}}
                            >
                                To create a more efficient and inclusive agricultural value chain by providing technology-driven solutions that support postharvest success for every farmer.
                                We are committed to reducing waste, increasing income for smallholders, and supporting sustainable food systems through simple, accessible digital tools.
                            </motion.p>
                    </div>        
                </div>
            </div>
        </div>
    );
}

export default AboutHero;