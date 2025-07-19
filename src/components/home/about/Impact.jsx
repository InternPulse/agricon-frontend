import { FaArrowRight } from "react-icons/fa";
import { assets } from "../../../assets/assets";
// import ImpactCard from "./ImpactCard";
import { motion } from 'framer-motion';

function Impact() {

    const ImpactData = [
        {
            id:1,
            icon: <FaArrowRight />,
            name: "Reduce postharvest losses by 30%",
            desc: "We're helping farmers cut crop loss through better access to storage, and infrastructure."
        },
        {
            id: 2,
            icon: <FaArrowRight />,
            name:"Empower 10,000+ Farmers",
            desc: "Our tools support farmers with smarter planning, booking, and coordination."        
        },
        {
            id: 3,
            icon: <FaArrowRight />,
            name: "Improve Access to Market",
            desc: "By streamlining postharvest processes, we reduce delays and help farmers earn more"
            
        },
        {
            id: 4,
            icon: <FaArrowRight />,
            name: "Provide Smart, Data-Backed Tools",
            desc: "We offer real-time pricing, availability, and insights to guide better postharvest decisions."
            
        }
    ]
    return (
        <div className="flex items-center justify-center py-15 px-5">
            <div className="space-y-10">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{duration: 1.0}}
                    className="text-center font-bold text-2xl sm:text-4xl">Our Impact Goals</motion.h1>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{duration: 1.4, delay: 0.1}}
                    >
                        <img src={assets.impact} alt="impact_img" className="rounded-xl"/>
                    </motion.div>
                    <div className="flex items-center justify-center py-5 md:justify-left">
                        <div className="space-y-5">
                            {ImpactData.map((impact) => (
                                <motion.div
                                    key={impact.key}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{duration: 1.6, delay: impact.id * 0.2}}
                                    className="sm:px-8 md:px-3 md:pr-45 lg:px-8"
                                >
                                        <div className="flex items-center justify-center space-x-3">
                                            <p>{impact.icon}</p>
                                            <div className="text-left md:pr">
                                                <h2 className="font-bold text-lg">{impact.name}</h2>
                                                <p className="font-semibold text-md">{impact.desc}</p>
                                            </div>
                                        </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Impact;