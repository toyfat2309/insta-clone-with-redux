import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal: false,
    image: false
}

const postUploadSlice = createSlice({
    name: 'postUpload',
    initialState,
    reducers: {
        openModal : (state,action) => {
            state.modal = action.payload
        },
        setImageState : (state,action) => {
            state.image = action.payload
        }
    },
})

export const { openModal,setImageState } = postUploadSlice.actions

export const modalState = (state)=> state.postUpload.modal
export const imageState = (state)=> state.postUpload.image

export default postUploadSlice.reducer