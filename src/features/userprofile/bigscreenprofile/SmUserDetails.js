import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import { NavLink } from 'react-router-dom'

const SmUserDetails = () => {
    return (
        <>
            <Grid container sx={{ justifyContent: "center", alignItems: 'center', pl: { sm: 3, lg: 0 }, pr: { sm: 3, lg: 0 } }}>
                <Grid item xs={12} lg={8} sx={{ display: { xs: "none", sm: 'flex' }, pt: '30px', pb: '44px', borderBottom: 1, borderColor: 'rgb(197,197,197)', }}>
                    <Grid container >
                        <Grid item xs={4.1} sx={{ display: 'flex', justifyContent: 'center', height: "100%", alignItems: 'center' }}>
                            <Avatar alt="profilepix" src='' style={{ height: "150px", width: "150px" }} />
                        </Grid>
                        <Grid item xs={7.9}>
                            <Box sx={{ height: '40px', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                <span style={{ height: '32px', display: 'flex', justifyContent: 'start', alignItems: 'center', fontSize: '28px' }}>Toyfat09</span><span style={{ height: '32px', display: 'flex', justifyContent: 'start', alignItems: 'center', fontSize: '28px', marginLeft: '10px', color: 'rgba(var(--d69,0,149,246),1)' }}><VerifiedIcon /></span>
                                <NavLink to='/update' style={{ textDecoration: 'none' }}> <Box sx={{ height: '20px', padding: '5px 9px', border: 1, marginLeft: 2.5, marginRight: 1.5, borderColor: 'rgb(197,197,197)', fontSize: '14px', color: '#262626', fontWeight: 600, borderRadius: '5px' }}>Edit Profile</Box></NavLink>
                            </Box>
                            <Box sx={{ display: 'flex', mt: 2.5 }}>
                                <Box sx={{ display: "flex", width: '100px', cursor: 'pointer' }}>
                                    <b style={{ fontSize: '16px', marginRight: '5px' }}>1</b>
                                    <span style={{ color: "#262626", fontSize: '16px' }}>posts</span>
                                </Box>
                                <Box sx={{ display: "flex", width: '140px', cursor: 'pointer' }}>
                                    <b style={{ fontSize: '16px', marginRight: '5px' }}>1</b>
                                    <span style={{ color: "#262626", fontSize: '16px' }}>followers</span>
                                </Box>
                                <Box sx={{ display: "flex", width: '100px', cursor: 'pointer' }}>
                                    <b style={{ fontSize: '16px', marginRight: '5px' }}>1</b>
                                    <span style={{ color: "#262626", fontSize: '16px' }}>following</span>
                                </Box>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="body2" color="initial">
                                    HTML CSS
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default SmUserDetails