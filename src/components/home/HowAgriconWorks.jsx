import { Link } from "react-router-dom";
import { assets, howWeWorkData } from "../../assets/assets";
import { FaAngleRight } from "react-icons/fa";


function HowAgriconWorks() {
    return (
        <div className="bg-[#F7F7F7] py-15 px-5 flex items-center justify-center sm:px-15" id='contact'>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="lg:hidden inline-block mx-auto">
                    <img src={assets.howwework} alt="how_we_work" className="w-[100%]"/>
                </div>
                <div className="space-y-5">
                    <p className="font-bold">How AgriC<span className='text-[#FFAC00]'>o</span>n Works for You.</p>
                    <h2 className="text-xl font-semibold  sm:text-4xl">
                        Simple Steps to Save Your Harvest
                    </h2>
                    {howWeWorkData.map((items) => (
                    <div
                        key={items.id}
                        className="pl-5 flex items-center gap-5">
                        <p className="-mt-24 font-bold md:-mt-12">{items.id}</p>
                        <div className="">
                            <h5 className="font-bold">{items.title}</h5>
                            <p>{items.description}</p>
                        </div>
                    </div>
                    ))}
                    <Link to='/signup'
                        className='hover:cursor-pointer text-green-100 bg-[#02402D] border border-[#FFAC00]      rounded-full pl-5 py-3 font-bold'
                    >
                        Find Your Facility <FaAngleRight className="inline-block bg-[#FFAC00] rounded-full text-black mb-1 ml-2 mr-1" size={38}/>
                    </Link>
                </div>
                <div className="hidden lg:inline-block">
                    <img src={assets.howwework}  alt="how_we_work" className="w-[90%]" />
                </div>
            </div>
        </div>
    )
}

export default HowAgriconWorks;