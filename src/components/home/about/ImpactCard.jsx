


function ImpactCard({icon, name, desc}) {
    return (
        <div className="sm:px-5">
            <div className="">
                <div className="flex items-center justify-center space-x-3">
                    <p>{icon}</p>
                    <div>
                        <h2 className="font-bold">{name}</h2>
                        <p className="font-semibold text-sm">{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImpactCard;