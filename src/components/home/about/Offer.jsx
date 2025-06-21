import AboutCard from "./AboutCard";

function Offer() {
    return (
        <div className="flex items-center justify-center py-15 px-5">
            <div className="space-y-6">
                <h1 className="text-center font-bold text-2xl sm:text-4xl">What We Offer</h1>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <AboutCard
                        image='icon'
                        name='Smart Infrastructure Access'
                        desc="Farmers and cooperatives can browse verified listings for storage, drying floors, transport, and processing units available by location, etc."
                    />
                    <AboutCard
                        image='icon'
                        name='Easy Booking & Coordination'
                        desc="No more manual calls or paperwork. Agricon lets users view availability, set reminders, and book      instantly—all in one dashboard."
                    />
                    <AboutCard
                        image='icon'
                        name='Market Intelligence & Planning Tools'
                        desc="Users get access to real-time market prices, infrastructure demand data, and simple reports that help them make informed decisions."
                    />
                    <AboutCard
                        image='icon'
                        name='Cooperative Support Tools'
                        desc="We empower cooperative leaders with group booking features, member management, and shared dashboards to coordinate faster."
                    />
                </div>
            </div>
        </div>
    );
}

export default Offer;