import { motion } from 'framer-motion'

function ContactForm() {
    
    return (
        <div className='lg:flex items-center justify-center w-full'>
            <div className='space-y-10'>
                <form>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{duration: 1.0}}
                        className="mb-5">
                        <input
                            className="w-full px-3 py-2 h-13 rounded-xl focus:outline-none placeholder:font-bold border border-[#FFAC00] lg:w-[170%]"
                            type="text"
                            name=""
                            placeholder="First Name"
                            required
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{duration: 1.2}}
                        className="mb-5">
                        <input
                            className="w-full px-3 py-2 h-13 rounded-xl focus:outline-none placeholder:font-bold border border-[#FFAC00] lg:w-[170%]"
                            type="text"
                            name=""
                            placeholder="Last Name"
                            required
                        />
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{duration: 1.4}}
                        className="mb-5">
                        <input
                            className="w-full px-3 py-2 h-13 rounded-xl focus:outline-none placeholder:font-bold border border-[#FFAC00] lg:w-[170%]"
                            type="text"
                            name=""
                            placeholder="Company Name"
                            required
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{duration: 1.6}}
                        className="mb-5">
                        <input
                            className="w-full px-3 py-2 h-13 rounded-xl focus:outline-none placeholder:font-bold border border-[#FFAC00] lg:w-[170%]"
                            type="email"
                            name=""
                            placeholder="Email Address"
                            required
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{duration: 1.8}}
                        className="mb-5">
                        <textarea
                                placeholder="Enter Your Message Here"
                                className='rounded-xl focus:outline-none border border-[#FFAC00] px-4 py-1 w-full resize-y min-h-[5.5rem] text-gray-900 placeholder:font-bold lg:w-[170%]'
                                style={{
                                    overflow: 'hidden', 
                                    height: 'auto',       
                                }}
                                onChange={(e) => {
                                    e.target.style.height = 'auto';
                                    e.target.style.height = `${e.target.scrollHeight}px`;
                                }}
                        />
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{duration: 2.0}}
                        className="w-full bg-[#02402D] text-white py-4 rounded-xl font-bold shadow-2xl lg:w-[170%]"
                        type="submit"
                    >
                        Send
                    </motion.button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;