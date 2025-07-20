


function ImpactCard({icon, name, desc}) {
    return (
        <div className="sm:px-5">
            <div className="">
                <div className="flex items-center justify-center space-x-3">
                    <p>{icon}</p>
                    <div className="text-left md:pr">
                        <h2 className="font-bold text-lg">{name}</h2>
                        <p className="font-semibold text-md">{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImpactCard;