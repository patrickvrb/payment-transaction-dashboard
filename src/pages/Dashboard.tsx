import React, { useEffect, useState } from 'react'
import { usePaymentManager } from '../hooks/usePaymentManager';
import { Transaction } from '../types/Transaction';

function Dashboard() {
    const { getTransactionList } = usePaymentManager();
    const [transactionList, setTransactionList] = useState<Transaction[]>([])
    const [isLoading, setIsLoading] = useState(true);

    const loadTransactionList = async () => {
        try {
            const list = await getTransactionList();
            setTransactionList(list);
        } catch {
            alert('Oops, there was an error. Please try again later.')
        }
    }

    useEffect(() => {
        loadTransactionList()
    }, [])


    if (isLoading) {
        return <div>Loading... Please wait</div>
    }

    return (
        <div>dashboard</div>
    )
}

export default Dashboard;
