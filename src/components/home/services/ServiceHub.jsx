import { assets, hubData } from "../../../assets/assets";
import ServiceCard from "./ServiceCard";
import { FaArrowRight } from 'react-icons/fa'



function ServiceHub() {
    return (
        <div className="py-15 px-5 flex items-center justify-center sm:px-15">
            <div className="grid grid-cols-1 gap-5 xl:gap-32 lg:grid-cols-2">
                <div
                    className="sm:hidden"
                >
                <img src={assets.servicehub}  alt="why_us"  className="w-[100%] lg:w-[100%] rounded-xl "/>
                </div>
                <div className="space-y-6">
                    <h2
                        className="text-2xl font-semibold  sm:text-4xl"
                    >
                        Agric<span className='text-[#FFAC00]'>o</span>n Service Hub
                    </h2>
                    <p

                    >
                        A one-stop hub for booking postharvest services, tracking availability, and connecting with nearby providers.
                    </p>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {hubData.map((hub) => (
                            <div
                                key={hub.id}
                                className="bg-[#F9FAFB] rounded-xl"
                            >
                                <ServiceCard
                                    image={<img src={hub.image} alt='image_hub' className="mx-auto bg-[#F0F2F5] w-10 p-2 rounded-full"/>}
                                    name={hub.name}
                                    desc={hub.desc}
                                    icon={<FaArrowRight className="mx-auto bg-[#F0F2F5] p-2 rounded-full" size={28}/>}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="hidden sm:inline-block"
                >
                    <img src={assets.servicehub} alt="why_us" className="w-[100%] lg:w-[80%] rounded-xl" />
                </div>    
            </div>
        </div>
    )
}

export default ServiceHub;