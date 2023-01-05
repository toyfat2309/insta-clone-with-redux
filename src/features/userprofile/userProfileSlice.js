import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal: false,
    options: '' // follower , following
}

const userProfileSlice = createSlice({

    name: 'userProfile',
    initialState,
    reducers: {
        viewFollowers: (state,action) => {
            state.modal = action.payload.Boolean
            state.options = action.payload.option
        },
        viewFollowing: (state,action) => {
            state.modal = action.payload.Boolean
            state.options = action.payload.option
        },
    }
})

export const { viewFollowers, viewFollowing } = userProfileSlice.actions

export default userProfileSlice.reducer