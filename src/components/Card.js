
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
import { useContext } from 'react';


const Cards=({userItems} )=> {
  
  const{
    id,
    title,
    content,
    url,
    userEmail,
    date
  }=userItems;
const navigate = useNavigate()
const {currentUser} = useContext(AuthContext)
const handleClick = ()=>{
  if (!currentUser){
    alert("LOGIN OL")
  }else{
  navigate(`/details/${id}`)}
}
  console.log(userItems)


  return (
    <Card sx={{ maxWidth: 345 }}
    onClick={handleClick}>
      {console.log(url)}
      <CardMedia
      
        component="img"
        height="140"
        image={url}
        alt="Paella dish"
      />
      <CardContent style={{background:"#EFEEFE"}}>
          <h3 className='card-title'>{title}</h3>
          
          <p>{date}</p>
        <Typography variant="body2" className='card-content'   color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <div className='card-email'>
      <IconButton>
            <FaUserCircle/>
          </IconButton>
      <p>{userEmail}</p>
      </div>
      
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