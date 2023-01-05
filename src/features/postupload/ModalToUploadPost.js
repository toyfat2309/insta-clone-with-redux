import { React, useEffect, useState } from 'react'
import Modal from '@mui/material/Modal';
import { modalState } from './postUploadSlice';
import { openModal, imageState, setImageState } from './postUploadSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Button, Grid, TextField, } from '@mui/material';
import SelectImage from './SelectImage';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
};


const ModalToUploadPost = () => {

    let cancel ;

    const dispatch = useDispatch(); // to dispatch action
    const state = useSelector(modalState); // redux modal state to change modal state
    const imgState = useSelector(imageState); // redux modal state to change modal state
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        dispatch(openModal(false)); // dispatching action to change state of modal to false
        dispatch(setImageState(false))
        setOpen(false);
    }

    return (
        <>
            <Modal
                open={state}
                onClose={!imgState ? handleClose : handleOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={style} sx={{ width: { xs: '90%', sm: '50%', md: '60%', lg: '38%' } }}>

                    <Modal
                        hideBackdrop
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                    >
                        <Box sx={{ ...style, width: { xs: 300, sm: 400 }, borderRadius: '15px' }}>
                            <Typography variant="h6" sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 3 }}>
                                Disacard Post?
                            </Typography>
                            <Typography variant="body1" sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 1,mb:2, color: 'gray' }}>
                                If you leave, your post won't be saved.
                            </Typography>
                            <Button onClick={handleClose} sx={{width: '100%', display: 'flex', justifyContent: 'center',borderTop:1,borderBottom:1,borderColor:'gray',height:'48px',color:'red',fontWeight:600}}>Discard</Button>
                            <Button onClick={() => cancel(setOpen(false))} sx={{width: '100%', display: 'flex', justifyContent: 'center',borderBottom:1,borderColor:'gray',height:'48px'}}>Cancel</Button>
                        </Box>
                    </Modal>

                    <SelectImage />
                    
                </Box>
            </Modal>
        </>
    )
}

export default ModalToUploadPost