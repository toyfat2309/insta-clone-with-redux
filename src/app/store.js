import { configureStore } from '@reduxjs/toolkit'
import postUploadSlice from '../features/postupload/postUploadSlice'
import viewCommentSlice from '../features/viewcomments/viewCommentSlice'
import userProfileSlice from '../features/userprofile/userProfileSlice'
import { apiSlice } from '../features/api/apiSlice'

const store = configureStore({
    reducer : {
        [apiSlice.reducerPath]: apiSlice.reducer ,
        postUpload: postUploadSlice,
        viewComments: viewCommentSlice,
        userProfile: userProfileSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store