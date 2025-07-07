

function AboutCard({image, name, desc}) {
    return (
        <div className="bg-[#F9FAFB] drop-shadow-lg rounded-md  px-2 py-5">
            <div className="space-y-5">
                <div className="flex items-center justify-center space-x-3">
                    <p>{image}</p>
                    <h2 className="font-bold text-xl">{name}</h2>
                </div>
                <div className="font-semibold px-2">{desc}</div>
            </div>
        </div>
    )
}

export default AboutCard;