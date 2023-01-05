import React from 'react'
import UserDetails from './UserDetails'
import MobileNav from './MobileNav'
import FriendList from './FriendList'
import ProfileTab from './ProfileTab'
import BottomNavBar from '../../../components/BottomNavBar'
import { Box } from '@mui/material'

const XsScreenSize = () => {
  return (
    <>
      <Box sx={{ display: { xs: 'grid', sm: 'none' } }}>
        <MobileNav />
        <UserDetails />
        <FriendList />
        <ProfileTab />
        <BottomNavBar />
      </Box>
    </>
  )
}

export default XsScreenSize