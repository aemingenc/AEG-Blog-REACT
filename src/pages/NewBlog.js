import React, { useState } from 'react'
import {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { addInfo } from '../helpers/functions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import kus from "../assets/kus.jpg"
const NewBlog = () => {
  const date = new Date().toDateString();
    const {currentUser} =useContext(AuthContext)
    const [newPost, setNewPost] = useState({
        userEmail: currentUser.email,
        title: "",
        content: "",
        image: "",
        date: date
      });
      const navigate=useNavigate();
      
      const getNewBlog = (e) => {
        e.preventDefault();
        try {
          addInfo(newPost);
           console.log(newPost);
          navigate("/");
          
        } catch (error) {
          console.log("Error", error);
        }
      };
      console.log(newPost)
    return (


      <div className="container">
        <div >
          
            <img className='img-head' src={kus} alt="" />
            <h1>--- New Blog---</h1>
        </div>
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
                placeholder="Title"
                value ={newPost.title}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
              />
              <TextField
                required
                id="outlined-required"
                label="URL"
                placeholder="Image URL"
                value ={newPost.url}
                onChange={(e) =>
                    setNewPost({ ...newPost, url: e.target.value })
                  }
              />
              <TextField
                required
                id="outlined-required"
                label="Content"
                placeholder="Content"
                onChange={(e) =>
                  setNewPost({ ...newPost, content: e.target.value })
                }
                
              />
              <Button
              variant="contained"
              color="success"
              onClick={getNewBlog}>Add</Button>
              
              
            </div>
          </Box>
    </div>
  );
}
//         <div>
//             <input
//              type="text"
//              value ={newPost.title}
//              onChange={(e) =>
//                 setNewPost({ ...newPost, title: e.target.value })
//               }
//              />
//             <input 
//             type="text" 
//             value ={newPost.url}
//             onChange={(e) =>
//                 setNewPost({ ...newPost, url: e.target.value })
//               }
//             />
//             <input 
//             type="text" 
//             value = {newPost.content}
//             onChange={(e) =>
//                 setNewPost({ ...newPost, content: e.target.value })
//               }
//             />
//             <button
//             onClick={getNewBlog}>add</button>
//         </div>
//     )
// }

 export default NewBlog
