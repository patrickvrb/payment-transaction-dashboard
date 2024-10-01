import { Get } from "../services/api";
import { Transaction } from "../types/Transaction";


export const usePaymentManager = () => {

    const getTransactionList = async (): Promise<Transaction[]> => {
        const res = await Get('/transactions');

        if (res.code !== 200) {
            throw new Error('Failed to load transactions list');
        }

        return res.response as Transaction[];

    }


    return { getTransactionList };
}