


function ServiceCard({image, name, desc, icon}) {
    return (
        <div className="rounded-md bg-[##F9FAFB] px-2 py-5">
            <div className="text-center space-y-3">
                <p className="text-center bbg-[#F0F2F5]">{image}</p>
                <h2 className="font-bold text-xl">{name}</h2>
                <div className="font-semibold text-sm px-2">{desc}</div>
                <p>{icon}</p>
            </div>
        </div>
    )
}

export default ServiceCard;