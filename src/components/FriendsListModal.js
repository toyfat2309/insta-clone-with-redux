import{ React, useRef } from 'react'
import Modal from '@mui/material/Modal';
import { Card, CardHeader, CardContent, Box, Skeleton, Grid, Typography } from '@mui/material'
import { friends } from '../features/userprofile/userProfileSlice'
import { useSelector, useDispatch } from 'react-redux'
import { viewFollowers, viewFollwing } from '../features/userprofile/userProfileSlice'
import BottomNavBar from './BottomNavBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { NavLink } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
};


const FriendsListModal = () => {

    const matches = useMediaQuery('(max-width:480px)');
    const closeRef = useRef()

    let btNav = <Box>{matches ? <BottomNavBar /> : ''}</Box>

    const dispatch = useDispatch()
    const modalState = useSelector((state) => state.userProfile)

    const handleClose = () => {
        dispatch(viewFollowers({Boolean:false,option:''}))
        
    }

    const loadingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const loading = loadingArray.map((num,i) => (<Card sx={{ width: '100%' }} key={i}><CardHeader
        avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
        action={null}
        title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
    />
    </Card>))


    return (
        <>
            <Modal
                open={modalState.modal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                ref={closeRef}
            >
                <Box style={style} sx={{ width: { xs: '100%', sm: '50%', lg: '36%' }, backgroundColor: { xs: 'white', sm: '' }, height: matches ? '93vh' : 'auto',borderRadius:{xs:0,sm:'10px'}, zIndex:1}}>
                    {
                        matches ?
                            (<Box >
                                <Grid container sx={{ justifyContent: 'center', alignItems: 'center', height: '44px !important', backgroundColor: "white", position: 'relative', top: 0, pr: 2, pl: 2, borderBottom: 1, borderColor: 'gray', display: { xs: 'flex', sm: "none" }, zIndex: 1 }}>
                                    <Grid item xs={12} lg={8.2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div style={{ textDecoration: 'none', color: 'black', fontSize: 9, display: 'flex', justifyContent: 'left' }} onClick={ () => handleClose()} ><KeyboardBackspaceIcon sx={{ fontSize: '30px', fontWeight: 100, zIndex: 1 }}/></div>
                                        <Box sx={{ display: "flex", alignItems: "center" }} >
                                            <b style={{ fontWeight: 600 }} >{modalState.options}</b>
                                        </Box>
                                        <NavLink style={{ textDecoration: 'none', color: 'black', fontSize: 9 }} to=""></NavLink>
                                    </Grid>
                                </Grid>
                                {loading}
                                {btNav}
                            </Box>) : 
                            (
                                <Box sx={{height:400 , overflowY:'scroll'}}>
                                    <div >
                                    <Typography variant="h6" color="initial" sx={{fontWeight:600,width:'100%',display:'flex',justifyContent:'center',mt:2}}>{modalState.options}</Typography>
                                    {loading}
                                    </div>
                                </Box>
                            )
                    }
                </Box>
            </Modal>
        </>
    )
}

export default FriendsListModal