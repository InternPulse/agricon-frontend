import { useState } from "react";
import { FaqData } from "../../../assets/assets";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { motion } from 'framer-motion'


function Faq() {

    const [expandedIndex, setExpandedIndex] = useState(null);
    
      const toggleAccordion = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
      };

    
    return (
        <div className="bg-[#F7F7F7] w-full py-15  flex items-center justify-center sm:px-15">
            <div className="space-y-4">
                <div className="text-center space-y-4 mb-10">
                    <motion.p className="font-bold text-[#02402D]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1.0, delay: 0.3}}
                    >
                            Discover the Agric<span className='text-[#FFAC00]'>o</span>n Journey <br className="sm:hidden"/> Through Our Users.
                    </motion.p>
                    <motion.h2
                        className="text-2xl font-bold sm:text-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1.0, delay: 0.5}}
                    >
                        Frequently Asked Questions 
                    </motion.h2>
                </div>
                <div className="px-5 space-y-5 lg:px-80">
                    {FaqData.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 1.0, delay: faq.id * 0.1 }}
                            className="border rounded-xl p-5 w-[100%]"
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="flex items-center justify-between gap-10">
                                <h4 className="text-lg font-semibold text-[#02402D]">{faq.question}</h4>
                                <p>
                                    {expandedIndex === index ? <FaAngleUp className='w-3'/> : <FaAngleDown className='w-3'/>}
                                </p>
                            </div>
                            {expandedIndex === index && (
                             <div>
                                <hr className="text-gray-400 mt-2 mb-5"/>
                                <p>{faq.answer}</p>
                             </div>
                            )}
                    </motion.div>
                    ))}
                </div>
            </div>    
        </div>        
    );
}

export default Faq;