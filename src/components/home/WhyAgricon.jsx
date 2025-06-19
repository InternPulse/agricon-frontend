import { assets } from "../../assets/assets";


function WhyAgricon() {
    return (
        <div className="py-15 px-5 flex items-center justify-center sm:px-15" id='about'>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div>
                    <img src={assets.whyimage}  alt="why_us"  className="w-[100%] lg:w-[90%]"/>
                </div>
                <div className="space-y-8">
                    <p className="font-bold">Why Farmers Choose AgriC<span className='text-[#FFAC00]'>o</span>n ?</p>
                    <h2 className="text-2xl font-semibold leading-snug sm:text-4xl">Solving your biggest profit killers by helping to save your harvest, earn more and work smarter.</h2>
                    <p>
                        AgriCon empowers smallholder farmers with affordable, shared access to essential tools like dryers and cold rooms no need for costly infrastructure. Our cooperative booking system reduces waste and boosts profits, with AI-powered insights to help you sell at the best time. Built for real farming communities, AgriCon works even on basic phones and limited internet. From booking to transport to market tracking, everything is in one simple platform. The result? Less waste, more income, and better productivity. That’s why farmers trust us.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhyAgricon;