import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { BlogContext } from '../contexts/BlogContext'
import { deleteInfo } from '../helpers/functions'
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {  AiFillHeart} from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import {FaUserCircle } from "react-icons/fa";

const Details = () => {

    const {currentUser} =useContext(AuthContext)
    const {currentInfo}=useContext(BlogContext)
    const {id}=useParams()
    const navigate =useNavigate()
 
    const getBlogInfo =currentInfo?.filter((blog)=> blog.id === id)
    const updateHandler =(id)=>{
        navigate(`/upDate/${id}`)
    }
    

    return (
        <div className='detail-container'>
           {getBlogInfo?.map((user,index)=>(
           <Card sx={{ minWidth: 300 ,minHeight:400}}>
      
      <CardMedia
        className='detail-img'
        style={{
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"}}
        component="img"
        height="140"
        image={user.url}
        alt="Paella dish"
      />
      <CardContent style={{background:"#EFEEFE"}}>
          <h3 className='card-title'>{user.title}</h3>
          
          <p>may 17,2021</p>
        <Typography variant="body2" className='card-content' color="text.secondary">
          {user.content}
        </Typography>
      </CardContent>
      <div className='card-email'>
      <IconButton>
            <FaUserCircle/>
          </IconButton>
      <p>{currentUser.email}</p>
      </div>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <AiFillHeart/>
        </IconButton>
        <IconButton aria-label="share">
          <BiComment/>
        </IconButton>
      </CardActions>
      {currentUser.email===user.userEmail ?(
      <div className='details-button'>
        <Button
                  variant="contained"
                  onClick={()=>updateHandler(user.id)}
                >
                  Update
        </Button>
        <Button
                  variant="contained"
                  color="secondary"
                  onClick={() =>{ deleteInfo(user.id)
                  navigate("/")}}
                >
                  Delete
        </Button>
        </div>        ): null}
                   
               
               
           
      
    </Card>
))}
           
        
        </div>
    )
}

export default Details
