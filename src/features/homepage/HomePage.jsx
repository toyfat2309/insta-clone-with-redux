import { React, useEffect } from 'react'
import BottomNavBar from '../../components/BottomNavBar'
import NavBar from '../../components/NavBar'
import FriendSuggestion from './FriendSuggestion'
import { Grid, Box } from '@mui/material'
import Feeds from './Feeds'
import ViewComments from '../viewcomments/ViewComments'
import { useGetAllPostQuery } from './homePageSlice'
import { extendedHomePageApiSlice } from './homePageSlice'
import { useDispatch, useSelector } from 'react-redux'
import { allPostResultData, friendSuggestion, userDetails } from './homePageSlice'
import WhileLoading from '../../components/WhileLoading'


const HomePage = () => {

    const dispatch = useDispatch();
    const { isLoading, isSuccess, isError, error } = useGetAllPostQuery();

    useEffect(() => {
        try {
            dispatch(extendedHomePageApiSlice.endpoints.getAllPost.initiate());
        } catch (error) {
            console.log(error);
        }
    }, [])

    let content;

    if (isLoading) {
        content = <WhileLoading />;
    } else if (isSuccess) {
        content = <Box><NavBar />
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
        </Box>
    }

    return (
        <>
            {content}
        </>
    )
}

export default HomePage