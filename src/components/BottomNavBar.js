import { AppBar, Toolbar,Avatar,Badge } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { useDispatch } from 'react-redux';
import { openModal } from '../features/postupload/postUploadSlice';

const BottomNavBar = () => {

    const dispatch = useDispatch()

    const handleOpen = () => {
        dispatch(openModal(true))
    }


    return (
        <>
            <AppBar position="fixed"  sx={{ top: 'auto', bottom: 0,backgroundColor:'white',display:{xs:'flex',sm:'none'}}}>
                <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
                    <NavLink style={{ textDecoration: 'none', color: 'black', fontSize: 9 }} to="/feeds"><HomeIcon style={{ fontSize: 27 }} /></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'black', fontSize: 9 }} to="/directmessage">
                        <Badge badgeContent={4} color="secondary">
                            <SendIcon style={{ fontSize: 27 }} />
                        </Badge>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'black', fontSize: 9 }} to="" ><AddBoxOutlinedIcon style={{ fontSize: 27 }} onClick={handleOpen} /></NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'black', fontSize: 9 }} to="/explore"><ExploreOutlinedIcon style={{ fontSize: 27 }} /></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to='/profile'><Avatar src={''} alt='' style={{ height: 25, width: 25 }} /></NavLink>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default BottomNavBar