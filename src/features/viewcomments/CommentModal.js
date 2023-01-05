import React from 'react';
import Modal from '@mui/material/Modal';
import { Box, Typography, Button, Grid, TextField, } from '@mui/material';
import { commentModalState, viewCommentModal } from './viewCommentSlice';
import { useSelector, useDispatch } from 'react-redux';
import StatusPending from './StatusPending';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 24,
};

const CommentModal = () => {

    const open = useSelector(commentModalState);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(viewCommentModal(false));
    }


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={style} sx={{ width: { xs: '100%', sm: '90%', lg: '60%', alignItems: 'center' }}}>
                   <StatusPending />
                </Box>
                
            </Modal>
        </>
    )
}

export default CommentModal