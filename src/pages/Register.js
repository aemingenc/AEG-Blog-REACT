import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {useState} from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../helpers/firebase"
import kus from "../assets/kus.jpg"
export default function FormPropsTextFields() {
    const navigate = useNavigate();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const handleSubmit = async ()=> {
        const displayName = "ali"
        try{
            let user = await createUserWithEmailAndPassword(auth,email,password)
            console.log(user)
            await updateProfile(auth.currentUser, {displayName : displayName})
            console.log(auth.currentUser);
            navigate("/")
        }catch(err){
            alert(err.message)
        }
    }
  return (
    <div className="container">
        <div>
            <img  className='img-head'src={kus} alt="" />
            <h1>--- Register---</h1>
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
                        onChange ={(e)=> setEmail(e.target.value)}
                    />
            
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        autoComplete="current-password"
                        onChange = {(e)=> setPassword(e.target.value)}
                    />
                
                <Button variant="contained" onClick ={handleSubmit} value="Register">REGİSTER</Button>
            </div>
            </Box>
        </div>
    </div>
  );
}