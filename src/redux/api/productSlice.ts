import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://localhost:8080/v1';
const token = sessionStorage.getItem('token');

export const productApi= createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl, headers: {Authorization: `Bearer ${token}`}}),
    
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: `${baseUrl}/products`,
                method: 'GET',
            }),
        })
    })
});

export const {
    useGetProductsQuery
} = productApi