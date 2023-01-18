import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const allPostAdapter = createEntityAdapter({
    selectId: (post) => post._id,
})

const initialState = allPostAdapter.getInitialState()


export const extendedHomePageApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({

        getAllPost: builder.query({
            query: () => '/users/dashboard',
            transformResponse: (responseData) => {
                 const allUserPost =  allPostAdapter.setAll(initialState, responseData.allPost)
                 return [allUserPost,responseData.allUserFilter,responseData.userDetails]
            },
            providesTags: (result, error, arg) => [
                { type: 'Post', id: 'LIST'}, ...result[0].ids.map(id => ({ type: 'Post', id: 'LIST'}))
            ]
        }),

        like: builder.mutation({
            query: ({postId, userId}) => ({
                url: `/posts/like/${postId}`,
                method: 'PATCH',
                body: {userId}
            }),
            async onQueryStarted({ postId, userId }, {dispatch, queryFulfilled}){
                const patchResult = dispatch(
                    extendedHomePageApiSlice.util.updateQueryData('getAllPost', undefined, draft => {
                        const post = draft[0].entities[postId]
                        if (post) {
                           post.likes.push(userId) 
                        }
                    })
                )
                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }
            }
        }),

        unLike: builder.mutation({
            query: ({postId, userId}) => ({
                url: `/posts/unlike/${postId}`,
                method: 'PATCH',
                body: {userId}
            }),
            async onQueryStarted({ postId, userId }, {dispatch, queryFulfilled}){
                const patchResult = dispatch(
                    extendedHomePageApiSlice.util.updateQueryData('getAllPost', undefined, draft => {
                        const post = draft[0].entities[postId]
                        if (post) {
                           const i = post.likes.indexOf(userId)
                           if (i > -1) {
                            post.likes.splice( i, 1)  
                           }
                        }
                    })
                )
                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }
            }
        }),

        savePost: builder.mutation({
            query: ({postId, userId}) => ({
                url: `/posts/savepost/${postId}`,
                method: 'PATCH',
                body: {userId}
            }),
            async onQueryStarted({ postId, userId }, {dispatch, queryFulfilled}){
                const patchResult = dispatch(
                    extendedHomePageApiSlice.util.updateQueryData('getAllPost', undefined, draft => {
                        const post = draft[0].entities[postId]
                        const user = draft[2]
                        if (post) {
                           post.savedPost.push(userId)
                           user.savedPost.push(postId)
                        }
                    })
                )
                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }
            }
        }),

        unSave: builder.mutation({
            query: ({postId, userId}) => ({
                url: `/posts/removesavedpost/${postId}`,
                method: 'PATCH',
                body: {userId}
            }),

            async onQueryStarted({ postId, userId }, {dispatch, queryFulfilled}){
                const patchResult = dispatch(
                    extendedHomePageApiSlice.util.updateQueryData('getAllPost', undefined, draft => {
                        const post = draft[0].entities[postId]
                        if (post) {
                           const i = post.savedPost.indexOf(userId)
                           if (i > -1) {
                            post.savedPost.splice( i, 1)  
                           }
                        }
                    })
                )
                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }
            }
        }),

        comment: builder.mutation({
            query: (commentPayload) => ({
                url: '/comments/comment',
                method: 'POST',
                body: {commentPayload}
            }),
            invalidatesTags: (result,error,arg) => [
                {type:'Post', id: arg.id}
            ]
        })
    })
})


export const { useGetAllPostQuery, useLazyGetAllPostQuery, useLikeMutation, useCommentMutation } = extendedHomePageApiSlice

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
    selectById: selectPostById,
    selectIds: selectPostIds
} = allPostAdapter.getSelectors( state => allPostResultData(state) ?? initialState )