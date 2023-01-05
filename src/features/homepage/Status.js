import React from 'react'
import { Avatar, Box } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const Status = () => {
    return (
        <>
            <Box sx={{ position: 'relative', pt: '10px', pb: '10px', border: 1, borderColor: 'rgb(197,197,197)', borderRadius: { sm: '10px' }, mt: { xs: 0, sm: 3 }, mb: { xs: 0, sm: 2 }, }}  >
                <Box sx={{ display: 'flex', width: 'max-content' }} >
                    <Box sx={{ display: 'grid', height: '85px', mr: 1 }}>
                        <div style={{ display: 'flex', width: '66px', justifyContent: 'center', alignItems: 'center' }}>
                            <Avatar sx={{ width: '58px', height: "58px", position: 'relative', backgroundColor: 'rgb(211,211,211)' }} />
                            <Box sx={{ position: 'absolute', width: '56px', height: "56px", bottom: 0, display: 'flex', justifyContent: "right" }}><AddCircleOutlinedIcon sx={{ color: 'rgba(var(--d69,0,149,246),1)', width: '16px', height: '16px' }} /></Box>
                        </div>
                        <div style={{ display: 'flex', width: '66px', justifyContent: 'center', height: '30px', alignItems: 'center' }}>
                            <b style={{ display: 'flex', justifyContent: 'center', fontSize: '11px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: '', width: "100%", height: '16px', fontWeight: 500 }}>
                                Toyfat09
                            </b>
                        </div>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Status