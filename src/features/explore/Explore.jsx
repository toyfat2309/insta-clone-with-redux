import { Box, Grid } from '@mui/material'
import React from 'react'
import BottomNavBar from '../../components/BottomNavBar'
import NavBar from '../../components/NavBar'
import QuiltedImage from './QuiltedImage'

const Explore = () => {
  return (
    <>
    <Box>
        <NavBar />
        <Grid container sx={{justifyContent:'center',pt:1}}>
          <Grid item xs={12} sm={11.5} lg={8}>
          <QuiltedImage />
          </Grid>
        </Grid>
        <BottomNavBar />
    </Box>
    </>
  )
}

export default Explore