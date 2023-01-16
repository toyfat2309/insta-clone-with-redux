import { Avatar, Box, Grid } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const CommentExcerpt = () => {
    return (
        <>
            <Grid container sx={{px:2}}>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={1.3} sx={{ mr: {xs:2,sm:1} }}>
                            <Avatar sx={{ bgcolor: 'gray', cursor: 'pointer' }} aria-label="recipe" src={''}></Avatar>
                        </Grid>
                        <Grid item xs={10} sm={10.4}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={11.3}>
                                            <Box>
                                                <span style={{ width: '100%', overflow: 'revert' }}><b style={{ color: '#262626', fontSize: '14px', marginRight: '7px' }}>Toyfat09</b> <span style={{ color: '#262626', fontSize: '14px', width: '100%', overflowWrap: 'break-word' }}>this is shdsjsdkj sdhjdsdk sddskdsjkjkds jkdsjkdskjdsjsssdjjkdsjkdsjdjkdsjkjkdsjsdkjdkjdkjdjkssbjkjsdjdsjddsbjdsjkjsdskksddkdsddsjsdkdkksdkdkdkskds</span></span>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={.7}>
                                            <Box sx={{width:'100%',display:'flex',justifyContent:'center',mb:.5}}>
                                            <FavoriteBorderIcon sx={{width: '10px', height: '10px', cursor: 'pointer'}} />
                                            </Box>
                                            <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
                                            <b style={{ color: 'gray', fontSize: '11px', cursor: 'pointer'}}>
                                                1
                                            </b>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box>
                                        <b style={{ color: 'gray', fontSize: '10px', marginRight: '20px' }}>2 days ago</b><b style={{ color: 'gray', fontSize: '10px' }}>reply</b>
                                    </Box>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default CommentExcerpt