import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
    reFetchPost: null
}

const viewCommentSlice = createSlice({
    name: 'viewComments',
    initialState,
    reducers: {
        viewCommentModal : (state,action) => {
           state.open = action.payload
           if (action.payload === false) {
             state.reFetchPost = true
           }
        },
    },

})

export const {viewCommentModal} = viewCommentSlice.actions

export const commentModalState = (state) => state.viewComments.open
export const reFresh = (state) => state.viewComments.reFetchPost

export default viewCommentSlice.reducer