import { Box } from '@mui/material'
import React from 'react'
import NavBar from '../../../components/NavBar'
import SmProfileTab from './SmProfileTab'
import SmUserDetails from './SmUserDetails'

const SmUpwardScreen = () => {
  return (
    <>
    <Box sx={{display:{xs:'none',sm:'grid'}}}>
        <NavBar />
        <SmUserDetails />
        <SmProfileTab />
    </Box>
    </>
  )
}

export default SmUpwardScreen