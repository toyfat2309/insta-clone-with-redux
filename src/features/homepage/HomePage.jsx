import { React, useEffect } from 'react'
import BottomNavBar from '../../components/BottomNavBar'
import NavBar from '../../components/NavBar'
import FriendSuggestion from './FriendSuggestion'
import { Grid, Box } from '@mui/material'
import Feeds from './Feeds'
import ViewComments from '../viewcomments/ViewComments'
import { useGetAllPostQuery, useLazyGetAllPostQuery } from './homePageSlice'
import { extendedHomePageApiSlice } from './homePageSlice'
import { useDispatch, useSelector } from 'react-redux'
import WhileLoading from '../../components/WhileLoading'


const HomePage = () => {

    //const dispatch = useDispatch();
    const { isLoading, isSuccess, isError, error } = useGetAllPostQuery();
    const [ getAllPost ] = useLazyGetAllPostQuery()

   
    useEffect(() => {
        try {
            async function allPost () {
                const post = await getAllPost().unwrap()
                console.log(post); 
            }
            allPost()
        } catch (error) {
            console.log(error?.status);
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