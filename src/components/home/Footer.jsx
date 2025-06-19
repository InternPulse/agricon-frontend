import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { assets } from '../../assets/assets'

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <section
            className="
                relative flex items-center justify-left
                bg-[url(/footer.png)] bg-cover bg-center bg-no-repeat px-10
            "
        >
            <div className="absolute inset-0 bg-white opacity-90"></div>

            <div className="relative  text-gray-500  py-15">
                <div className="grid grid-cols-1 gap-10  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <div>
                        <ul className='space-y-5'>
                            <li>
                                <img src={assets.agriconLogo} alt="Logo" className="w-[70%]"/>
                            </li>
                            <li className='flex items-center gap-2'>
                                <img src={assets.flagnigeria} alt="flag_nigeria"/> Nigeria
                            </li>
                            
                        </ul>
                    </div>
                    <div>
                    <ul className="space-y-3">
                            <li className="font-bold text-gray-900">Quick Links</li>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Contact Us</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div>
                    <ul className="space-y-3">
                            <li className="font-bold text-gray-900">Need Help?</li>
                            <li>Help Center</li>
                            <li>Security</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div>
                    <ul className="space-y-3">
                            <li className="font-bold text-gray-900">Contact Us</li>
                            <li>Info@Agricon.ng</li>
                            <li>(+234) 8138294545</li>
                            <li>37, Internpulse Av, Lagos state</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-3">
                            <li className="font-bold text-gray-900">Socials</li>
                            <li className="flex items-center gap-2">
                                <FaFacebook className="text-blue-800"/> Facebook
                            </li>
                            <li className="flex items-center gap-2">
                                <FaLinkedin className="text-blue-800"/> Linkedin
                            </li>
                            <li className="flex items-center gap-2">
                                <FaTwitter /> Twitter
                            </li>
                            <li className="flex items-center gap-2">
                                <FaInstagram className="text-red-800"/> Instagram
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-5 w-full" />
                <div className='md:flex items-center justify-between space-y-5'>
                    <div>&copy; {currentYear} Agricon. All rights reserved.</div>
                    <ul className='md:flex items-center justify-between gap-3 space-y-5 md:space-y-0'>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Footer;