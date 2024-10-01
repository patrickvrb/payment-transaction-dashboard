import { PAYMENT_TRANSACTIONS } from "../mocks/payment-transactions";
import { ApiResponse } from "../types/ApiResponse";
import { Transaction } from "../types/Transaction";

const FAKE_RESPONSE_TIME_MS = 500;

export async function Get(path: string): Promise<ApiResponse<Transaction[] | string>> {
    try {
        const response = await new Promise<Transaction[]>(resolve => {
            setTimeout(() => {
                resolve(PAYMENT_TRANSACTIONS);
            }, FAKE_RESPONSE_TIME_MS)
        })

        const fakeResponseData: ApiResponse<Transaction[]> = {
            code: 200,
            response: response
        }

        return fakeResponseData;
    } catch {
        return {
            code: 500,
            response: `There was an error making this request on path ${path}`,
            errorMessage: 'Service X refused to operate on Y database'
        }
    }

}