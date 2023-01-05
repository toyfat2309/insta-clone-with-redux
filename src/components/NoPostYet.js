import { React, } from 'react'
import { Box, Grid, } from '@mui/material'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const NoPostYet = () => {
    return (
    <>
            <Grid container sx={{ height: '322px', padding: '60px 44px', position: 'relative' }}>
                <Grid item xs={12} sx={{ display: 'grid', justifyContent: 'center', height: '62px' }}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ width: '62px', height: '62px', border: 1, borderRadius: "50%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CameraAltOutlinedIcon sx={{ fontSize: 40, fontWeight: 100, color: "rgb(142,142,142)" }} />
                        </Box>
                    </Box>
                    <Box sx={{ height: '64px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <span style={{ fontSize: '28px', fontWeight: 400, color: '#262626' }}>Share Photos</span>
                    </Box>
                    <Box sx={{ height: '58px' }}>
                        <span style={{ width: '100%', height: '14px', fontSize: '14px', fontWeight: 400, color: '#262626', display: 'flex', justifyContent: 'center', marginBottom: 2 }}>When you share photos, they will appear </span>
                        <span style={{ width: '100%', height: '14px', fontSize: '14px', fontWeight: 400, color: '#262626', display: 'flex', justifyContent: 'center' }}>on your profile.</span>
                    </Box>
                    <span style={{ width: '100%', height: '14px', fontSize: '14px', fontWeight: 700, display: 'flex', justifyContent: 'center', color: 'rgba(var(--d69,0,149,246),1)', cursor: 'pointer' }}>Share your first photo</span>

                </Grid>
            </Grid>
            </>
            )
}

            export default NoPostYet