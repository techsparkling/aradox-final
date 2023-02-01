import React from "react";

import { motion } from "framer-motion";
import { setGlobalState,useGlobalState } from "./global";
import Divider from '@mui/material/Divider';
import { Box } from "@mui/system";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import "../App.css";
import LogoWhite from "../AradoxLogos/Full Logo White (3).png"
import DragHandleIcon from '@mui/icons-material/DragHandle';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonAdd from '@mui/icons-material/PersonAdd';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import SmallLogoWhite from "../AradoxLogos/Half Logo white.png"
import { Button, IconButton } from "@mui/material";
import { Fade } from "react-awesome-reveal";
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fade>
  <div className="md:p-5 ">
     <Box
     className="mt-2 "
        sx={{
          display: 'flex',
          height:'50px',
          alignItems: 'center',
          justifyContent:'center',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
    <header className="mt-6  p-5 pr-2  pt-0 ">
      <div className=" block">
      <img src={LogoWhite} className="w-[120px]"></img>
      </div>
     
    </header>
    <Divider orientation="vertical" variant="middle" flexItem bgcolor="gray" sx={{ bgcolor: "gray" , length:'1px'}} />
    <div className="text-white ml-20 font-[400] hidden md:block">
   <a href="#about">About</a>
    <a href="#process"className="ml-5">Process</a>
    <a href="#price" className="ml-5">Price</a>
    <a  onClick={()=>{
          setGlobalState('requested',true)
          setGlobalState('subject','none')
        }} className="ml-5">Contact</a>
  </div>
  <div className="absolute right-5 md:right-10 ">
<IconButton         onClick={handleClick}
            size="small"
            
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined} 
            sx={{
  color:'white'
}}>
  <DragHandleIcon></DragHandleIcon>
</IconButton>
<Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            bgcolor: 'black',
               

            color: 'white',
            overflow: 'visible',
            backdropFilter:'blur(5px)',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'white',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <a href="#about">
        <MenuItem>
        <ListItemIcon>
            <InfoIcon fontSize="small"sx={{color:'white'}} />
          </ListItemIcon> About
        </MenuItem></a>
        <a href="#process">
        <MenuItem>
        <ListItemIcon>
            <DesignServicesIcon fontSize="small"sx={{color:'white'}} />
          </ListItemIcon> Process
        </MenuItem></a>
      
        <a href="#price"><MenuItem >
          <ListItemIcon>
            <AttachMoneyIcon fontSize="small"sx={{color:'white'}} />
          </ListItemIcon>
         Prices
        </MenuItem></a>
        <MenuItem onClick={()=>{
          setGlobalState('requested',true)
          setGlobalState('subject','none')
        }}>
          <ListItemIcon>
            <ContactsIcon fontSize="small"sx={{color:'white'}} />
          </ListItemIcon>
          Contact
        </MenuItem>

      </Menu>
  </div>
    </Box>
 <Divider variant="middle" sx={{ bgcolor: "gray" , length:'1px'}} className=""></Divider>
  </div>
  </Fade>
  );
};

export default Header;
