import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardContent, Box, Skeleton, Grid } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { NavLink } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { viewCommentModal } from './viewCommentSlice';
import { useSelector, useDispatch } from 'react-redux';



const StatusPending = () => {

    const [height, setHeight] = useState(window.innerHeight);
    const matches = useMediaQuery('(max-width:480px)');

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(viewCommentModal({status:false,id:null}));
    }

    return (
        <>
            {
                !matches ?
                    (

                        <Grid container sx={{ justifyContent: 'center', bgcolor: 'rgba(0,0,0,0.5)', alignItems: 'center' }}>
                            <Grid item sm={12} lg={12} >
                                <Grid container sx={{ height: { xs: height, sm: '592px' }, display: { xs: 'none', sm: 'flex' } }}>
                                    <Grid item xs={12} sm={6} sx={{ height: '100%' }}>
                                        <Card sx={{ height: '100%', width: '100%' }}>
                                            {<Skeleton sx={{ height: '100%' }} animation="wave" variant="rectangular" />}
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={6} sx={{ height: '100%' }}>
                                        <Card sx={{ height: '100%', width: '100%' }}>
                                            <CardHeader
                                                avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
                                                action={null}
                                                title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
                                                subheader={<Skeleton animation="wave" height={10} width="40%" />}
                                            />
                                            <Box sx={{ height: '400px' }}>

                                            </Box>
                                            <CardContent sx={{}}>
                                                <Skeleton animation="wave" height={15} width="70%" style={{ marginBottom: 6 }} />
                                                <Skeleton animation="wave" height={15} width="60%" style={{ marginBottom: 6 }} />
                                                <Skeleton animation="wave" height={15} width="30%" />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    ) :
                    (
                        <Grid container sx={{ height: '100vh !important', zIndex: 99, alignItems: 'center', backgroundColor: 'white' }}>
                            <Grid item xs={12} sm={6} sx={{ height: '90vh', position: 'relative', }}>
                                <Grid container sx={{ justifyContent: 'center', alignItems: 'center', height: '44px !important', backgroundColor: "white", position: 'relative', top: 0, pr: 2, pl: 2, borderBottom: 1, borderColor: 'gray', display: { xs: 'flex', sm: "none" }, zIndex: 1 }}>
                                    <Grid item xs={12} lg={8.2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ textDecoration: 'none', color: 'black', fontSize: 9, display: 'flex', justifyContent: 'left' }} onClick={handleClose}><KeyboardBackspaceIcon sx={{ fontSize: '30px', fontWeight: 100, zIndex: 1 }} onClick={handleClose} /></span>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <b style={{ fontWeight: 600 }}>Comments</b>
                                        </Box>
                                        <NavLink style={{ textDecoration: 'none', color: 'black', fontSize: 9 }} to=""></NavLink>
                                    </Grid>
                                </Grid>
                                <Card sx={{ bgcolor: 'white', zIndex: 1, width: '100%',border:0,borderColor:'white !important' }}>
                                    <Grid container sx={{border:0,borderColor:'white',my:2,px:2}}>
                                        <Grid item xs={2}>
                                            <Skeleton animation="wave" variant="circular" width={40} height={40} />
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                                            <Skeleton animation="wave" height={10} width="40%" />
                                        </Grid>
                                    </Grid>
                                    <CardContent sx={{ px: 0, position: 'absolute', bottom: 0, width: '100%', px: 2 }}>
                                        <Skeleton animation="wave" height={15} width="70%" style={{ marginBottom: 6 }} />
                                        <Skeleton animation="wave" height={15} width="60%" style={{ marginBottom: 6 }} />
                                        <Skeleton animation="wave" height={15} width="30%" />

                                    </CardContent>

                                </Card>
                            </Grid>
                        </Grid>
                    )

            }


        </>
    )
}

export default StatusPending