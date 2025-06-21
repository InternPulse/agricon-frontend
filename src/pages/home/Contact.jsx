import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { assets } from "../../assets/assets";
import ContactForm from "../../components/home/contact/ContactForm";


function Contact() {
    return (
        <div className="pt-25 pb-15 flex items-center justify-center px-5 lg:px-55">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="space-y-5">
                    <div>
                        <img src={assets.contact} alt="contact_img" className="w-[100%] rounded-xl"/>
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-2xl font-bold lg:text-4xl">Get In Touch With Us</h1>
                        <p>Tell us about your business needs, and we’ll find the best solution for you.</p>
                    </div>
                    <div>
                        <ul className="space-y-3 flex items-center gap-5">
                            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                                <FaFacebook className="text-blue-800"/> 
                            </li>
                            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                                <FaLinkedin className="text-blue-800"/> 
                            </li>
                            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                                <FaTwitter />
                            </li>
                            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                                <FaInstagram className="text-red-800"/> 
                            </li>
                        </ul>
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