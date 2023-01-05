import { Box } from '@mui/material'
import React from 'react'
import BottomNavBar from '../../components/BottomNavBar'
import NavBar from '../../components/NavBar'
import QuiltedImage from './QuiltedImage'

const Explore = () => {
  return (
    <>
    <Box>
        <NavBar />
        <BottomNavBar />
        <QuiltedImage />
    </Box>
    </>
  )
}

export default Explore