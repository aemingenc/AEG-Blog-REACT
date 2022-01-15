import { Box } from '@mui/system'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { BlogContext } from '../contexts/BlogContext'
import { deleteInfo, updateInfo } from '../helpers/functions'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const UpdateBlog = () => {
    const {currentUser} =useContext(AuthContext)
    const{currentInfo}=useContext(BlogContext)
    const navigate=useNavigate()
    const {id}=useParams()
    const getUserInfo =currentInfo?.filter((user)=> user.id === id)
    const getInfo= getUserInfo ? getUserInfo[0] : { title: "", content: "", url: "" };
    const [newBlog ,setNewBlog] =useState({
        userEmail:currentUser.email,
        title:getInfo.title,
        url:getInfo.url,
        content:getInfo.content,
        date:getInfo.date
    });
    
      const updateHandler=()=>{
          updateInfo(newBlog)
            console.log(newBlog)
          navigate("/")
      }
    return (
        
        <div className='update-container'>
          <Box className='box'
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
                label="Title"
                defaultValue={getInfo?.title}
                // value={newBlog?.title || res?.title}
                
                onChange={(e) =>
                  setNewBlog({ ...newBlog, title: e.target.value })
                }
              />
              <TextField
                required
                id="outlined-required"
                label="Image URL"
                defaultValue={getInfo?.url}
                // value={newBlog?.title || res?.title}
                
                onChange={(e) =>
                  setNewBlog({ ...newBlog, url: e.target.value })
                }
                
              />
              <TextField
                required
                id="outlined-required"
                label="Content"
                defaultValue={getInfo?.content}
                // value={newBlog?.title || res?.title}
                
                onChange={(e) =>
                  setNewBlog({ ...newBlog, content: e.target.value })
                }
                
              />
              <Button
              variant="contained"
              color="success"
              onClick={updateHandler}>Add</Button>
           
            </div>
          </Box>
        </div>
    )
}

export default UpdateBlog
