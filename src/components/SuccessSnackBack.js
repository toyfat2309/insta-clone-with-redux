import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { closeAllUploadModal } from '../features/postupload/postUploadSlice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius:5
};
const SuccessSnackBack = () => {
    const state = useSelector((state) => state.postUpload.toast)
    const postUploadState = useSelector((state) => state.postUpload.postUploadState)
    const dispatch = useDispatch()

    let display;
    if (postUploadState === 'fulfilled') {
        display = <Stack sx={{ width: '80%' }} spacing={2}>
            <Alert
                action={
                    <Button color="inherit" size="small" onClick={()=> handleClose()}>
                        UNDO
                    </Button>
                }
            >
                Post Uploaded SuccessFully
            </Alert>
        </Stack>
    } else {
        display = <CircularProgress />
    }

    const handleClose = () => {
        dispatch(closeAllUploadModal())
    }

    return (
        <div>
            <Modal
                open={state}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{...style,width:{xs:'300px',sm:'500px'}}}>
                    <div style={{ width: '100%', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {display}
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default SuccessSnackBack