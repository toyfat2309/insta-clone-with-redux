import React from 'react';
import Modal from '@mui/material/Modal';
import { Box, Typography, Button, Grid, TextField, } from '@mui/material';
import { commentModalState, viewCommentModal } from './viewCommentSlice';
import { useSelector, useDispatch } from 'react-redux';
import StatusPending from './StatusPending';
import CloseIcon from '@mui/icons-material/Close';
import StatusFufilled from './StatusFufilled';
import { useViewCommentsQuery } from './viewCommentApiSlice';
import { SkipToken } from '@reduxjs/toolkit/dist/query';

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

    const { isLoading, isSuccess, isError, error } = useViewCommentsQuery({postId:'63c10a2f80f5551c12b33013'},{skip: open === false})

    const handleClose = () => {
        dispatch(viewCommentModal(false));
    }

    let content;

    if (isLoading) {
        content = <StatusPending />
    } else if (isSuccess) {
        content = <StatusFufilled />
    }else if(isError){
        content = <h1>network issue</h1>
    }


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={style} sx={{ width: { xs: '100%', sm: '90%', lg: '67%', alignItems: 'center', } }}>
                    {
                        content
                    }
                </Box>

            </Modal>
        </>
    )
}

export default CommentModal