import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const viewCommentAdapter = createEntityAdapter({

})

const initialState = viewCommentAdapter.getInitialState()

export const extendedViewCommentApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        viewComments: builder.query({
            query: ({postId}) => `/comments/viewcomment/${postId}`,
            transformResponse: (responseData) => {
                console.log(responseData);
            }, 
            providesTags: [{type:'Comment'}]
        })
    })
})

export const { useViewCommentsQuery } = extendedViewCommentApiSlice

export const commentResult = extendedViewCommentApiSlice.endpoints.getAllPost.select()