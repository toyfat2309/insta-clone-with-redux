import { Box } from '@mui/material'
import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Footer = () => {
    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', lineHeight: 2.5 }}>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>Meta</span>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>About</span>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>Blogs</span>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>Job</span>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>Help</span>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>Api</span>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>Privacy</span>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>Terms</span>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>Top Accounts</span>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>Hashtags</span>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>Locations</span>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>Instagram lite</span>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>Contact Uploading & Non-users</span>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>Dance</span>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>Food & Drink</span>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>Home & Garden</span>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>Music</span>
                <span style={{ textDecoration: 'none', color: 'gray', marginRight: 13, fontSize: '0.7em', fontWeight: 500 }} to=''>Vusual Arts</span>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8em', color: 'gray' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p>English</p>
                    <KeyboardArrowDownOutlinedIcon style={{ fontSize: '1.3em' }} />
                </Box>
                <p sx={{ ml: 2 }}>© 2022 Instagram from Meta</p>
            </Box>
        </>
    )
}

export default Footer