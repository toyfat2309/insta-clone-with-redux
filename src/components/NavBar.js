import React, { useState } from 'react';
import { Box, Badge, Avatar, AppBar, Toolbar, Grid, InputBase } from '@mui/material'
import logo from '../assets/instalogo.png'
import { NavLink } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { openModal } from '../features/postupload/postUploadSlice';

const NavBar = () => {

    const dispatch = useDispatch()

    const handleOpen = () => {
        dispatch(openModal(true))
    }

    return (
        <>
            <AppBar position="sticky" color="primary" sx={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <Grid container sx={{ display: {xs: 'none',sm:'flex'}, justifyContent: "center" }}>
                        <Grid item xs={12} lg={8.3} sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                            <Box component="img" src={logo} alt="instaLogo" sx={{ width: { sm: '110px', lg: '110px' }, height: { sm: "50px", lg: '40px' } }} />
                            <Box sx={{ display: { xs: 'none', sm: 'flex' }, borderRadius: '10px', backgroundColor: '#efefef', alignItems: "center", height: '35px' }}>
                                <SearchIcon style={{ color: 'gray' }} sx={{ mr: 1, ml: 1 }} />
                                <InputBase placeholder='search' style={{ width: 230 }} />
                            </Box>
                            <Box sx={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                                <NavLink to='/feeds' style={{ textDecoration: 'none' }}>
                                    <HomeOutlinedIcon sx={{ height: { sm: '30px', lg: '25px' }, width: { sm: "30px", lg: '25px' }, mr: { sm: 2, lg: 3 }, color: 'black' }} />
                                </NavLink>
                                <NavLink to='/directmessage' style={{ textDecoration: 'none' }}>
                                    <Badge badgeContent={4} color="secondary" sx={{ mr: { sm: 2, lg: 3 } }}>
                                        <SendIcon style={{ height: { sm: '30px', lg: '25px' }, width: { sm: "30px", lg: '25px' }, color: 'black' }} />
                                    </Badge>
                                </NavLink>
                                <span style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                    <AddBoxOutlinedIcon sx={{ height: { sm: '30px', lg: '25px' }, width: { sm: "30px", lg: '25px' }, mr: { sm: 2, lg: 3 }, color: 'black' }} onClick={handleOpen}/>
                                </span>
                                <NavLink to='/explore' style={{ textDecoration: 'none' }}>
                                    <ExploreOutlinedIcon sx={{ height: { sm: '30px', lg: '25px' }, width: { sm: "30px", lg: '25px' }, mr: { sm: 2, lg: 3 }, color: 'black' }} />
                                </NavLink>
                                <NavLink to='' style={{ textDecoration: 'none' }}>
                                    <FavoriteBorderOutlinedIcon sx={{ height: { sm: '30px', lg: '25px' }, width: { sm: "30px", lg: '25px' }, mr: { sm: 2, lg: 3 }, color: 'black' }} />
                                </NavLink>
                                 <NavLink to='/profile' style={{ textDecoration: 'none' }}> 
                                <Avatar src={''} sx={{ height: { sm: '30px', lg: '25px' }, width: { sm: "30px", lg: '25px' } }} />
                                </NavLink> 
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ justifyContent: 'center', backgroundColor: "white", display: { xs: 'flex', sm: 'none' }, height: '65px', alignItems: 'center', borderBottom: 1, borderColor: 'rgb(197,197,197)',backgroundColor: 'white', zIndex: 1 }}>
                        <Grid item xs={12} lg={8.2}>
                            <Grid container>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Box component='img' sx={{ height: { xs: 35, sm: 39 } }} src={logo} ml={{ sm: 0, lg: 28 }} alt="" />
                                    <NavLink style={{ textDecoration: 'none', color: 'black', fontSize: 9 }} to="/UserProfile"><FavoriteBorderOutlinedIcon style={{ fontSize: 27 }} /></NavLink>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar