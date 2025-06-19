import { useState } from "react";
import { FaqData } from "../../assets/assets";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


function Faq() {

    const [expandedIndex, setExpandedIndex] = useState(null);
    
      const toggleAccordion = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
      };

    
    return (
        <div className="bg-[#F7F7F7] w-full py-15 px-5 flex items-center justify-center sm:px-15">
            <div className="space-y-4">
                <div className="text-center space-y-4 mb-10">
                    <p className="font-bold text-[#02402D]">
                            Discover the Agric<span className='text-[#FFAC00]'>o</span>n Journey <br className="sm:hidden"/> Through Our Users.
                    </p>
                    <h2 className="text-2xl font-bold sm:text-4xl">
                        Frequently Asked Questions 
                    </h2>
                </div>
                <div className="px-5 space-y-5 lg:px-80">
                    {FaqData.map((faq, index) => (
                        <div
                            key={faq.id}
                            className="border rounded-xl p-5 w-[100%]"
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="flex items-center justify-between gap-10">
                                <h4 className="text-lg font-semibold">{faq.question}</h4>
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
                    </div>
                    ))}
                </div>
            </div>    
        </div>        
    );
}

export default Faq;