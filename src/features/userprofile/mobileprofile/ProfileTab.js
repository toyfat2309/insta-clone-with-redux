import { React, useState } from 'react'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import ViewDayOutlinedIcon from '@mui/icons-material/ViewDayOutlined';
import { TabContext, TabPanel, TabList, } from '@mui/lab';
import { Tab, Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';



const ProfileTab = () => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let TabOne;


    return (
        <>
            <Box sx={{ width: '100%', typography: 'body1', }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', p: '0px !important' }}>
                            <Tab label={<AppsOutlinedIcon style={{ color: "rgb(142,142,142)" }} />} value='1'/>
                            <Tab label={<ViewDayOutlinedIcon style={{ color: "rgb(142,142,142)" }} />} value='2' />
                            <Tab label={<BookmarkBorderOutlinedIcon style={{ color: "rgb(142,142,142)" }} />} value='3' />
                            <Tab label={<PersonPinOutlinedIcon style={{ color: "rgb(142,142,142)" }} />} value='4' />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Box sx={{width:'100%',display:'flex',justifyContent:'center',pt:5}}>
                        <CircularProgress />
                        </Box>
                    </TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                    <TabPanel value="4">Item Four</TabPanel>
                </TabContext>
            </Box>
        </>
    );
}

export default ProfileTab