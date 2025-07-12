import { FaWallet } from "react-icons/fa";
import MetricsCards from "./MetricsCard";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import BookingList from "./BookingList";
import { useCallback, useEffect, useState } from "react";
import { getFarmerTransaction } from "../../actions/getFarmerTransaction";
import { ClipLoader } from "react-spinners";

function History({ userId }) {
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(true); 
  

  const fetchAllTransactions = useCallback(async () => {
    setLoading(true); 
   
    try {
      const data = await getFarmerTransaction(userId);
      // console.log("Fetched transaction data:", data);
      const transactionsArray = Array.isArray(data) ? data : (data?.transaction || []);
      setTransaction(transactionsArray);
    } catch (err) {
      console.error("Error getting transaction:", err);
      setTransaction([]); 
    } finally {
      setLoading(false);
    }
  }, [userId]); 

  useEffect(() => {
    if (userId) {
      fetchAllTransactions();
    } else {
      setLoading(false);
      setTransaction([]);
    }
  }, [fetchAllTransactions, userId]);

  // Calculate metrics based on fetched transaction data
  const totalBookings = transaction.length;
  const successfulBookings = transaction.filter(t => t.status === 'success' || t.status === 'completed').length; 
  const failedBookings = transaction.filter(t => t.status === 'failed' || t.status === 'cancelled').length;     
  const metricsData = [
    {
      label: "Total Booking",
      value: totalBookings.toLocaleString(), 
      icon: <FaWallet size={32} className="text-blue-600"/>,
      id: "total", 
    },
    {
      label: "Successful Booking",
      value: successfulBookings.toLocaleString(),
      icon: <FiCheckCircle size={32} className="text-green-600"/>,
      id: "success",
    },
    {
      label: "Failed Booking",
      value: failedBookings.toLocaleString(),
      icon: <FiXCircle size={32} className="text-red-600"/>,
      id: "fail",
    },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClipLoader color="f4f4f4f4" size={30}/>
      </div>
    );
  }

  

  return (
    <div className="">
      <div className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5"> 
          {metricsData.map((card) => ( 
            <MetricsCards
              key={card.id} 
              label={card.label}
              value={card.value}
              icon={card.icon}
            />
          ))}
        </div>
        {/* Pass the transaction array to BookingList */}
        <BookingList transaction={transaction}/>
      </div>
    </div>
  );
}

export default History;