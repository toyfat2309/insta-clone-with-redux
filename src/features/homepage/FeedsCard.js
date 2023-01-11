import React from 'react'
import Skeleton from './postSkeleton'
import { Card, CardHeader, CardContent, Avatar, IconButton, CardMedia, Typography, Box } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import { useDispatch } from 'react-redux';
import { viewCommentModal } from '../viewcomments/viewCommentSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import moment from 'moment'

const FeedsCard = ({post}) => {

    const dispatch = useDispatch()

    const handleOpen = () => {
        dispatch(viewCommentModal(true))
    }


    return (
        <>
            {/* <Skeleton /> */}
            <Card sx={{ maxWidth: "100%" }}>
                <CardHeader
                    avatar={<Avatar sx={{ bgcolor: 'red' }} aria-label="recipe" src={''}>{post.uniqueId.username.slice(0,1).toUpperCase()}</Avatar>}
                    action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                    title={<b style={{ fontWeight: 600 }}>{post.uniqueId.username}</b>}
                    sx={{ borderBottom: 1, borderColor: "rgb(197,197,197)", fontWeight: 900 }}
                />
                
                <CardMedia component="img"  image={post.postImage} alt="Post Image" sx={{height: post.objectFit === 'cover' ? { xs: '487px', sm: '587px', lg: '587px' } : '100%'}} />
                <CardContent sx={{ px: 0 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', pb: 1, px: 2 }}>
                        <Box>
                            <FavoriteBorderIcon sx={{ mr: 2 }} />
                            <ModeCommentOutlinedIcon sx={{ mr: 2 }} />
                            <SendOutlinedIcon sx={{ mr: 2 }} />
                        </Box>
                        <BookmarkBorderOutlinedIcon />
                    </Box>
                    <Box sx={{ pb: 1, px: 2 }}>
                        <b style={{ color: '#262626', fontSize: '14px', fontWeight: 600 }} >
                            {post.likes.length} likes
                        </b>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', height: 'auto', pb: 1, px: 2 }}>
                        <span><b style={{ color: '#262626', fontSize: '14px', marginRight: '7px', fontWeight: 600 }}>{post.uniqueId.username}</b> <span style={{ color: '#262626', fontSize: '14px' }}>{post.caption}</span></span>
                    </Box>
                    <Box sx={{ display: 'flex', height: 'auto', px: 2 }}>
                        <b style={{ color: 'gray', fontSize: '14px', cursor: 'pointer', fontWeight: 600 }} onClick={handleOpen} > view all {post.Comment.length}  comments</b>
                    </Box>
                    <Box sx={{ display: 'flex', height: 'auto', py: { xs: 1, sm: 2 }, px: 2 }}>
                        <b style={{ color: 'gray', fontSize: '10px', fontWeight: 500 }}>{moment(post.date).fromNow()}</b>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, height: 'auto', alignItems: 'center', borderTop: 1, borderColor: 'rgb(197,197,197)', px: 2, pt: 2 }}>
                        <SentimentSatisfiedOutlinedIcon sx={{ mr: 1 }} />
                        <input style={{ height: 'auto', outline: 'none', border: 'none', width: '70%' }} placeholder='Add comment here' />
                        <button style={{ width: '22%', backgroundColor: 'white', border: 'none', display: 'flex', justifyContent: 'right', fontWeight: 600, fontSize: '16px' }}>
                            Post
                        </button>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default FeedsCard