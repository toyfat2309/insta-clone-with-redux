import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';

const SmUpwardOptions = () => {
    return (
        <Grid container sx={{ borderRight: 1, borderColor: 'rgb(197,197,197)' }}>
            <Grid item xs={12}>
                <NavLink to='' style={{ textDecoration: "none" }}>
                    <Typography variant="body2" color="initial" sx={{ fontSize: { sm: "14px", md: "16px" }, p: '16px 16px 16px 30px', '&:hover': { backgroundColor: '#efefef', borderLeft: 2, borderColor: 'gray' } }}>Edit Profile</Typography>
                </NavLink>
                <NavLink to='/changepassword' style={{ textDecoration: "none" }}>
                    <Typography variant="body2" color="initial" sx={{ fontSize: { sm: "14px", md: "16px" }, p: '16px 16px 16px 30px', '&:hover': { backgroundColor: '#efefef', borderLeft: 2, borderColor: 'gray' } }}>Change Password</Typography>
                </NavLink>
                <NavLink to='' style={{ textDecoration: "none" }}>
                    <Typography variant="body2" color="initial" sx={{ fontSize: { sm: "14px", md: "16px" }, p: '16px 16px 16px 30px', '&:hover': { backgroundColor: '#efefef', borderLeft: 2, borderColor: 'gray' } }}>App and Websites</Typography>
                </NavLink>
                <NavLink to='' style={{ textDecoration: "none" }}>
                    <Typography variant="body2" color="initial" sx={{ fontSize: { sm: "14px", md: "16px" }, p: '16px 16px 16px 30px', '&:hover': { backgroundColor: '#efefef', borderLeft: 2, borderColor: 'gray' } }}>Email Notifications</Typography>
                </NavLink>
                <NavLink to='' style={{ textDecoration: "none" }}>
                    <Typography variant="body2" color="initial" sx={{ fontSize: { sm: "14px", md: "16px" }, p: '16px 16px 16px 30px', '&:hover': { backgroundColor: '#efefef', borderLeft: 2, borderColor: 'gray' } }}>Push Notifications</Typography>
                </NavLink>
                <NavLink to='' style={{ textDecoration: "none" }}>
                    <Typography variant="body2" color="initial" sx={{ fontSize: { sm: "14px", md: "16px" }, p: '16px 16px 16px 30px', '&:hover': { backgroundColor: '#efefef', borderLeft: 2, borderColor: 'gray' } }}>Manage Contacts</Typography>
                </NavLink>
                <NavLink to='' style={{ textDecoration: "none" }}>
                    <Typography variant="body2" color="initial" sx={{ fontSize: { sm: "14px", md: "16px" }, p: '16px 16px 16px 30px', '&:hover': { backgroundColor: '#efefef', borderLeft: 2, borderColor: 'gray' } }}>Privacy and Security</Typography>
                </NavLink>
                <NavLink to='' style={{ textDecoration: "none" }}>
                    <Typography variant="body2" color="initial" sx={{ fontSize: { sm: "14px", md: "16px" }, p: '16px 16px 16px 30px', '&:hover': { backgroundColor: '#efefef' } }}>Ads</Typography>
                </NavLink>
                <NavLink to='' style={{ textDecoration: "none" }}>
                    <Typography variant="body2" color="initial" sx={{ fontSize: { sm: "14px", md: "16px" }, p: '16px 16px 16px 30px', '&:hover': { backgroundColor: '#efefef' } }}>Supervision</Typography>
                </NavLink>
                <NavLink to='' style={{ textDecoration: "none" }}>
                    <Typography variant="body2" color="initial" sx={{ fontSize: { sm: "14px", md: "16px" }, p: '16px 16px 16px 30px', '&:hover': { backgroundColor: '#efefef', borderLeft: 2, borderColor: 'gray' } }}>Login Activity</Typography>
                </NavLink>
                <NavLink to='' style={{ textDecoration: "none" }}>
                    <Typography variant="body2" color="initial" sx={{ fontSize: { sm: "14px", md: "16px" }, p: '16px 16px 16px 30px', '&:hover': { backgroundColor: '#efefef', borderLeft: 2, borderColor: 'gray' } }}>Email from instagram </Typography>
                </NavLink>
                <NavLink to='' style={{ textDecoration: "none" }}>
                    <Typography variant="body2" color="initial" sx={{ fontSize: { sm: "14px", md: "16px" }, p: '16px 16px 16px 30px', '&:hover': { backgroundColor: '#efefef', borderLeft: 2, borderColor: 'gray' } }}>Help</Typography>
                </NavLink>
                <NavLink to='' style={{ textDecoration: "none" }}>
                    <Typography variant="body2" color="initial" sx={{ fontSize: { sm: "14px", md: "16px" }, p: '16px 16px 16px 30px', '&:hover': { backgroundColor: '#efefef', borderLeft: 2, borderColor: 'gray' } }}>Digital Collectibles</Typography>
                </NavLink>
                <Box sx={{ p: '16px 16px 16px 30px', cursor: 'pointer', display: "grid", justifyContent: 'center' }}>
                    <Typography variant="body2" color="initial" sx={{ fontSize: { sm: "11px", md: '16px' }, color: 'rgba(var(--d69,0,149,246),1)', fontWeight: 700 }}>Switch to professional</Typography>
                    <Typography variant="body2" color="initial" sx={{ fontSize: { sm: "11px", md: '16px' }, color: 'rgba(var(--d69,0,149,246),1)', fontWeight: 700, width: '100%', display: "flex", justifyContent: 'center' }}>Account</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{ p: '30px' }}>
                <Box sx={{ display: "flex", cursor: 'pointer' }}>
                    <InstagramIcon sx={{ color: 'rgba(var(--d69,0,149,246),1)', fontSize: { sm: "16px", md: '18px' }, mr: .2 }} /> <b style={{ fontSize: { sm: "14px", md: '16px' }, color: "#262626" }}>Instagram</b>
                </Box>
                <Typography variant="body2" color="initial" sx={{ cursor: "pointer", fontSize: { sm: "14px", md: "16px" }, fontWeight: 900, mt: 1, color: 'rgba(var(--d69,0,149,246),1)' }}>
                    Account Center
                </Typography>
                <Typography variant="body2" color="initial" sx={{ cursor: "pointer", fontSize: { sm: "8px", md: "11px" }, fontWeight: 700, mt: 1, color: "gray" }}>
                    Control settings for connected experiences across Instagram, the Facebook app and Messenger, including story and post sharing and logging in.
                </Typography>

            </Grid>
        </Grid>
    )
}

export default SmUpwardOptions