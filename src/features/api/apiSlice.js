import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { history } from '../..'


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

const baseQueryWithAuth = async(args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    
    if (result?.error?.status === 401) {
        localStorage.removeItem('token');
        history.push('/');
        window.location.reload();
    }
    return result
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithAuth,
    tagTypes: [ 'Post', ],
    endpoints: builder => ({})
})