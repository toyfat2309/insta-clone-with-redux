import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const allPostAdapter = createEntityAdapter({
    selectId: (allPost) => allPost._id,
})

const initialState = allPostAdapter.getInitialState()


export const extendedHomePageApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllPost: builder.query({
            query: () => '/users/dashboard',
            transformResponse: (responseData, state) => {
                 const allUserPost =  allPostAdapter.setAll(initialState, responseData.allPost)
                 return [allUserPost,responseData.allUserFilter,responseData.userDetails]
            },
            providesTags: ['Post']
        })
    })
})


export const { useGetAllPostQuery } = extendedHomePageApiSlice

export const allPostResult = extendedHomePageApiSlice.endpoints.getAllPost.select()

export const allPostResultData = createSelector(
    allPostResult, postResult => postResult.data?.[0]
)
export const friendSuggestion = createSelector(
    allPostResult, postResult => postResult.data?.[1]
)
export const userDetails = createSelector(
    allPostResult, postResult => postResult.data?.[2]
)

export const {
    selectAll: selectAllPost,
    selectIds: selectPostIds
} = allPostAdapter.getSelectors( state => allPostResultData(state) ?? initialState )