import React from 'react'
import { Grid, Avatar, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import FriendsSkeleton from '../../components/FriendsSkeleton';
import { userDetails,friendSuggestion } from './homePageSlice';
import { useSelector } from 'react-redux';
import FriendsExcerpt from '../../components/FriendsExcerpt';

const FriendSuggestion = () => {

    const LoggedInUserDetails = useSelector(userDetails);
    const homePageFriendSuggestion = useSelector(friendSuggestion);
    const filterFriend = homePageFriendSuggestion.filter((user) => user._id !== LoggedInUserDetails._id )
    console.log(filterFriend.includes(LoggedInUserDetails._id));

    return (
        <Grid item md={5.4} lg={4.5} sx={{ display: { xs: 'none', md: "flex" }, mt: 3, pl: 4 }}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container sx={{ height: '125px' }}>
                        <Grid item xs={2} sx={{ height: "56px", mt: "16px" }}>
                            <NavLink to={`/userprofile/${''}`} style={{ textDecoration: 'none', color: '#262626' }}>
                                <Avatar  sx={{ width: '56px', height: '56px', backgroundColor: 'rgb(211,211,211)' }} >{LoggedInUserDetails.username.slice(0,1).toUpperCase()}</Avatar>
                            </NavLink>
                        </Grid>
                        <Grid item xs={10} sx={{ mt: "16px", height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', pl: 2 }}>
                            <NavLink to={`/userprofile/${''}`} style={{ textDecoration: 'none', color: '#262626' }}>
                                <b style={{ fontSize: '14px',fontWeight:600 }}>{LoggedInUserDetails.username}</b>
                            </NavLink>
                            <NavLink to='' style={{ textDecoration: 'none', color: 'rgba(var(--d69,0,149,246),1)' }}>
                                <b style={{ fontSize: '11px', fontWeight: 700 }}>Switch</b>
                            </NavLink>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', pt: 1 }}>
                            <NavLink to='' style={{ textDecoration: 'none', color: 'gray' }}>
                                <b style={{ fontSize: '14px', fontWeight: 600 }}>Suggestions For You</b>
                            </NavLink>
                            <NavLink to='/friendsuggestion' style={{ textDecoration: 'none', color: '#262626' }}>
                                <b style={{ fontSize: '12px', fontWeight: 600 }}>See All</b>
                            </NavLink>
                        </Grid>
                    </Grid>
                    <Box sx={{height:'370px',overflow:'hidden'}}>
                        {
                            filterFriend.includes(LoggedInUserDetails._id) ? <FriendsSkeleton /> : (filterFriend.map((friendSuggestion,idx)=>(
                                <FriendsExcerpt friendSuggestion = {friendSuggestion} key={idx} />
                            )))
                        }
                        
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FriendSuggestion