import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { React, useEffect, useState } from 'react'
import Vid from '../../assets/bgvid.mp4'
import loginlogo from '../../assets/instagramlogin.png';
import OR from '../../assets/or.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import apple from '../../assets/apple.png';
import andriod from '../../assets/andriod.png';
import Footer from '../../components/Footer';
import axios from 'axios'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { NavLink,useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

const Signin = () => {

    const navigate = useNavigate()

    const [error, setError] = useState('')
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {

    }, [isClicked])

    const url = 'http://localhost:4005/users/login'

    const formik = useFormik({
        initialValues: {
            id: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(url);
            setIsClicked(true)
            axios.post(url, values).then((result) => {
                if (result.data.status) {
                    localStorage.token = result.data.token
                    // setUserName(result.data.user.username)
                    setTimeout(() => {
                        navigate('/feeds')
                    }, 3000)

                } else {
                    setError(result.data.message)
                    setIsClicked(false)
                }
            })
        },
        validationSchema: yup.object({
            id: yup.string().required('field reuired'),
            password: yup.string().required('field reuired')
        }),

    })

    return (
        <>
            <Grid container sx={{ height: { xs: 'auto', sm: "90vh", lg: '90vh' }, alignItems: { sm: 'center', lg: 'normal' }, justifyContent: 'center', position: 'relative', pt: { xs: 5, sm: 0, lg: 4 } }}>
                <Grid item xs={12} sm={6} md={10} lg={6.2}>
                    <Grid container >
                        <Grid item xs={12} sm={6} sx={{ display: { xs: 'none', md: "flex", mr: 4 } }}>

                            <video autoPlay={true} loop muted style={{ width: '100%' }} src={Vid} alt="video"  />

                        </Grid>
                        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', flexWrap: "wrap", justifyContent: 'right', pl: '30px', pr: { xs: '30px', sm: 0 } }} >
                            <Box sx={{ border: 1, borderColor: 'rgb(211,211,211)', pt: 3, width: '100%' }}>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <img src={loginlogo} alt="" width='200px' />
                                </Box>
                                <Box sx={{ pl: 4, pr: 4, mt: 3 }}>
                                    <form action="" onSubmit={formik.handleSubmit}>
                                        <TextField
                                            label={formik.touched.id ?
                                                <div style={{ color: 'red', fontSize: 10 }}>
                                                    <b style={{ color: 'black', fontSize: 10 }}>Username, or email:</b>
                                                    <span style={{ marginLeft: 3 }}>{formik.errors.id}</span>
                                                </div>
                                                :
                                                <div style={{ color: 'black', fontSize: 10 }}>Mobile Number or Email
                                                </div>}
                                            id="filled-size-small" type="text" variant="filled" size="small"
                                            InputProps={{ disableUnderline: true, style: { backgroundColor: 'rgb(249,249,249)' } }} InputLabelProps={{ style: { color: "black", marginTop: 2, fontSize: 10 } }}
                                            sx={{ mb: 1, width: '100%' }}
                                            onChange={formik.handleChange('id')}
                                            onBlur={formik.handleBlur('id')}
                                            value={formik.values.id}
                                        />
                                        <TextField
                                            label={formik.touched.password ?
                                                <div style={{ color: 'red', fontSize: 10 }}>
                                                    <b style={{ color: 'black', fontSize: 10 }}>password:</b>
                                                    <span style={{ marginLeft: 3 }}>{formik.errors.password}</span>
                                                </div>
                                                :
                                                <div style={{ color: 'black', fontSize: 10 }}>password
                                                </div>}
                                            id="filled-size-small" type="password" variant="filled" size="small"
                                            InputProps={{ disableUnderline: true, style: { backgroundColor: 'rgb(249,249,249)' } }} InputLabelProps={{ style: { color: "black", marginTop: 2, fontSize: 10 } }}
                                            sx={{ width: '100%', mb: 1 }} onChange={formik.handleChange('password')}
                                            onBlur={formik.handleBlur('password')}
                                            value={formik.values.password}
                                        />

                                        {!isClicked ?
                                            <Button type="submit" variant='contained' size="small" sx={{ backgroundColor: 'rgba(var(--d69,0,149,246),1)', width: '100%', textTransform: 'none', mb: 2 }}>
                                                Log in
                                            </Button>
                                            :
                                            <Button variant='contained' size="small" sx={{ backgroundColor: 'rgba(var(--d69,0,149,246),1)', width: '100%', textTransform: 'none', mb: 2 }}>
                                                <CircularProgress style={{ width: '20px', height: "20px", color: 'white' }} />
                                            </Button>}
                                        <img src={OR} alt="" width="100%" />
                                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2, flexDirection: 'column' }}>
                                            <Button variant='text' size="small" sx={{ textTransform: 'none', color: 'rgba(75, 119, 190, 1)', fontWeight: 700 }}>
                                                <FacebookIcon style={{ marginRight: 4 }} /> Log in with facebook
                                            </Button>
                                            <Button variant='text' size="small" sx={{ textTransform: 'none', color: 'rgba(75, 119, 190, 1)', fontWeight: 500 }}>
                                                forgot password?
                                            </Button>
                                            <span style={{ color: 'red', fontSize: "12px", width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>{error}</span>
                                        </Box>
                                    </form>
                                </Box>
                            </Box>
                            <Box sx={{ border: 1, borderColor: 'rgb(211,211,211)', height: '10%', mt: 1.5, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '13px' }}>
                                <b >Don't have an Account?</b><NavLink to='/signup' style={{ textDecoration: 'none', color: 'rgba(var(--d69,0,149,246),1)', fontWeight: 900, marginLeft: 2 }}>
                                    Sign Up
                                </NavLink>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <Typography variant="body2" color="initial" sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2, mb: 2 }}>
                                    Get the App
                                </Typography>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2 }}>
                                    <Box component='img' src={apple} alt="" sx={{ width: 130 }} />
                                    <Box component='img' src={andriod} alt="" sx={{ width: 130 }} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container sx={{ justifyContent: 'center', mt: { xs: '100px', sm: 0 } }}>
                <Grid item xs={10.4} sm={11} md={9} lg={7.5}>
                    <Footer />
                </Grid>
            </Grid>
        </>
    )
}

export default Signin