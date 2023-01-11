import { Grid, Typography, Box, Button, IconButton, TextField } from '@mui/material';
import { React, useRef, useState } from 'react';
import imgg from '../../assets/imgg.png';
import AspectRatioRoundedIcon from '@mui/icons-material/AspectRatioRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { setImageState } from './postUploadSlice'
import { userDetails } from '../homepage/homePageSlice';
import { newPost } from './postUploadSlice';


const SelectImage = () => {

    const selectImageRef = useRef(); // useRef to pick image file
    const [postImage, setPostImage] = useState(null); // state of the image after uploading to base64
    const [caption, setpostCaption] = useState(''); // caption of post
    const [objectFit, setObjectFit] = useState('cover'); // image size 
    const [anchorEl, setAnchorEl] = useState(null); // state for changing image size from 1:1 / objectFit
    const open = Boolean(anchorEl);

    const currentUserDetails = useSelector(userDetails)
    const dispatch = useDispatch();

    // function to pick image from device
    const pickFile = (e) => {
        const file = e.target.files[0]; // image file to send to backend
        const reader = new FileReader(); 
        reader.readAsDataURL(file); // reading the uploaded file as data url
        reader.onload = () => {
            dispatch(setImageState(true))
            const result = reader.result; // base 64 of the image 
            setPostImage(result);
        };
    };

    // function to create new post
    const createNewPost = async() => {
        const date = new Date();
        const isoDate = date.toISOString();
        const uniqueId = currentUserDetails._id
        const details = { postImage, caption, isoDate, objectFit,uniqueId }
        dispatch(newPost(details))
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget); // state for opening image size
    };

    const handleClose = () => {
        setAnchorEl(null); // state for closing image size
    };

    const oneOne = () => {
        setObjectFit('cover'); // set image size to 1:1
    };

    const original = () => {
        setObjectFit('contain');  // set image size to objecFit
    };

    return (
        <>
            <Grid container sx={{ bgcolor: 'white', borderRadius: '10px' }}>
                <Grid item xs={12} sx={{ py: '8px', display: 'flex', justifyContent: 'center', borderBottom: 1, borderColor: 'rgb(197,197,197)' }}>
                    <Typography variant="body2" color="initial" sx={{ fontSize: '16px', fontWeight: 700 }}>
                        Create new post
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ p: '', height: { xs: '418px', sm: '480px', md: '722px', lg: "570px" }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {
                        postImage ?
                            (
                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ width: '100%', height: { xs: '348px', sm: '410px', md: '652px', lg: "500px" }, position: 'relative' }}>
                                        <Box component="img" src={postImage} sx={{ width: '100%', height: { xs: '348px', sm: '410px', md: '652px', lg: "500px" }, objectFit: objectFit }}>
                                        </Box>
                                        <Box sx={{ position: 'absolute', bottom: 0, pl: 3, pb: 3 }}>
                                            <IconButton id="basic-button" aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick} sx={{ zIndex: 1, cursor: 'pointer', backgroundColor: 'rgb(0,0,0,0.5)' }}>
                                                <AspectRatioRoundedIcon sx={{ color: 'white' }} />
                                            </IconButton>
                                        </Box>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            <MenuItem sx={{ borderBottom: 1 }} onClick={oneOne}>1 : 1</MenuItem>
                                            <MenuItem onClick={original}>Original</MenuItem>

                                        </Menu>
                                    </Box>
                                    <Box sx={{ display: 'flex', p: '10px' }}>
                                        <TextField multiline row={1} maxRows={1} size="small" sx={{ zIndex: 1, width: '80%' }} onChange={(e) => setpostCaption(e.target.value)} />
                                        <Button variant="contained" size="small" sx={{ width: '20%', ml: 1, zIndex: 1, height: '40px' }} onClick={()=>createNewPost()} >Post</Button>
                                    </Box>
                                </Box>
                            ) :
                            (
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <Box component="img" src={imgg} sx={{ width: '90px', height: '68px' }} />
                                    <Typography variant="body2" color="initial" sx={{ fontSize: '22px', width: '100%', display: 'flex', justifyContent: "center", color: '#262626' }}>
                                        Upload photos (.Jpeg, .Png, etc)
                                    </Typography>
                                    <Button variant="contained" size="small" sx={{ mt: 2, backgroundColor: 'rgba(var(--d69,0,149,246),1)', fontSize: '14px', fontWeight: 700, textTransform: "none", cursor: 'pointer', zIndex: 99 }} onClick={() => selectImageRef.current.click()}>
                                        Select from Device
                                    </Button>
                                    <input type="file" ref={selectImageRef} onChange={(e) => pickFile(e)} hidden />
                                </Box>
                            )
                    }

                </Grid>
            </Grid>
        </>
    )
}

export default SelectImage