import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

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

            <div className="relative text-gray-500 py-15">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
                            <li className="font-bold text-gray-900 block">Quick Links</li>
                            <Link to='/' className="cursor-pointer hover:text-gray-900 block">Home</Link>
                            <Link to='/services' className="cursor-pointer hover:text-gray-900 block">Services</Link>
                            <Link to='/about' className="cursor-pointer hover:text-gray-900 block">About Us</Link>
                            <Link to='/contact' className="cursor-pointer hover:text-gray-900 block">Contact Us</Link>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-3">
                            <li className="font-bold text-gray-900">Need Help?</li>
                            <li><a href="#" className="cursor-pointer hover:text-gray-900">Help Center</a></li>
                            <li><a href="#" className="cursor-pointer hover:text-gray-900">Security</a></li>
                            <li><a href="#" className="cursor-pointer hover:text-gray-900">Privacy</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-3">
                            <li className="font-bold text-gray-900">Contact Us</li>
                            <li>Info@agricon.com.ng</li>
                            <li>(+234) 8138294545</li>
                            <li>37, Internpulse Av, Lagos state</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-3">
                            <li className="font-bold text-gray-900">Socials</li>
                            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                                <FaFacebook className="text-blue-800"/> Facebook
                            </li>
                            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                                <FaLinkedin className="text-blue-800"/> Linkedin
                            </li>
                            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                                <FaTwitter /> Twitter
                            </li>
                            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                                <FaInstagram className="text-red-800"/> Instagram
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-5 w-full" />
                <div className='md:flex items-center justify-between space-y-5'>
                    <div>&copy; {currentYear} Agricon. All rights reserved.</div>
                    <ul className='md:flex items-center justify-between gap-3 space-y-5 md:space-y-0'>
                        <li><a href="#" className="cursor-pointer hover:text-gray-900">Privacy Policy</a></li>
                        <li><a href="#" className="cursor-pointer hover:text-gray-900">Terms of Service</a></li>
                        <li><a href="#" className="cursor-pointer hover:text-gray-900">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Footer;
