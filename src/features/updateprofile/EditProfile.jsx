import { React, useRef, useState, useEffect } from 'react'
import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import SmUpwardOptions from './SmUpwardOptions'

const EditProfile = () => {

    const [updateDetails, setupdateDetails] = useState([])
    const [profilePhoto, setprofilePhoto] = useState(false)// usestate to store the profilepix before uploadingto cloudinary
    const [name, setname] = useState('')// usestate to store the edited name
    const [userName, setuserName] = useState('')// usestate to store the edited username
    const [profilePicture, setProfilePicture] = useState('')// usestate to store the edited username
    const [bio, setbio] = useState('')// usestate to store the edited bio
    const [email, setemail] = useState('')// usestate to store the edited email
    const [phoneNumber, setphoneNumber] = useState('')// usestate to store the edited phonenumber
    const [id, setid] = useState('')// usestate to store the edited phonenumber
    const [webSite, setwebSite] = useState('')// usestate to store edited website link
    const [oldUserName, setoldUserName] = useState('')// usestate to store edited website link
    const profilePix = useRef() // useRef to click hidden input

    const pickFile = (e) => {
        let file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            const result = reader.result
        }
    }


  return (
    <>
    <Box sx={{ height: '65px',position:'sticky',top:0,width:'100vw',zIndex:99}}>
         <NavBar />
         </Box>
            <Grid container sx={{ pl: { sm: 3, lg: 0 }, pr: { sm: 3, lg: 0 }, display: 'flex', justifyContent: "center", mt: { xs: 0, sm: '32px' }, pb: { xs: 9, sm: 0 } }}>
                <Grid item xs={12} lg={8} sx={{ border: { xs: 0, sm: 1 }, borderColor: 'rgb(197,197,197) !important' }}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item xs={3.2} sx={{ display: { xs: 'none', sm: 'grid' } }}>
                            <SmUpwardOptions />
                        </Grid>
                        <Grid item xs={12} sm={8.8} sx={{ pt: { xs: '20px', sm: '32px' }, px: { xs: 2, sm: 0 }, pb: '32px' }}>
                            <form action="">
                                <Grid container>
                                    <Grid item xs={2} sm={2.6} sx={{ display: 'flex', flexDirection: { xs: 'left', sm: 'row-reverse' } }}>
                                        <Avatar src={updateDetails.profilepix} sx={{ width: '38px', height: '38px', backgroundColor: 'rgb(211,211,211)', cursor: 'pointer' }} onClick={() => profilePix.current.click()} />
                                        <input type='file' ref={profilePix} onChange={(e) => pickFile(e)} hidden />
                                    </Grid>
                                    <Grid item xs={10} sm={9.4} sx={{ display: 'grid', pl: { xs: 0, sm: 4 } }}>
                                        <span style={{ fontSize: '20px', fontWeight: 500, color: '#262626', marginBottom: '1.5px' }}>{updateDetails.fullname}</span>
                                        <span style={{ width: 'fit-content', border: 'none', color: 'rgba(var(--d69,0,149,246),1)', backgroundColor: 'white', padding: 0, fontWeight: 600, fontSize: '12px', cursor: 'pointer' }} onClick={() => profilePix.current.click()}>Change profile photo</span>
                                    </Grid>
                                    <Grid item xs={12} sm={2.6} sx={{ display: 'flex', flexDirection: { xs: 'left', sm: 'row-reverse' }, mt: 3 }}>
                                        <span style={{ fontSize: '16px', fontWeight: 700, cursor: 'pointer', color: '#262626', marginBottom: '1.5px' }}>Name</span>
                                    </Grid>
                                    <Grid item xs={12} sm={9.4} sx={{ display: 'grid', pl: { xs: 0, sm: 4 }, mt: { xs: 1, sm: 2 } }}>
                                        <TextField size='small'  sx={{ width: { xs: '100%', sm: '355px' }, mb: 1.5 }} placeholder={updateDetails.fullname} onChange={(e) => setname(e.target.value)} />
                                        <span style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '355px', fontSize: '12px', color: 'gray' }}>Help people discover your account by using the name you're known by: either your full name, nickname, or business name.</span>
                                        <span style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left', width: '355px', fontSize: '12px', color: 'gray', marginTop: '8px' }}>You can only change your name twice within 14 days.</span>
                                    </Grid>
                                    <Grid item xs={12} sm={2.6} sx={{ display: 'flex', flexDirection: { xs: 'left', sm: 'row-reverse' }, mt: 3 }}>
                                        <span style={{ fontSize: '16px', fontWeight: 700, cursor: 'pointer', color: '#262626', marginBottom: '1.5px' }}>Username</span>
                                    </Grid>
                                    <Grid item xs={12} sm={9.4} sx={{ display: 'grid', pl: { xs: 0, sm: 4 }, mt: { xs: 1, sm: 2 } }}>
                                        <TextField size='small' sx={{ width: { xs: '100%', sm: '355px' }, mb: 1.5 }} placeholder={updateDetails.username} onChange={(e) => setuserName(e.target.value)} />
                                        <Box sx={{ width: '356px' }}>
                                            <span style={{ width: '355px', fontSize: '12px', color: 'gray' }}>In most cases, you'll be able to change your username back to tilamafia for another 14 days</span><span style={{ fontSize: '12px', color: 'rgba(var(--d69,0,149,246),1)', marginLeft: '3px' }}>Learn more</span>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={2.6} sx={{ display: 'flex', flexDirection: { xs: 'left', sm: 'row-reverse' }, mt: 3 }}>
                                        <span style={{ fontSize: '16px', fontWeight: 700, cursor: 'pointer', color: '#262626', marginBottom: '1.5px' }}>Website</span>
                                    </Grid>
                                    <Grid item xs={12} sm={9.4} sx={{ display: 'grid', pl: { xs: 0, sm: 4 }, mt: { xs: 1, sm: 2 } }}>
                                        <TextField size='small' sx={{ width: { xs: '100%', sm: '355px' }, mb: .5 }} onChange={(e) => setwebSite(e.target.value)} />
                                        <span style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '355px', fontSize: '12px', color: 'gray' }}>Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.</span>

                                    </Grid>
                                    <Grid item xs={12} sm={2.6} sx={{ display: 'flex', flexDirection: { xs: 'left', sm: 'row-reverse' }, mt: 3 }}>
                                        <span style={{ fontSize: '16px', fontWeight: 700, cursor: 'pointer', color: '#262626', marginBottom: '1.5px' }}>Bio</span>
                                    </Grid>
                                    <Grid item xs={12} sm={9.4} sx={{ display: 'grid', pl: { xs: 0, sm: 4 }, mt: { xs: 1, sm: 2 } }}>
                                        <textarea style={{ width: '355px', marginBottom: '3px', height: '60px' }} onChange={(e) => setbio(e.target.value)}></textarea>
                                        <span style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left', width: '355px', fontSize: '12px', color: 'gray' }}>150 characters</span>
                                    </Grid>
                                    <Grid item xs={12} sm={2.6} sx={{ display: 'flex', flexDirection: { xs: 'left', sm: 'row-reverse' }, mt: 3 }}>

                                    </Grid>
                                    <Grid item xs={12} sm={9.4} sx={{ display: 'grid', pl: { xs: 0, sm: 4 }, mt: { xs: 1, sm: 2 }, pt: { xs: 0, sm: 1.5 } }}>
                                        <b style={{ color: 'gray', marginBottom: '4px' }}>Personal Information</b>
                                        <span style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '355px', fontSize: '12px', color: 'gray' }}>Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.</span>
                                    </Grid>
                                    <Grid item xs={12} sm={2.6} sx={{ display: 'flex', flexDirection: { xs: 'left', sm: 'row-reverse' }, mt: 3 }}>
                                        <span style={{ fontSize: '16px', fontWeight: 700, cursor: 'pointer', color: '#262626', marginBottom: '1.5px' }}>Email</span>
                                    </Grid>
                                    <Grid item xs={12} sm={9.4} sx={{ display: 'grid', pl: { xs: 0, sm: 4 }, mt: { xs: 1, sm: 2 } }}>
                                        <TextField size='small' sx={{ width: { xs: '100%', sm: '355px' }, mb: 1.5 }} placeholder={email}  onChange={(e) => setemail(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12} sm={2.6} sx={{ display: 'flex', flexDirection: { xs: 'left', sm: 'row-reverse' }, mt: 3 }}>
                                        <span style={{ fontSize: '15px', fontWeight: 700, cursor: 'pointer', color: '#262626', marginBottom: '1.5px' }}>Phone Number</span>
                                    </Grid>
                                    <Grid item xs={12} sm={9.4} sx={{ display: 'grid', pl: { xs: 0, sm: 4 }, mt: { xs: 1, sm: 1 } }}>
                                        <TextField size='small' sx={{ width: { xs: '100%', sm: '355px' }, mb: 1.5 }} onChange={(e) => setphoneNumber(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12} sm={2.6} sx={{ display: 'grid', justifyContent: { xs: 'left', sm: 'right' }, mt: 1 }}>
                                        <Typography variant="body" sx={{ pl: { xs: 0, sm: 1, md: 0 }, fontSize: '15px', fontWeight: 700, cursor: 'pointer', color: '#262626', marginBottom: '1.5px', display: { xs: 'flex', md: 'none' } }}>Similar account suggestions </Typography>
                                        <Typography variant="body" sx={{ fontSize: '16px', fontWeight: 700, cursor: 'pointer', color: '#262626', display: { xs: 'none', md: 'flex' } }}>Similar account</Typography>
                                        <Typography variant="body" sx={{ fontSize: '16px', fontWeight: 700, cursor: 'pointer', color: '#262626', marginBottom: '1.5px', width: '100%', display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>suggestions </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={9.4} sx={{ display: 'flex', alignItems: 'center', pl: { xs: 0, sm: 4 }, mt: { xs: 1, sm: 1 } }}>
                                        <input type='checkbox' />
                                        <b style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '250px', fontSize: '14px', color: '#262626', marginLeft: "3px" }}>Include your account when recommending similar accounts people might want to follow. [?]</b>
                                    </Grid>
                                    <Grid item xs={12} sm={2.6} sx={{ display: 'flex', flexDirection: { xs: 'left', sm: 'row-reverse' }, mt: 3 }}>
                                    </Grid>
                                    <Grid item xs={12} sm={9.4} sx={{ display: 'flex', pl: { xs: 0, sm: 4 }, mt: { xs: 1, sm: 1 }, mt: "32px" }}>
                                        <Button type="submit" variant="contained" size='small' sx={{ width: 'fit-Content', fontSize: '14px', p: '5px 9px', mr: { xs: 5, sm: "100px" } }} >Submit</Button>
                                        <button style={{ width: 'fit-content', border: 'none', color: 'rgba(var(--d69,0,149,246),1)', backgroundColor: 'white', padding: 0, fontWeight: 600 }}>Temporarily deactivate my account</button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    </>
  )
}

export default EditProfile