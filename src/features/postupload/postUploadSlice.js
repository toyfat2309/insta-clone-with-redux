import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { history } from "../..";

const initialState = {
    modal: false,
    image: false,
    postUploadState: 'idle',
    toast: false
}

export const newPost = createAsyncThunk(('postUpload/newPost'), async(details) => {
        const { token } = details
    try {
        const response = await axios.post('http://localhost:4005/posts/post',details,{
            headers: {
                    'authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
            }
        });
        console.log(response.data);
        return response.data
       
    } catch (error) {
        // if(error?.response?.status === 401){
        //     localStorage.removeItem('token')
        //     history.push('/')
        //     window.location.reload()
        // };
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
        },
        closeAllUploadModal: (state, action) => {
            state.toast = false
            state.image = false
            state.modal = false
        }
    },
    extraReducers(builders){
        builders
        .addCase(newPost.pending,(state,action) => {
            state.postUploadState = 'loading'
            state.toast = true
        })
        .addCase(newPost.fulfilled,(state,action) => {
            console.log(action?.payload);
            state.postUploadState = 'fulfilled'
        })
        .addCase(newPost.rejected,(state,action) => {
            state.postUploadState = 'rejected'
        })

    }
})

export const { openModal, setImageState, closeAllUploadModal } = postUploadSlice.actions

export const modalState = (state)=> state.postUpload.modal
export const imageState = (state)=> state.postUpload.image
export const postUploadState = (state)=> state.postUpload.postUploadState

export default postUploadSlice.reducer