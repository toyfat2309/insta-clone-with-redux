import React from 'react'
import { Grid } from '@mui/material'
import Status from './Status'
import NoPostYet from '../../components/NoPostYet'
import FeedsCard from './FeedsCard'

const Feeds = () => {
    return (
        <>
            <Grid item xs={12} md={6.6} lg={6} sx={{justifyContent: 'center'}}>
                <Grid container sx={{justifyContent:"center"}} >
                    <Grid item xs={12}  >
                        <Status />
                    </Grid>
                    <Grid item xs={12}>
                        <FeedsCard />
                        <FeedsCard />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Feeds