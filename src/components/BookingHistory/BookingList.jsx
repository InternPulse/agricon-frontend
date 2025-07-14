import React, { useState } from 'react'; 
import EmptyTransaction from "../Dashboard/EmptyTransaction";


function BookingList({ transaction }) { 
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    // Filter transactions based on search queries and status
    const filteredTransactions = transaction.filter(item => {
        const matchesSearch = item.invoice.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              item.facility.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesStatus = statusFilter === "" || 
                              item.status.toLowerCase() === statusFilter.toLowerCase();

        //placeholder
        const matchesDateRange = true; 

        return matchesSearch && matchesStatus && matchesDateRange;
    });

    return (
        <div className="bg-white border border-gray-400 rounded-md px-5 py-5 pt-10">
            <div className="space-y-5">
                <h1 className="text-xl font-bold text-gray-500">Booking List</h1>
                {transaction.length > 0 ? (
                    <div className="space-y-5">
                        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4"> 
                            <div className="w-full md:w-auto flex flex-col md:flex-row gap-5"> 
                                <input
                                    type="search"
                                    name="bookings"
                                    placeholder="Search bookings (invoice, facility)"
                                    className="border border-gray-300 outline-none p-2 rounded-md w-full md:w-auto"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    aria-label="Search bookings"
                                />
                                <input
                                    type="search" 
                                    name="status"
                                    placeholder="Filter by Status"
                                    className="border border-gray-300 outline-none p-2 rounded-md w-full md:w-auto"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    aria-label="Filter by Status"
                                />
                            </div>
                            <div className="w-full md:w-auto flex items-center justify-end">
                                <input
                                    type="date"
                                    className="border border-gray-300 p-2 rounded-md w-full md:w-auto"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    aria-label="Start date"
                                />
                                <span className="mx-2 text-gray-500">to</span>
                                <input
                                    type="date"
                                    className="border border-gray-300 p-2 rounded-md w-full md:w-auto"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    aria-label="End date"
                                />
                            </div>
                        </div>
                        <div className="border border-gray-300 bg-gray-400 rounded-md overflow-x-auto"> 
                            <table className="w-full min-w-max"> 
                                <thead>
                                    <tr>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Invoice</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Infrastructure</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Amount</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date &amp; Time</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredTransactions.length > 0 ? (
                                        filteredTransactions.map((item) => (
                                            <tr key={item.id}> 
                                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">{item.invoice}</td>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">{item.facility}</td>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">{item.total}</td>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800">{item.date}</td>
                                                <td className="px-4 py-4 whitespace-nowrap text-sm">
                                                    <span className={`py-1 px-3 rounded-full text-xs font-medium 
                                                        ${item.status?.toLowerCase() === 'success' || item.status?.toLowerCase() === 'completed'
                                                            ? 'bg-green-100 text-green-600'
                                                            : item.status?.toLowerCase() === 'pending'
                                                                ? 'bg-yellow-100 text-yellow-600'
                                                                : 'bg-red-100 text-red-600'
                                                        }`}
                                                    >
                                                        {item.status || 'N/A'}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="px-4 py-8 text-center text-gray-500">
                                                No matching bookings found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <EmptyTransaction />
                )}
            </div>
        </div>
    );
}

export default BookingList;