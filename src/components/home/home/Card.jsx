
function Card({image, name, desc}) {
    return (
        <div className="bg-[#FFFFFF] border rounded-md border-[#77D5B8] px-2 py-5">
            <div className="text-center space-y-5">
                <p>{image}</p>
                <h2 className="font-bold text-xl">{name}</h2>
                <div className="font-semibold px-2">{desc}</div>
            </div>
        </div>
    )
}

export default Card;