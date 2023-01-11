import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    modal: false,
    image: false,
    postUploadState: 'idle'
}

export const newPost = createAsyncThunk(('postUpload/newPost'), async(details) => {
    try {
        const response = await axios.post('http://localhost:4005/posts/post',details);
        return response.data
    } catch (error) {
        console.log(error.message);
    }
})

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
    extraReducers(builders){
        builders
        .addCase(newPost.pending,(state,action) => {
            state.postUploadState = 'loading'
        })
        .addCase(newPost.fulfilled,(state,action) => {
            state.postUploadState = 'fulfilled'
        })
        .addCase(newPost.rejected,(state,action) => {
            state.postUploadState = 'fulfilled'
        })

    }
})

export const { openModal,setImageState } = postUploadSlice.actions

export const modalState = (state)=> state.postUpload.modal
export const imageState = (state)=> state.postUpload.image
export const postUploadState = (state)=> state.postUpload.postUploadState

export default postUploadSlice.reducer