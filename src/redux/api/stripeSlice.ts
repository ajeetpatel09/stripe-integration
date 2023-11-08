import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://localhost:8080/v1';
const token = sessionStorage.getItem('token');
console.log(token);


export const stripeApi = createApi({
    reducerPath: 'stripeApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl, headers: {Authorization: `Bearer ${token}`}}),

    endpoints: (builder) => ({
        checkout: builder.mutation({
            query: (body) => ({
                url: `${baseUrl}/create-checkout`,
                method: 'POST',
                body: body
            }),
        }),
    })
});

export const {
    useCheckoutMutation,
} = stripeApi;