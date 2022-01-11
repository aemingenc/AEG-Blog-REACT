import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaUserCircle } from "react-icons/fa";
import { IconButton } from "@mui/material";
import headShot from "../assets/headshot.jpg";
import kus from "../assets/kus.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {useContext} from "react/cjs/react.development";
import { AuthContext } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../helpers/firebase";

const Navbar=()=> {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext);
  const open = Boolean(anchorEl);

  const handleNew = () => {
    navigate("/newBlog");
    setAnchorEl(null);
  };
  const signOutFunc = async () => {
    await signOut(auth);
  };
  const handleProfile =()=>{
    navigate("/profile")
    setAnchorEl(null);

  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleLogIn = () => {
    navigate("/login");
    setAnchorEl(null);
  };
  const handleRegister = () => {
    navigate("/register");
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={kus} alt="img" />
      </div>
      <div className="amblem">A E G</div>
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ border: "red solid 1px" }}
      >
        <FaUserCircle />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {currentUser ? (
          <div>
            <MenuItem onClick={handleProfile}>Profil</MenuItem> 
            <MenuItem onClick={handleNew}>New</MenuItem> 
            <MenuItem onClick={signOutFunc}>LogOut</MenuItem> 
          </div>
        ) :(
          <div>
            <MenuItem onClick={handleLogIn}>Login</MenuItem> 
            <MenuItem onClick={handleRegister}>Register</MenuItem> 
          </div>
          
        )}
        
      </Menu>
    </div>
  );
}
export default Navbar;
