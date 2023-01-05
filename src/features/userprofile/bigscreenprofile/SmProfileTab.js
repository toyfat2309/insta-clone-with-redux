import { React, useState } from 'react'
import { TabContext, TabPanel, TabList, } from '@mui/lab';
import { Tab, Box, Grid } from '@mui/material'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import ViewDayOutlinedIcon from '@mui/icons-material/ViewDayOutlined';

const SmProfileTab = () => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <>
            <TabContext value={value}>
                <Grid container sx={{ display: { xs: "none", sm: 'flex' }, justifyContent: "center" }}>

                    <Grid item xs={12} sx={{ height: '53px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <Tab label={<span style={{ color: "rgb(142,142,142)", fontSize: '12px', fontWeight: 600, verticalAlign: 'middle' }}><AppsOutlinedIcon sx={{ color: "rgb(142,142,142)", mr: 0.5, fontSize: 14, verticalAlign: 'middle' }} />POSTS</span>} sx={{ width: '106px', display: 'flex', alignItems: 'center', }} value="1">

                            </Tab>
                            <Tab label={<span style={{ color: "rgb(142,142,142)", fontSize: '12px', fontWeight: 600, verticalAlign: 'middle' }} ><BookmarkBorderOutlinedIcon sx={{ color: "rgb(142,142,142)", mr: 0.5, fontSize: 14, verticalAlign: 'middle' }} />SAVED</span>} sx={{ width: '106px', display: 'flex', alignItems: 'center', ml: { sm: 1, lg: 3 } }} value="2">

                            </Tab>
                            <Tab label={<span style={{ color: "rgb(142,142,142)", fontSize: '12px', fontWeight: 600, verticalAlign: 'middle' }}><PersonPinOutlinedIcon sx={{ color: "rgb(142,142,142)", mr: 0.5, fontSize: 14, verticalAlign: 'middle' }} />TAGGED</span>} sx={{ width: '106px', display: 'flex', alignItems: 'center', ml: { sm: 1, lg: 3 } }} value="3">

                            </Tab>
                        </TabList>
                    </Grid>
                    <Grid item sm={11} lg={8} sx={{}}>
                        <TabPanel value="1">
                            <p>hello 1</p>
                        </TabPanel>
                        <TabPanel value="2">
                            <p>hello 2</p>
                        </TabPanel>
                        <TabPanel value="3">
                            <p>hello 3</p>
                        </TabPanel>
                    </Grid>

                </Grid>

            </TabContext>
        </>
    )
}

export default SmProfileTab