import { configureStore } from '@reduxjs/toolkit'
import postUploadSlice from '../features/postupload/postUploadSlice'
import viewCommentSlice from '../features/viewcomments/viewCommentSlice'
import userProfileSlice from '../features/userprofile/userProfileSlice'

const store = configureStore({
    reducer : {
        postUpload: postUploadSlice,
        viewComments: viewCommentSlice,
        userProfile: userProfileSlice,
    }
})

export default store