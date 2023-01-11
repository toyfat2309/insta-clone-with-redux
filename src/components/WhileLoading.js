import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';


const WhileLoading = () => {

    return (
        <>
            <Grid container>
                <Grid item xs={12} sx={{ width: '100vw', height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <InstagramIcon sx={{ color: "rgb(158,13,6)", fontSize: '70px' }} />
                </Grid>
                <Grid item xs={12} sx={{ width: '100vw', height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box>
                        <span style={{ fontSize: '14px', width: '150px', display: 'flex', justifyContent: 'center', fontFamily: 'cursive' }}>
                            From
                        </span>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <InstagramIcon sx={{ color: "rgb(158,13,6)", fontSize: '40px' }} />
                            <Typography variant="body1" sx={{ color: "rgb(158,13,6)", fontSize: '24px', fontFamily: 'cursive' }}>Instagram</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )

}

export default WhileLoading