import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:4005',
    prepareHeaders: ( headers) => {
        const token = localStorage.token
        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
            headers.set('Access-Control-Allow-Origin', '*')
        }
        return headers
    }
})

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    tagTypes: [ 'Post', ],
    endpoints: builder => ({})
})