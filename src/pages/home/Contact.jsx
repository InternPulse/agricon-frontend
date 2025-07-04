import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { assets } from "../../assets/assets";
import ContactForm from "../../components/home/contact/ContactForm";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <div className="pt-25 pb-15 flex items-center justify-center px-5 lg:px-55">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="space-y-5">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{duration: 1.2}}
                    >
                        <img src={assets.contact} alt="contact_img" className="w-[100%] rounded-xl"/>
                    </motion.div>
                    <div className="space-y-3">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{duration: 1.4}}
                            className="text-2xl font-bold lg:text-4xl"
                        >
                            Get In Touch With Us
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{duration: 1.6}}
                        >
                            Tell us about your business needs, and we’ll find the best solution for you.
                        </motion.p>
                    </div>
                    <div>
                        <motion.ul
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{duration: 1.8}}
                            className="space-y-3 flex items-center gap-5">
                            <Link className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                                <FaFacebook className="text-blue-800"/> 
                            </Link>
                            <Link className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                                <FaLinkedin className="text-blue-800"/> 
                            </Link>
                            <Link className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                                <FaTwitter />
                            </Link>
                            <Link className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                                <FaInstagram className="text-red-800"/> 
                            </Link>
                        </motion.ul>
                    </div>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;