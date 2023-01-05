import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false
}

const viewCommentSlice = createSlice({
    name: 'viewComments',
    initialState,
    reducers: {
        viewCommentModal : (state,action) => {
           state.open = action.payload 
        },
    },

})

export const {viewCommentModal} = viewCommentSlice.actions

export const commentModalState = (state) => state.viewComments.open

export default viewCommentSlice.reducer