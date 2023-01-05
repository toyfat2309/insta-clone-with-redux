import React from 'react'
import { Avatar, Grid, Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import VerifiedIcon from '@mui/icons-material/Verified';


const UserDetails = () => {
    return (
        <>
            <Grid container sx={{ mt: 2 }}>
                <Grid item xs={12} sx={{ pr: '16px', pl: '16px', pt: '16px', pb: '24px', height: '117px' }}>
                    <Grid container>
                        <Grid item xs={3.6}>
                            <Avatar src='' alt="profilepix" style={{ height: "77px", width: "77px" }} />
                        </Grid>
                        <Grid item xs={8.4}>
                            <Grid container sx={{ height: '100%' }}>
                                <Grid item xs={12} sx={{ height: "21px", mb: '12px', display: 'flex', justifyContent: 'initial', fontWeight: 400, fontSize: '23px' }}>
                                    <span>Toyfat09</span><span style={{ height: '32px', display: 'flex', justifyContent: 'start', alignItems: 'center', fontSize: '28px', marginLeft: '10px', color: 'rgba(var(--d69,0,149,246),1)' }}><VerifiedIcon /></span>
                                </Grid>
                                <Grid item xs={12} sx={{ height: '44px', mt: 1.5 }}>
                                    <NavLink to='/update' style={{ textDecoration: 'none', color: '#262626', }}>
                                        <Box sx={{ height: '20px', padding: '5px 9px', border: 1, borderColor: 'rgb(197,197,197)', borderRadius: '5px', backgroundColor: '#efefef', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                            <span style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 600, fontSize: "14px" }}>Edit Profile</span>
                                        </Box>
                                    </NavLink>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container sx={{ px: 2, pb: 2 }}>
                        <Grid item xs={12}>
                            <b style={{ fontWeight: 500 }}>
                                Toheeb Ogunleti
                            </b>
                        </Grid>
                        <Grid item xs={12}>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default UserDetails