import { React, useState, useRef } from 'react'
import Skeleton from './postSkeleton'
import { Card, CardHeader, CardContent, Avatar, IconButton, CardMedia, Typography, Box } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { viewCommentModal } from '../viewcomments/viewCommentSlice';
import { selectPostById, userDetails, extendedHomePageApiSlice } from './homePageSlice';
import moment from 'moment'
import { useCommentMutation } from './homePageSlice';
import CircularProgress from '@mui/material/CircularProgress';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { extendedViewCommentApiSlice } from '../viewcomments/viewCommentApiSlice';
import { useLazyViewCommentsQuery } from '../viewcomments/viewCommentApiSlice';

const FeedsCard = ({ postId }) => {


    const spinnerRef = useRef({})
    const { isLoading, isSuccess, isError, error } = useCommentMutation();
    const [trigger] = useLazyViewCommentsQuery();
    const [userInput, setUserInput] = useState('')
    const post = useSelector((state) => selectPostById(state, postId))
    const LoggedInUserDetails = useSelector(userDetails);
    const dispatch = useDispatch()

    const handleOpen = async(id) => {
        const {postId} = id
        dispatch(viewCommentModal({status:true,id:postId}))
        //trigger(postId)
        // const comment = await dispatch(extendedViewCommentApiSlice.endpoints.viewComments.initiate(postId)).unwrap()
        // console.log(comment)
    }

    const like = async (postId, userId) => {
        try {
            const result = await dispatch(extendedHomePageApiSlice.endpoints.like.initiate(postId, userId)).unwrap()
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    const unLike = async (postId, userId) => {
        try {
            const result = await dispatch(extendedHomePageApiSlice.endpoints.unLike.initiate(postId, userId)).unwrap()
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    const savePost = async (postId, userId) => {
        try {
            const result = await dispatch(extendedHomePageApiSlice.endpoints.savePost.initiate(postId, userId)).unwrap()
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    const unSavePost = async (postId, userId) => {
        try {
            const result = await dispatch(extendedHomePageApiSlice.endpoints.unSave.initiate(postId, userId)).unwrap()
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    const comment = async (details, input, spinner) => {
        spinner.style.display = 'flex'
        const { postId, userId } = details
        const date = new Date()
        const isoDate = date.toISOString()
        let commentPayload = { isoDate, postId, userId, input }
        try {
            const result = await dispatch(extendedHomePageApiSlice.endpoints.comment.initiate(commentPayload)).unwrap()
            console.log(result);
            if (result.message === 'comment save successfully') {
                spinner.style.display = 'none';
                setUserInput('')
            }else {
                spinner.style.display = 'none';
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            {/* <Skeleton /> */}
            <Card sx={{ maxWidth: "100%", mb: { xs: 0, sm: 3 } }}>
                <CardHeader
                    avatar={<Avatar sx={{ bgcolor: 'red', cursor: 'pointer' }} aria-label="recipe" src={''}>{post.uniqueId.username.slice(0, 1).toUpperCase()}</Avatar>}
                    action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                    title={<b style={{ fontWeight: 600, cursor: 'pointer' }}>{post.uniqueId.username}</b>}
                    sx={{ borderBottom: 1, borderColor: "rgb(197,197,197)", fontWeight: 900 }}
                />

                <CardMedia component="img" image={post.postImage} alt="Post Image" sx={{ height: post.objectFit === 'cover' ? { xs: '487px', sm: '587px', lg: '587px' } : '100%' }} />
                <CardContent sx={{ px: 0 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', pb: 1, px: 2 }}>
                        <Box>
                            {post.likes.includes(LoggedInUserDetails._id) ?
                                (<FavoriteOutlinedIcon sx={{ mr: 2, color: 'red', cursor: 'pointer' }} onClick={() => unLike({ postId: post._id, userId: LoggedInUserDetails._id })} />) :
                                (<FavoriteBorderIcon sx={{ mr: 2, cursor: 'pointer' }} onClick={() => like({ postId: post._id, userId: LoggedInUserDetails._id })} />)
                            }
                            <ModeCommentOutlinedIcon sx={{ mr: 2, cursor: 'pointer' }} onClick={() =>handleOpen({ postId: post._id})} />
                            <SendOutlinedIcon sx={{ mr: 2, cursor: 'pointer' }} />
                        </Box>
                        {
                            post.savedPost.includes(LoggedInUserDetails._id) ?
                                <BookmarkIcon sx={{ cursor: 'pointer' }} onClick={() => unSavePost({ postId: post._id, userId: LoggedInUserDetails._id })} /> :
                                <BookmarkBorderOutlinedIcon sx={{ cursor: 'pointer' }} onClick={() => savePost({ postId: post._id, userId: LoggedInUserDetails._id })} />
                        }

                    </Box>
                    <Box sx={{ pb: 1, px: 2 }}>
                        <b style={{ color: '#262626', fontSize: '14px', fontWeight: 600 }} >
                            {post.likes.length} likes
                        </b>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', height: 'auto', pb: 1, px: 2 }}>
                        <span><b style={{ color: '#262626', fontSize: '14px', marginRight: '7px', fontWeight: 600, cursor: 'pointer' }}>{post.uniqueId.username}</b> <span style={{ color: '#262626', fontSize: '14px' }}>{post.caption}</span></span>
                    </Box>
                    <Box sx={{ display: 'flex', height: 'auto', px: 2 }}>
                        <b style={{ color: 'gray', fontSize: '14px', cursor: 'pointer', fontWeight: 600 }} onClick={() =>handleOpen({ postId: post._id})} > view all {post.Comment.length}  comments</b>
                    </Box>
                    <Box sx={{ display: 'flex', height: 'auto', py: { xs: 1, sm: 2 }, px: 2 }}>
                        <b style={{ color: 'gray', fontSize: '10px', fontWeight: 500 }}>{moment(post.date).fromNow()}</b>
                    </Box>
                    <Box sx={{position:'relative',}}>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, height: 'auto', alignItems: 'center', borderTop: 1, borderColor: 'rgb(197,197,197)', px: 2, pt: 2 }}>
                            <SentimentSatisfiedOutlinedIcon sx={{ mr: 1 }} />
                            <input style={{ height: 'auto', outline: 'none', border: 'none', width: '70%' }} placeholder='Add comment here' onChange={(e) => setUserInput(e.target.value)} value={isSuccess?'':userInput} />
                            <button style={{ width: '22%', backgroundColor: 'white', border: 'none', display: 'flex', justifyContent: 'right', fontWeight: 600, fontSize: '16px', cursor: 'pointer', color: userInput == '' ? 'rgb(165,210,255)' : 'rgba(var(--d69,0,149,246),1)' }} disabled={userInput === ''} onClick={() => comment({ postId: post._id, userId: LoggedInUserDetails._id }, userInput,spinnerRef.current[post._id])} >
                                Post
                            </button>
                        </Box>
                        <Box sx={{position:'absolute',top:0,width:'100%',height:'70px',display:'none',alignItems:'center',justifyContent:'center',zIndex:1}} ref={ref =>{spinnerRef.current[post._id]=ref}}>
                            <CircularProgress style={{width: '20px', height: "20px"}} />
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default FeedsCard