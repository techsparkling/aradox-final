import React from "react";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons"
import{faQuoteRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedText from 'react-animated-text-content';
import { Fade } from "react-awesome-reveal";
import { Button, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function GetStarted(){
    return(
        <div className="mt-10">
        <Fade  duration={2000}>
        

          <div className="p-10 bg-[#ff9100] text-white font-[900+] text-left  md:flex " >
        <div className="  md:w-1/2">
         
<h1 className="text-[30px] md:text-[40px] text-left">
Lets Get started</h1>



</div>
<div className="md:flex md:justify-end md:w-1/2">
<Button  className="hover:text-white" sx={{
    color:"#ff9100",
    border:"1px solid white",
    backgroundColor:"white",
    borderRadius:"999px",
    padding:"10px",
    marginTop:"10px",
 
    paddingLeft:"20px",
    fontFamily:"unset",
    fontWeight:"bold",

  }}>
 
  Get Started
  <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
  </Button>
</div>

          </div>
        
          </Fade>
      </div>
    )
}