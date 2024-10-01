import { Transaction } from "../types/Transaction";

export const PAYMENT_TRANSACTIONS: Transaction[] = [
    {
        id: 1,
        date: new Date(2024, 9, 17),
        description: 'Fancy clothes from X store',
        amount: 205.54
    }, {
        id: 2,
        date: new Date(2024, 9, 4),
        description: 'Youtube Premium subscription',
        amount: 50.50
    }, {
        id: 3,
        date: new Date(2024, 8, 29),
        description: 'New iPhone 16',
        amount: 678.99
    }, {
        id: 4,
        date: new Date(2024, 8, 23),
        description: 'Dinner at restaurant Y',
        amount: 100
    },
    {
        id: 5,
        date: new Date(2024, 10, 22),
        description: 'Candy from candy shop Z',
        amount: 2.89
    },
]