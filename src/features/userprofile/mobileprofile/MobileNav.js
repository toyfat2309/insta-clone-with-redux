import React from 'react'
import { Box, Grid } from '@mui/material'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NavLink } from 'react-router-dom'


const MobileNav = () => {
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center', height: '44px', backgroundColor: "white", position: 'sticky', top: 0, pr: 2, pl: 2, borderBottom: 1, borderColor: 'gray', display: { xs: 'flex', sm: "none" } }}>
                <Grid item xs={12} lg={8.2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <NavLink style={{ textDecoration: 'none', color: 'black', fontSize: 9, display: 'flex', justifyContent: 'left' }} to="/settings"><KeyboardArrowDownIcon /></NavLink>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <b style={{fontWeight:600}}>Toyfat09</b>
                    </Box>
                    <NavLink style={{ textDecoration: 'none', color: 'black', fontSize: 9 }} to=""><SettingsOutlinedIcon /></NavLink>
                </Grid>
            </Grid>
        </>
    )
}

export default MobileNav