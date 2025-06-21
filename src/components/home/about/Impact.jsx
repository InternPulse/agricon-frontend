import { FaArrowRight } from "react-icons/fa";
import { assets } from "../../../assets/assets";
import ImpactCard from "./ImpactCard";

function Impact() {
    return (
        <div className="flex items-center justify-center py-15 px-5">
            <div className="space-y-10">
                <h1 className="text-center font-bold text-2xl sm:text-4xl">Our Impact Goals</h1>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <div>
                        <img src={assets.impact} alt="impact_img" className="rounded-xl"/>
                    </div>
                    <div className="flex items-center py-5">
                        <div className="space-y-5">
                            <ImpactCard
                                icon={<FaArrowRight />}
                                name="Reduce postharvest losses by 30%"
                                desc="We're helping farmers cut crop loss through better access to storage, transport, and infrastructure."
                            />
                            <ImpactCard
                                icon={<FaArrowRight />}
                                name="Empower 10,000+ Farmers"
                                desc="Our tools support farmers and cooperatives with smarter planning, booking, and coordination."
                            />
                            <ImpactCard
                                icon={<FaArrowRight />}
                                name="Speed Up Delivery to Market"
                                desc="By connecting farmers to trusted transport providers, we reduce delays and improve profits."
                            />
                            <ImpactCard
                                icon={<FaArrowRight />}
                                name="Provide Smart, Data-Backed Tools"
                                desc="We offer real-time pricing, availability, and insights to guide better postharvest decisions."
                            />
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Impact;