import { Avatar, Grid, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const FriendsExcerpt = ({friendSuggestion}) => {
    
    return (
        <>
            <Grid container>
                <Grid item xs={2}>
                    <Link to='' style={{ textDecoration: 'none', color: '#262626' }}>
                        <Avatar sx={{ width: '32px', height: '32px', backgroundColor: 'red' }} >{friendSuggestion.username.slice(0,1).toUpperCase()}</Avatar>
                    </Link>
                </Grid>
                <Grid item xs={10} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to='' style={{ textDecoration: 'none', color: '#262626' }}>
                        <Box sx={{ display: 'grid', lineHeight: 1.2 }}>
                            <span style={{ fontSize: '14px', fontWeight: 600, color: "#262626" }}>{friendSuggestion.username}</span>
                            <span style={{ fontSize: '12px', color: "gray" }}>new to instagram</span>
                        </Box>
                    </Link>
                        <span style={{ fontSize: '11px', fontWeight: 700,color: 'rgba(var(--d69,0,149,246),1)' }} >Follow</span>
                </Grid>
            </Grid>
        </>
    )
}

export default FriendsExcerpt