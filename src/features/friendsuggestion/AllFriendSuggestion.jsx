import React from 'react'
import { Grid } from '@mui/material'
import NavBar from '../../components/NavBar'
import FriendsSkeleton from '../../components/FriendsSkeleton'
import FriendsExcerpt from '../../components/FriendsExcerpt'
import BottomNavBar from '../../components/BottomNavBar'

const AllFriendSuggestion = () => {
  return (
    <>
    <Grid container sx={{height:'100vh',width:'100vw',position:'relative'}}>
      <Grid item xs={12}>
          <NavBar />
      </Grid>
      <Grid item xs={12} sm={11.5} lg={8} sx={{height:'90vh'}}>
        <Grid container sx={{justifyContent:"center",alignItems:'start'}}>
          <Grid item xs={12} sm={6} sx={{height:'100%'}}>
            <FriendsSkeleton />
          </Grid>
        </Grid>
      </Grid>
      <BottomNavBar />
    </Grid>
    </>
  )
}

export default AllFriendSuggestion