import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {  AiFillHeart} from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import {FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';


const Cards=({item} )=> {
  const{
    title,
    content,
    url
  }=item;
const navigate = useNavigate()
const {currentUser} = React.useContext(AuthContext)
const handleClick = ()=>{
  if (!currentUser){
    alert("LOGIN OL")
  }else{
  navigate(`/details/${id}`)}
}
  

  return (
    <Card sx={{ maxWidth: 345 }}
    onClick={handleClick}>
      
      <CardMedia
      style={{border:"red solid 2px"}}
        component="img"
        height="140"
        image={url}
        alt="Paella dish"
      />
      <CardContent style={{background:"#EFEEFE"}}>
          <h3>{title}</h3>
          
          <p>may 17,2021</p>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <IconButton>
            <FaUserCircle/>
          </IconButton>
      <p>Walter@clarus</p>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <AiFillHeart/>
        </IconButton>
        <IconButton aria-label="share">
          <BiComment/>
        </IconButton>
      </CardActions>
      
    </Card>
  );
}
export default Cards;