import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { loginInitiate } from '../Action.js'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useHistory} from 'react-router-dom';

const validationSchema= Yup.object({
    username: Yup.string().email('enter valid mail').required('email required'),
    password: Yup.string().required('password required')
})


function Login(props) {

const dispatch = useDispatch()
const history= useHistory();
    function login(){
        toast.success('Success fully login')
       history.push('/viewtasks')
    }

    const formik = useFormik({
      initialValues : {
        username: '',
        password: ''
      },

      onSubmit:(values)=>{
        console.log(JSON.stringify(values))
        const data={
          username: values.username,
          password: values.password
        }
        dispatch(loginInitiate(data.username,data.password))
      },

    validationSchema: validationSchema
    })

    
    return (
      
          <Box sx={{ width: '100%', typography: 'body1' }} >
            <Grid item xs={12}>
            <form onSubmit={formik.handleSubmit}>
            <div style={{padding:'40px 0 0 0',marginLeft:'35%'}}>
            <div style={{border:'1px solid silver',width:"350px",padding:'20px'}}>
            
        <Typography >
        Mobile Number / Email ID
        </Typography>
        <TextField
        placeholder='Email ID/Mobile Number'
        id="demo-helper-text-misaligned"
        name='username'
        style={{width:'350px'}}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
        />
         <Typography >
         Password
        </Typography>
        <TextField
        placeholder='Email ID/Mobile Number'
        id="demo-helper-text-misaligned"
        name='password'
        type='password'
        style={{width:'350px'}}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        />
        <Button variant="contained" type='submit' onClick={login} style={{width:'350px',backgroundColor:'rgb(20, 190, 240)'}}>Login</Button>          
        
        </div>
        </div>
     </form>
            </Grid>
    </Box>
   
    );
}

export default Login;