
import { useCallback, useEffect, useState } from "react";
import EmptyRecentBookings from "./EmptyRecentBookings";
import FacilityTransactionList from "./FacilityTransactionList";
import { getOperatortransaction } from "../../actions/getOperatorTransaction";
import EmptyTransaction from "./EmptyTransaction";


const FacilityTransaction = ({userId}) => {
  const [transaction, setTransaction] = useState([]);


  const fetchAllTransactions = useCallback(async () => {
    try {
      const data = await getOperatortransaction(userId);
      setTransaction(data?.facilities || []);
    } catch (error) {
      console.error("Error getting facility:", error);
      setTransaction([]); 
    } 
  }, [userId]);


  useEffect(() => {
    fetchAllTransactions();
  }, [fetchAllTransactions]);

  

  return (
    <div className="">
      {transaction.length > 0 ? (
        <FacilityTransactionList
          facilities={transaction}
        />
      ) : (
        <EmptyTransaction />
      )}
    </div>
  );
};


export default FacilityTransaction;