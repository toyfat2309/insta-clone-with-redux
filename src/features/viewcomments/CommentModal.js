import React, { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { Box, Typography, Button, Grid, TextField, } from '@mui/material';
import { commentModalState, viewCommentModal } from './viewCommentSlice';
import { useSelector, useDispatch } from 'react-redux';
import StatusPending from './StatusPending';
import CloseIcon from '@mui/icons-material/Close';
import StatusFufilled from './StatusFufilled';
import { useViewCommentsQuery, useLazyViewCommentsQuery } from './viewCommentApiSlice';
import { apiSlice } from '../api/apiSlice';
import { currentPost } from './viewCommentApiSlice';
import { allComment } from './viewCommentApiSlice';

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
    const postId = useSelector((state) => state.viewComments.postId);

    const dispatch = useDispatch();

    const { data,isFetching, isSuccess, isError, error, refetch } = useViewCommentsQuery(postId,{skip:open === false})

    useEffect(() => {
        if (open) {
            refetch()
        }
    },[open])

    const handleClose = () => {
        dispatch(viewCommentModal({status:false,id:null}));
        //refetch()
        //dispatch(apiSlice.util.invalidateTags(['Comment']))
    }

    let content;

    if (isFetching) {
        content = <StatusPending />
    } else if (isSuccess) {
        
        content = <StatusFufilled data={data}/>
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