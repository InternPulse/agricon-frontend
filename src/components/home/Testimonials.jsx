import { FaAngleRight } from "react-icons/fa";
import { VscQuote } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

function Testimonials() {
    return (
        <div className="bg-white w-full py-15 px-5 flex items-center justify-center sm:px-15">
            <div className="space-y-4">
                <div className="text-center space-y-4 mb-10">
                    <p className="font-bold">
                            Discover the Agric<span className='text-[#FFAC00]'>o</span>n Journey <br className="sm:hidden"/> Through Our Users.
                    </p>
                    <h2 className="text-2xl font-bold sm:text-4xl">
                        Real Stories. Real Impact.
                    </h2>
                </div>
                
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:px-20">
                        <img src={assets.user1} alt="" className="w-[100%] lg:w-[100%] lg:pl-50"/>
                        <div className="flex py-10 items-center justify-center text-2xl">
                            <div>
                                <VscQuote className="text-[#FFAC00]"/>
                                <p className="pl-10">
                                    We struggled with inefficient irrigation for years. Agricon designed and installed a drip system that cut water use by 40% and doubled our harvest. Their team truly understands the land.
                                </p>
                            </div>
                        </div>
                    </div>
                
                <div className="flex items-center justify-center">
                <Link to='/signup'
                    className='hover:cursor-pointer flex items-center justify-between text-green-100 bg-[#02402D] w-full rounded-xl px-5 py-5 font-bold'
                >
                        <div className="text-center flex-2/3">
                            <h3 className="text-[#FFAC00] text-sm sm:text-2xl">Yings Adedotun Haystreet</h3>
                            <p className="sm:-ml-50 -ml-20">Lagos Island</p>
                        </div>
                        <FaAngleRight className="inline-block rounded-full text-green-100 mb-1 ml-2 mr-1 " size={34} />
                </Link>
                </div>
            </div>
            
        </div>
    );
}

export default Testimonials;