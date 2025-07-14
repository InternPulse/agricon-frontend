

function MetricsCards({ label, value, icon}) {
    return (
        <div className="border border-gray-400 bg-white rounded-md drop-shadow-xl">
            <div className="p-3">
                <div className="flex items-center justify-between">
                    <div className="space-y-3">
                        <h5 className="text-gray-600">{label}</h5>
                        <h2 className="font-bold text-xl">{value}</h2>
                    </div>
                    <div>{icon}</div>
                </div>
            </div>
      </div>  
    );
}

export default MetricsCards;