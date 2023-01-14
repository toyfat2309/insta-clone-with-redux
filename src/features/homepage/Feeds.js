import React from 'react'
import { Grid } from '@mui/material'
import Status from './Status'
import NoPostYet from '../../components/NoPostYet'
import FeedsCard from './FeedsCard'
import { selectPostIds } from './homePageSlice'
import { useSelector } from 'react-redux'

const Feeds = () => {

    const allUserPost = useSelector(selectPostIds);
    

    return (
        <>
            <Grid item xs={12} md={6.6} lg={6} sx={{ justifyContent: 'center' }}>
                <Grid container sx={{ justifyContent: "center" }} >
                    <Grid item xs={12}  >
                        <Status />
                    </Grid>
                    <Grid item xs={12}>
                        {
                            allUserPost.length === 0 ? ( <NoPostYet /> ):
                            ( allUserPost.map((postId) => <FeedsCard postId={postId} key={postId} />) )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Feeds