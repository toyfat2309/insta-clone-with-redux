import { React, useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Skeleton } from '@mui/material';
import { viewCommentModal } from './viewCommentSlice';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FriendsSkeleton from '../../components/FriendsSkeleton';
import CommentExcerpt from './CommentExcerpt';
import { selectCommentIds } from './viewCommentApiSlice';


const StatusFufilled = ({data}) => {

   const { ids, entities} = data

    const [height, setHeight] = useState(window.innerHeight);
    const matches = useMediaQuery('(max-width:480px)');

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(viewCommentModal({status:false,id:null}));
    }

    return (
        <>
            {
                !matches ?
                    (<Grid container sx={{ justifyContent: 'center', bgcolor: 'rgba(0,0,0,0.5)', alignItems: 'center' }}>
                        <Grid item sm={12} lg={12} >
                            <Grid container sx={{ height: { xs: height, sm: '592px' }, display: { xs: 'none', sm: 'flex' } }}>
                                <Grid item xs={12} sm={6} sx={{ height: '100%' }}>
                                    <Card sx={{ height: '100%', width: '100%' }}>
                                        {<Skeleton sx={{ height: '100%' }} animation="wave" variant="rectangular" />}
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} sx={{ height: '100%' }}>
                                    <Card sx={{ height: '100%', width: '100%' }}>
                                        <CardHeader
                                            avatar={<Avatar sx={{ bgcolor: 'red', cursor: 'pointer' }} aria-label="recipe" src={''}></Avatar>}
                                            action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                                            title={<b style={{ fontWeight: 600, cursor: 'pointer' }}>Toyfat09</b>}
                                            sx={{ borderBottom: 1, borderColor: "rgb(197,197,197)", fontWeight: 900 }}
                                        />
                                        <Grid item xs={12} sx={{ boborderBottom: 1, borderColor: 'black',height:'360px',overflowY: 'scroll' }}>
                                        <Grid container>
                                            <Grid item xs={12} sx={{borderBottom:1,borderColor:'rgb(197,197,197)',mb:2}}>
                                                <Grid container sx={{ py: 2,px:2 }}>
                                                    <Grid item xs={1.3} sx={{ mr: 1 }}>
                                                        <Avatar sx={{ bgcolor: 'gray', cursor: 'pointer' }} aria-label="recipe" src={''}></Avatar>
                                                    </Grid>
                                                    <Grid item xs={10}>
                                                        <Box>
                                                            <span style={{ width: '100%', overflow: 'revert' }}><b style={{ color: '#262626', fontSize: '14px', marginRight: '7px' }}>Toyfat09</b> <span style={{ color: '#262626', fontSize: '14px', width: '100%', overflowWrap: 'break-word' }}>this is shdsjsdkj sdhjdsdk sddskdsjkjkds jkdsjkdskjdsjsssdjjkdsjkdsjdjkdsjkjkdsjsdkjdkjdkjdjkssbjkjsdjdsjddsbjdsjkjsdskksddkdsddsjsdkdkksdkdkdkskds</span></span>
                                                        </Box>
                                                        <Box>
                                                        <b style={{ color: 'gray', fontSize: '10px', marginRight: '20px' }}>2 days ago</b><b style={{ color: 'gray', fontSize: '10px' }}>1 likes</b>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                            { ids.map((id) =>(
                                                    <CommentExcerpt entities={entities} id={id} />
                                                ))}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                        <CardContent sx={{ px: 0 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', pb: 1, px: 2 }}>
                                                <Box>
                                                    <FavoriteBorderIcon sx={{ mr: 2, cursor: 'pointer' }} />

                                                    <ModeCommentOutlinedIcon sx={{ mr: 2, cursor: 'pointer' }} />
                                                    <SendOutlinedIcon sx={{ mr: 2, cursor: 'pointer' }} />
                                                </Box>
                                                <BookmarkBorderOutlinedIcon sx={{ cursor: 'pointer' }} />
                                            </Box>
                                            <Box sx={{ pb: 1, px: 2 }}>
                                                <b style={{ color: '#262626', fontSize: '14px', fontWeight: 600 }} >
                                                    1 likes
                                                </b>
                                            </Box>
                                            <Box sx={{ position: 'relative', }}>
                                                <Box sx={{ display: { xs: 'none', sm: 'flex' }, height: 'auto', alignItems: 'center', borderTop: 1, borderColor: 'rgb(197,197,197)', px: 2, pt: 2 }}>
                                                    <SentimentSatisfiedOutlinedIcon sx={{ mr: 1 }} />
                                                    <input style={{ height: 'auto', outline: 'none', border: 'none', width: '70%' }} placeholder='Add comment here' />
                                                    <button style={{ width: '22%', backgroundColor: 'white', border: 'none', display: 'flex', justifyContent: 'right', fontWeight: 600, fontSize: '16px', cursor: 'pointer', }} >
                                                        Post
                                                    </button>
                                                </Box>
                                                <Box sx={{ position: 'absolute', top: 0, width: '100%', height: '70px', display: 'none', alignItems: 'center', justifyContent: 'center', zIndex: 1 }} >
                                                    {/* <CircularProgress style={{ width: '20px', height: "20px" }} /> */}
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>) :
                    (
                        <Grid container sx={{ height: '100vh', zIndex: 99, alignItems: 'center', backgroundColor: 'white' }}>
                            <Grid item xs={12} sx={{ height: '90vh !important', borderBottom: 1, borderColor: 'black', position: 'relative' }}>
                                <Grid container sx={{}} >
                                    <Grid item xs={12} lg={8.2} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '44px !important', backgroundColor: "white", position: 'relative', pr: 2, pl: 2, borderBottom: 1, borderColor: 'gray', display: { xs: 'flex', sm: "none" }, zIndex: 1 }}>
                                        <span style={{ textDecoration: 'none', color: 'black', fontSize: 9, display: 'flex', justifyContent: 'left' }} onClick={handleClose}><KeyboardBackspaceIcon sx={{ fontSize: '30px', fontWeight: 100, zIndex: 1 }}  /></span>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <b style={{ fontWeight: 600 }}>Comments</b>
                                        </Box>
                                        <Link style={{ textDecoration: 'none', color: 'black', fontSize: 9 }} to=""></Link>
                                    </Grid>
                                    <Grid item xs={12} sx={{ boborderBottom: 1, borderColor: 'black',maxHeight:'75vh',overflowY: 'scroll' }}>
                                        <Grid container>
                                            <Grid item xs={12} sx={{borderBottom:1,borderColor:'rgb(197,197,197)',mb:2}}>
                                                <Grid container sx={{ py: 2,px:2 }}>
                                                    <Grid item xs={1.3} sx={{ mr: 2 }}>
                                                        <Avatar sx={{ bgcolor: 'gray', cursor: 'pointer' }} aria-label="recipe" src={''}></Avatar>
                                                    </Grid>
                                                    <Grid item xs={10}>
                                                        <Box>
                                                            <span style={{ width: '100%', overflow: 'revert' }}><b style={{ color: '#262626', fontSize: '14px', marginRight: '7px' }}>Toyfat09</b> <span style={{ color: '#262626', fontSize: '14px', width: '100%', overflowWrap: 'break-word' }}>this is shdsjsdkj sdhjdsdk sddskdsjkjkds jkdsjkdskjdsjsssdjjkdsjkdsjdjkdsjkjkdsjsdkjdkjdkjdjkssbjkjsdjdsjddsbjdsjkjsdskksddkdsddsjsdkdkksdkdkdkskds</span></span>
                                                        </Box>
                                                        <Box>
                                                        <b style={{ color: 'gray', fontSize: '10px', marginRight: '20px' }}>2 days ago</b><b style={{ color: 'gray', fontSize: '10px' }}>1 likes</b>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                            { ids.map((id) =>(
                                                    <CommentExcerpt entities={entities} id={id} />
                                                ))}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
                                        <Box sx={{ display: { xs: 'flex', sm: 'flex' }, height: 'auto', alignItems: 'center', borderTop: 1, borderColor: 'rgb(197,197,197)', px: 2, pt: 2, pb: 2, borderRadius: '33px' }}>
                                            <SentimentSatisfiedOutlinedIcon sx={{ mr: 1 }} />
                                            <input style={{ height: 'auto', outline: 'none', border: 'none', width: '65%' }} placeholder='Add comment here' />
                                            <button style={{ width: '27%', backgroundColor: 'white', border: 'none', display: 'flex', justifyContent: 'right', fontWeight: 600, fontSize: '16px', cursor: 'pointer', }} >
                                                comment
                                            </button>
                                        </Box>
                                        <Box sx={{ position: 'absolute', top: 0, width: '100%', height: '70px', display: 'none', alignItems: 'center', justifyContent: 'center', zIndex: 1 }} >
                                            {/* <CircularProgress style={{ width: '20px', height: "20px" }} /> */}
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
            }
        </>
    )
}

export default StatusFufilled