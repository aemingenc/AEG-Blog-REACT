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
import head from "../assets/headphones.svg"

const Cards=()=> {


  

  return (
    <Card sx={{ maxWidth: 345 }}>
      
      <CardMedia
      style={{border:"red solid 2px"}}
        component="img"
        height="140"
        image={head}
        alt="Paella dish"
      />
      <CardContent style={{background:"#EFEEFE"}}>
          <h3>JAVASCRİPT</h3>
          
          <p>may 17,2021</p>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
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