import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import {React,useState,useEffect} from 'react'
import loginlogo from '../../assets/instagramlogin.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import OR from '../../assets/or.png';
import apple from '../../assets/apple.png';
import andriod from '../../assets/andriod.png';
import Footer from '../../components/Footer';
import { useFormik } from 'formik';
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios'
import * as yup from 'yup'

import CircularProgress from '@mui/material/CircularProgress';

const Signup = () => {

    const url = 'http://localhost:4005/users/signup' //url for post request

    const navigate = useNavigate() //use navigate
    const [message, setmessage] = useState('') // useState
    const [status, setstatus] = useState(false) // useState
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {

    }, [isClicked])

    // formik to handle form
    const formik = useFormik({
        initialValues: {
            id: '',
            fullname: '',
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(values);
            setIsClicked(true)
           axios.post(url,values).then((result)=>{
               setstatus(result.data.status)
               console.log(message);
               if (result.data.status) {
                setmessage(result.data.message)
                setTimeout(()=>{
                    navigate('/')
                },3000)
               }else{
                setmessage(result.data.message)
                setIsClicked(false)
               }
           })

       },
        validationSchema: yup.object({
            id: yup.string().required('Field Required').matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'invalid email'),
            fullname: yup.string().required('Field Required').min(6, 'minimum of six characters').matches(/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/, 'must consist of first name and last name'),
            username: yup.string().required('Field Required'),
            password: yup.string().required('Field Required').min(6, 'passwrod must be greater than six characters').max(20, 'less than 21')
        })
        
        
    })
    return (
        <>
        <Box sx={{display:'grid',height:{xs:'auto',sm:"90vh",lg:'auto'},alignContent:'center'}}>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={12} sm={5} lg={3} sx={{ border: { xs: 0, sm: 1 }, borderColor: 'rgb(197,197,197) !important', mt: 2, pt: 5 }} className="border">
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <img src={loginlogo} alt="" width='180px' />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', lineHeight: 1.2, mt: 1.5 }}>
                        <span style={{ wordWrap: 'break-word', fontSize: 18, fontWeight: 700, color: 'rgba(var(--f52,142,142,142),1)', mt: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>Sign up to see photos and videos</span>
                        <span style={{ wordWrap: 'break-word', fontSize: 18, fontWeight: 700, color: 'rgba(var(--f52,142,142,142),1)', mt: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>from your friends</span>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 2 }}>
                            <span to='' style={{ textDecoration: 'none', backgroundColor: 'rgba(var(--d69,0,149,246),1)', width: '78%', textTransform: 'none', mb: 2, color: 'white', display: 'flex', justifyContent: 'center', height: '30px', alignItems: 'center', borderRadius: '3px' }}>
                                <FacebookIcon />  <span style={{ fontWeight: 700, marginLeft: 4, fontSize: 13 }}>Log in with Facebook</span>
                            </span>
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: "center", mb: 2 }}>
                            <img src={OR} alt="" width="78%" />
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <form action="" style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} onSubmit={formik.handleSubmit}>
                            <TextField label={formik.touched.id ? <div style={{ color: 'red', fontSize: 10 }}><b style={{ color: 'black', fontSize: 10 }}>Mobile Number orEmail:</b><span style={{marginLeft:3}}>{formik.errors.id}</span></div> :
                                <div style={{ color: 'black', fontSize: 10 }}>Mobile Number or Email</div>} id="filled-size-small" type="text" variant="filled" size="small" InputProps={{ disableUnderline: true, style: { backgroundColor: 'rgb(249,249,249)', border: '2px solid #efefef' } }} InputLabelProps={{ style: { color: "black", marginTop: 2, fontSize: 10 } }} sx={{ mb: 1, width: '78%' }} onChange={formik.handleChange('id')} value={formik.values.id} onBlur={formik.handleBlur('id')} />

                            <TextField label={formik.touched.fullname ? <div style={{ color: 'red', fontSize: 10 }}><b style={{ color: 'black', fontSize: 10 }}>Full Name:</b><span style={{marginLeft:3}}>{formik.errors.fullname}</span></div> : <div style={{ color: 'black', fontSize: 10 }}>Full Name</div>} id="filled-size-small" type="text" variant="filled" size="small" InputProps={{ disableUnderline: true, style: { backgroundColor: 'rgb(249,249,249)', border: '2px solid #efefef' } }} InputLabelProps={{ style: { color: "black", marginTop: 2, fontSize: 10 } }} sx={{ mb: 1, width: '78%',textTransform:'capitalize' }} onChange={formik.handleChange('fullname')} value={formik.values.fullname} onBlur={formik.handleBlur('fullname')} />

                            <TextField label={formik.touched.username ? <div style={{ color: 'red', fontSize: 10 }}><b style={{ color: 'black', fontSize: 10 }}>username:</b><span style={{marginLeft:3}}>{formik.errors.username}</span></div> : <div style={{ color: 'black', fontSize: 10 }}>username</div>} id="filled-size-small" type="text" variant="filled" size="small" InputProps={{ disableUnderline: true, style: { backgroundColor: 'rgb(249,249,249)', border: '2px solid #efefef' } }} InputLabelProps={{ style: { color: "black", marginTop: 2, fontSize: 10 } }} sx={{ mb: 1, width: '78%' }} onChange={formik.handleChange('username')} value={formik.values.username} onBlur={formik.handleBlur('username')} />

                            <TextField label={formik.touched.password ? <div style={{ color: 'red', fontSize: 10 }}><b style={{ color: 'black', fontSize: 10 }}>password:</b><span style={{marginLeft:3}}>{formik.errors.password}</span></div> : <div style={{ color: 'black', fontSize: 10 }}>password</div>} id="filled-size-small" type="text" variant="filled" size="small" InputProps={{ disableUnderline: true, style: { backgroundColor: 'rgb(249,249,249)', border: '2px solid #efefef' } }} InputLabelProps={{ style: { color: "black", marginTop: 2, fontSize: 10 } }} sx={{ mb: 1, width: '78%' }} onChange={formik.handleChange('password')} value={formik.values.password} onBlur={formik.handleBlur('password')} />
                            <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', color: "rgba(var(--f52,142,142,142),1)", mt: 1 }}>
                                <span style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '78%', fontSize: '0.78em' }}>People who use our service may have uploaded</span>
                                <span style={{ width: '78%', fontSize: '0.78em', display: 'flex', justifyContent: "center" }}>your contact information to Instagram. <b>Learn</b></span>
                                <span style={{ width: '78%', fontSize: '0.78em', display: 'flex', justifyContent: "center" }}><b>More</b></span>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', color: "rgba(var(--f52,142,142,142),1)", mt: 2 }}>
                                <span style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '78%', fontSize: '0.78em' }}>By signing up, you agree to our <b style={{ marginLeft: 3 }}>Terms</b></span>
                                <span style={{ width: '78%', fontSize: '0.78em', display: 'flex', justifyContent: "center" }}><b style={{ marginRight: 3 }}>Policy</b> and <b style={{ marginLeft: 3 }}>Cookies Policy</b> .</span>
                                {
                                    !isClicked ? <Button type="submit" variant='contained' size="small" sx={{ backgroundColor: 'rgba(var(--d69,0,149,246),1)', width: '78%', textTransform: 'none', mt: 2, mb: 3, fontWeight: 700 }}>
                                    Sign Up
                                </Button> :  <Button  variant='contained' size="small" sx={{ backgroundColor: 'rgba(var(--d69,0,149,246),1)', width: '78%', textTransform: 'none', mt: 2, mb: 3, fontWeight: 700 }}>
                                <CircularProgress style={{ width: '20px', height: "20px",color:'white' }} /> 
                                </Button>
                                }
                            </Box>
                            <Box>
                                <Typography variant="body2" color="initial" sx={{color:message==='Registration Successful'? 'green' : 'red',mb:{xs:0,sm:2}}}>
                                    {message}
                                </Typography>
                            </Box>
                        </form>

                    </Box>
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={12} sm={5} lg={3} sx={{ border: { xs: 0, sm: 1 }, borderColor: 'rgb(197,197,197) !important', mt: 2, height: '60px' }} className="border">
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', fontSize: '0.9em', }}>
                        <span>Have an Account?</span><NavLink style={{ marginLeft: 4, textDecoration: 'none', fontSize: 15, fontWeight: 500, color: 'rgba(var(--d69,0,149,246),1)' }} to="/">Log In</NavLink>
                    </Box>
                </Grid>
            </Grid>
            <Grid container sx={{ justifyContent: 'center', mt: { xs: 2, sm: 3 } }}>
                <Grid item xs={12} sm={5} lg={3} sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', }}>
                    <span style={{ fontSize: '0.8em', fontWeight: 500, textAlign: 'center', }}>Get the App</span>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Box component='img' src={apple} alt="" sx={{ width: 130 }} />
                        <Box component='img' src={andriod} alt="" sx={{ width: 130 }} />
                    </Box>
                </Grid>
            </Grid>
            </Box>
            <Grid container sx={{ justifyContent: 'center', mt: { xs: '4rem', sm: 5 } }}>
                <Grid item xs={12} sm={11} md={9} lg={7.5}>
                    <Footer />
                </Grid>
            </Grid>
        </>
    )
}

export default Signup