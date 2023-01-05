import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from 'react-router-dom';

const XsSettings = () => {
    return (
        <>
            <Box sx={{ height: '65px' }}>
                <Grid container sx={{ height: "65px", alignItems: 'center', justifyContent: 'center', borderBottom: 1, borderColor: 'rgb(197,197,197)', position: 'fixed', top: 0, display: { sm: 'none' } }} className='xsEditNavbar'>
                    <Grid item xs={1}>
                    <NavLink to='/userprofile' style={{textDecoration:'none',color:'#262626'}}>
                        <KeyboardArrowLeftIcon sx={{ width: '25px', height: '25px' }} />
                        </NavLink>
                    </Grid>
                    <Grid item xs={9} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <b style={{ fontSize: '16px' }}>Options</b>
                    </Grid>
                    <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                    </Grid>
                </Grid>
            </Box>
            <Grid container sx={{pb:5,display:{xs:'flex',sm:'none'}}}>
                <Grid item xs={12}>
                    <Box sx={{ padding: "20px 16px 8px 16px", borderBottom: 1, borderColor: 'rgb(197,197,197)' }}>
                        <span style={{ fontSize: "14px", color: 'gray', fontWeight: 700 }}>
                            ACCOUNT
                        </span>
                    </Box>
                    <Box sx={{ px: '16px', borderBottom: 1, borderColor: 'rgb(197,197,197)', height: "44px", display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <NavLink to='/update' style={{textDecoration:'none',color:'#262626'}}>
                        <span style={{ fontSize: "16px", color: "#262626", fontWeight: 500 }}>
                            Edit Profile
                        </span>
                        </NavLink>
                        <KeyboardArrowRightOutlinedIcon sx={{ color: 'gray' }} />
                    </Box>
                    <Box sx={{ px: '16px', borderBottom: 1, borderColor: 'rgb(197,197,197)', height: "44px", display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                    <NavLink to='/changepassword' style={{textDecoration:'none',color:'#262626'}}>
                        <span style={{ fontSize: "16px", color: "#262626", fontWeight: 500 }}>
                            Change Password
                        </span>
                        </NavLink>
                        <KeyboardArrowRightOutlinedIcon sx={{ color: 'gray' }} />
                    </Box>
                    <Box sx={{ px: '16px', borderBottom: 1, borderColor: 'rgb(197,197,197)', height: "44px", display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <span style={{ fontSize: "16px", color: "#262626", fontWeight: 500 }}>
                            QR Code
                        </span>
                        <KeyboardArrowRightOutlinedIcon sx={{ color: 'gray' }} />
                    </Box>
                    <Box sx={{ px: '16px', borderBottom: 1, borderColor: 'rgb(197,197,197)', height: "44px", display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <span style={{ fontSize: "16px", color: "#262626", fontWeight: 500 }}>
                            Privacy and Security
                        </span>
                        <KeyboardArrowRightOutlinedIcon sx={{ color: 'gray' }} />
                    </Box>
                    <Box sx={{ px: '16px', borderBottom: 1, borderColor: 'rgb(197,197,197)', height: "44px", display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <span style={{ fontSize: "16px", color: "#262626", fontWeight: 500 }}>
                            Ads
                        </span>
                        <KeyboardArrowRightOutlinedIcon sx={{ color: 'gray' }} />
                    </Box>
                    <Box sx={{ px: '16px', borderBottom: 1, borderColor: 'rgb(197,197,197)', height: "44px", display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <span style={{ fontSize: "16px", color: "#262626", fontWeight: 500 }}>
                            Supervision
                        </span>
                        <KeyboardArrowRightOutlinedIcon sx={{ color: 'gray' }} />
                    </Box>
                    <Box sx={{ px: '16px', borderBottom: 1, borderColor: 'rgb(197,197,197)', height: "44px", display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <span style={{ fontSize: "16px", color: "#262626", fontWeight: 500 }}>
                            Long activity
                        </span>
                        <KeyboardArrowRightOutlinedIcon sx={{ color: 'gray' }} />
                    </Box>
                    <Box sx={{ px: '16px', borderBottom: 1, borderColor: 'rgb(197,197,197)', height: "44px", display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <span style={{ fontSize: "16px", color: "#262626", fontWeight: 500 }}>
                            Emails from instagram
                        </span>
                        <KeyboardArrowRightOutlinedIcon sx={{ color: 'gray' }} />
                    </Box>
                    <Box sx={{ px: '16px', height: "44px", display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <span style={{ fontSize: "14px", color: "rgba(var(--d69,0,149,246),1)", fontWeight: 700 }}>
                            Switch to professional account
                        </span>
                    </Box>
                        <Box sx={{p:"16px",backgroundColor:'rgb(249,249,249)'}}>
                        <Box sx={{ display: "flex", cursor: 'pointer'}}>
                            <InstagramIcon sx={{ color: 'rgba(var(--d69,0,149,246),1)', fontSize: { xs: "18px", md: '18px' }, mr: .2 }} /> <b style={{ fontSize: { sm: "14px", md: '16px' }, color: "#262626" }}>Instagram</b>
                        </Box>
                        <Typography variant="body2" color="initial" sx={{ cursor: "pointer", fontSize: { sm: "14px", md: "16px" }, fontWeight: 900, mt: 1, color: 'rgba(var(--d69,0,149,246),1)' }}>
                            Account Center
                        </Typography>
                        <Typography variant="body2" color="initial" sx={{ cursor: "pointer", fontSize:"11px", fontWeight: 600, mt: 1, color: "gray" }}>
                            Control settings for connected experiences across Instagram, the Facebook app and Messenger, including story and post sharing and logging in.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                <Box sx={{ padding: "20px 16px 8px 16px", borderBottom: 1, borderColor: 'rgb(197,197,197)',backgroundColor:'rgb(249,249,249)'}}>
                        <span style={{ fontSize: "14px", color: 'gray', fontWeight: 700}}>
                            ABOUT
                        </span>
                    </Box>
                    <Box sx={{ px: '16px', borderBottom: 1, borderColor: 'rgb(197,197,197)', height: "44px", display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <span style={{ fontSize: "16px", color: "#262626", fontWeight: 500 }}>
                            Ads
                        </span>
                        <KeyboardArrowRightOutlinedIcon sx={{ color: 'gray' }} />
                    </Box>
                    <Box sx={{ px: '16px', borderBottom: 1, borderColor: 'rgb(197,197,197)', height: "44px", display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <span style={{ fontSize: "16px", color: "#262626", fontWeight: 500 }}>
                            Help
                        </span>
                        <KeyboardArrowRightOutlinedIcon sx={{ color: 'gray' }} />
                    </Box>
                    <Box sx={{ px: '16px', borderBottom: 1, borderColor: 'rgb(197,197,197)', height: "44px", display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                        <span style={{ fontSize: "16px", color: "#262626", fontWeight: 500 }}>
                            Report a problem
                        </span>
                        <KeyboardArrowRightOutlinedIcon sx={{ color: 'gray' }} />
                    </Box>
                    <Box sx={{ px: '16px', borderBottom: 1,borderTop: 1, borderColor: 'rgb(197,197,197)', height: "44px", display: 'flex', alignItems: 'center', justifyContent: "space-between",mt:2}}>
                        <span style={{ fontSize: "16px", color: "red", fontWeight: 500 }}>
                            Log Out
                        </span>
                        <KeyboardArrowRightOutlinedIcon sx={{ color: 'gray' }} />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default XsSettings