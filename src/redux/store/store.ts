import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import { authApi } from '../api/authSlice';
import { productApi } from '../api/productSlice';
import { stripeApi } from '../api/stripeSlice';
import { transactionApi } from '../api/transactionSlice';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [stripeApi.reducerPath]: stripeApi.reducer,
        [transactionApi.reducerPath]: transactionApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .concat(authApi.middleware)
    .concat(productApi.middleware)
    .concat(stripeApi.middleware)
    .concat(transactionApi.middleware)

});

setupListeners(store.dispatch);