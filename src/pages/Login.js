import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import headShot from "../assets/headshot.jpg"
import { useNavigate } from 'react-router-dom';
import {useState} from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../helpers/firebase.js'

const Login = ()=> {
    const navigate = useNavigate();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState()
  
    const handleSubmit = async () => {
        try{
            let user = await signInWithEmailAndPassword(auth,email,password)
            console.log(user)
            navigate("/")
        }catch(err){
            alert(err.message)
        }
    }
  
  
  
    return (
    <div className="container">
        <div>
            <img src={headShot} alt="" />
            <h1>--- Login---</h1>
        </div>

        <div>
            <Box
                className='box'
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
            <div className="login-form">
                
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        placeholder="Email"
                        onChange = {(e)=> setEmail(e.target.value)}
                    />
            
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        autoComplete="current-password"
                        onChange ={(e)=>setPassword(e.target.value)}
                    />
                
                <Button 
                variant="contained"
                onClick={handleSubmit}
                value="Login"
                >LOG IN</Button>
            </div>
            </Box>
        </div>
    </div>
  );
}
export default Login;