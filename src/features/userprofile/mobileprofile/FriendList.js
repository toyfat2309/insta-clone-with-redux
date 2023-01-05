import { Grid, Box } from '@mui/material'
import React from 'react'
import { viewFollowers, viewFollowing } from '../userProfileSlice'
import { useDispatch } from 'react-redux'


const FriendList = () => {

    const dispatch = useDispatch()

    return (
        <>
            <Grid container sx={{ height: '61px', padding: '12px 0', border: 1, borderColor: 'rgb(197,197,197)' }}>
                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ display: "grid" }}>
                        <b style={{ width: '100%', display: 'flex', justifyContent: 'center', fontSize: '12px' }}>1</b>
                        <span style={{ width: '100%', display: 'flex', justifyContent: 'center', color: "rgb(142,142,142)", fontSize: '14px' }}>Post </span>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick = { () => dispatch(viewFollowers({Boolean:true,option:'Followers'}))}>
                    <Box sx={{ display: "grid" }}>
                        <b style={{ width: '100%', display: 'flex', justifyContent: 'center', fontSize: '12px' }}>1</b>
                        <span style={{ width: '100%', display: 'flex', justifyContent: 'center', color: "rgb(142,142,142)", fontSize: '14px' }}>Followers</span>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick = { () => dispatch(viewFollowing({Boolean:true,option:'Following'}))}>
                    <Box sx={{ display: "grid" }}>
                        <b style={{ width: '100%', display: 'flex', justifyContent: 'center', fontSize: '12px' }}>1</b>
                        <span style={{ width: '100%', display: 'flex', justifyContent: 'center', color: "rgb(142,142,142)", fontSize: '14px' }}>Following</span>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default FriendList