import{ React }from 'react'
import BottomNavBar from '../../components/BottomNavBar'
import NavBar from '../../components/NavBar'
import FriendSuggestion from './FriendSuggestion'
import { Grid } from '@mui/material'
import Feeds from './Feeds'
import ViewComments from '../viewcomments/ViewComments'


const HomePage = () => {

    return (
        <>
          
            <NavBar />
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={12} sm={6} md={10} lg={8}>
                    <Grid container sx={{ justifyContent: 'center' }}>
                        <Feeds />
                        <FriendSuggestion />
                    </Grid>
                </Grid>
            </Grid>
            <BottomNavBar />
            <ViewComments />
        </>
    )
}

export default HomePage