import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const viewCommentAdapter = createEntityAdapter({
    selectId: (comment) => comment._id,
})

const initialState = viewCommentAdapter.getInitialState()

export const extendedViewCommentApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        viewComments: builder.query({
            query: (postId) => `/comments/viewcomment/${postId}`,
            transformResponse: (responseData) => {
                console.log(responseData);
                const result = viewCommentAdapter.setAll(initialState,responseData.commentTB)
                return result
            },
            providesTags: (result, error, arg) => {
                 return [...result.ids.map(id => ({ type: 'Comment', id: 'LIST'}))]
            }
        })
    })
})

export const { useViewCommentsQuery, useLazyViewCommentsQuery } = extendedViewCommentApiSlice

export const currentPost = extendedViewCommentApiSlice.endpoints.viewComments.select()

export const allComment =  createSelector(
    currentPost, comment => comment.data
)

export const {
    selectAll: selectAllComment,
    selectByIds: selectCommentById,
    selectIds: selectCommentIds
} = viewCommentAdapter.getSelectors(state => allComment(state) ?? initialState)