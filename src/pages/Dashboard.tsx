import { useEffect, useState } from 'react';
import { usePaymentManager } from '../hooks/usePaymentManager';
import { Transaction } from '../types/Transaction';

function Dashboard() {
    const { getTransactionList } = usePaymentManager();
    const [transactionList, setTransactionList] = useState<Transaction[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [filteredData, setFilteredData] = useState<Transaction[]>([]);


    const loadTransactionList = async () => {
        try {
            const list = await getTransactionList();
            setTransactionList(list);
            setFilteredData(list);
        } catch {
            alert('Oops, there was an error. Please try again later.')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        loadTransactionList()
    }, [])


    if (isLoading) {
        return <div>Loading... Please wait</div>
    }

    const filterTransaction = (startDate: string, endDate: string) => {
        const filteredDates = transactionList.filter(transaction => {
            const date = new Date(transaction.date);
            return date >= new Date(startDate) && date <= new Date(endDate);
        })

        setFilteredData(filteredDates);
    }

    const clearFilter = () => {
        setFilteredData(transactionList)
    }


    return (
        <>
            <div>
                <label>
                    Start Date:{" "}
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </label>
            </div>

            <div>
                <label>
                    End Date:{" "}
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </label>
            </div>

            <button onClick={() => filterTransaction(startDate, endDate)}> Filter </button>
            <button onClick={() => clearFilter()}>Clear</button>
            <br />

            {
                filteredData.map((transaction, idx) => {
                    return <><div key={idx}>
                        <b>Transaction id:</b>, {transaction.id} <b>Amount:</b>, {transaction.amount} <b>Transaction Date:</b>, {transaction.date.toDateString()}, <b>Transaction description:</b>, {transaction.description}
                    </div><br /></>
                })
            }

        </>
    )
}

export default Dashboard;
