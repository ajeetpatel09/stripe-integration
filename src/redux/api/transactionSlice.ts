import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseUrl = 'http://localhost:8080/v1';

export const transactionApi = createApi({
    reducerPath: 'transactionApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl, headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`}}),
    endpoints: (builder) => ({
        getAllTransactions: builder.query({
            query: () => ({
                url: `${baseUrl}/transactions`,
                method: 'GET',
            }),

        }),
        getUserTransaction: builder.query({
            query: () => ({
                url: `${baseUrl}/user-transactions`,
                method: 'GET',
            })
        })
    })
})

export const {
    useGetAllTransactionsQuery,
    useGetUserTransactionQuery
} = transactionApi;