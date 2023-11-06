import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://localhost:8080/v1';

export const authApi= createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl, headers: {}}),
    
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (body) =>({
                url: `${baseUrl}/user`,
                method: 'PUT',
                body: body,
            }),
        }),
        login: builder.mutation({
            query: (body) => ({
                url: `${baseUrl}/user`,
                method: 'POST',
                body: body,
            }),
        })
    })
});

export const {
    useLoginMutation,
    useSignUpMutation
} = authApi