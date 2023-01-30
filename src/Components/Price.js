
import { Box } from "@mui/system";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Button, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setGlobalState,useGlobalState } from "./global";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
export default function Price(){

    return(
    <Fade>
    <div className="mt-5 text-white "id="price">
        <h1 className="text-[40px] font-[900]">
          Our <span className="text-[#ff9100]"> Pricing </span>
        </h1>
        <div className="w-full flex justify-center">
            <p className="mt-5 p-5 md:w- text-[20px] md:w-1/2">Eu feugiat pretium nibh ipsum consequat nisl. Aenean sed adipiscing diam donec adipiscing tristique risus.</p>
            </div>
          
        <div className="md:p-28 md:pt-5 p-5 ">
            <Fade>
<Box className="border-[1px] p-5 md:flex">

<Box className="md:w-1/2 p-5 md:p-10 ">
<h1 className="text-[20px] tracking-wider uppercase text-left ">Beginner</h1>
<p className="text-left mt-2 text-[50px] font-[900] text-[#ff9100]">₹25000<span className="text-[15px] font-[600] text-white">/ m</span></p>
<p className="text-left text-[18px] font-[900] mt-5">
Eu feugiat pretium nibh ipsum consequat nisl. Aenean sed adipiscing diam donec adipiscing tristique risus.
</p>
<div className="justify-left flex mt-5">
<Button  sx={{
    color:"white",
    border:"1px solid #ff9100",
    background:"#ff9100",
    borderRadius:"999px",
    padding:"10px",
    marginTop:"10px",
 
    paddingLeft:"20px",
    fontFamily:"unset",
    fontWeight:"bold",

  }}
  onClick={()=>{
    setGlobalState('requested',true);
    setGlobalState('subject',10)
  
  }}
  >
 
  Get Started
  <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
  </Button>
  </div>
</Box>
<Box className="md:w-1/2 p-5">
<div className="mt-5 flex gap-1 ">
                <div className=" p-5 pl-0 pb-0 text-[20px]">
           <FontAwesomeIcon icon={faCertificate} className="text-[#ff9100]"></FontAwesomeIcon>
        
           </div>
        <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left"> Occasional Advertisements based on the medium</h1>
           
            </div>
            <div className="mt-5 flex gap-1 ">
                <div className=" p-5 pl-0 pb-0 text-[20px]">
           <FontAwesomeIcon icon={faCertificate} className="text-white"></FontAwesomeIcon>
        
           </div>
        <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left"> Social Media Management</h1>
           
            </div>
            <div className="mt-5 flex gap-1 ">
                <div className=" p-5 pl-0 pb-0 text-[20px]">
           <FontAwesomeIcon icon={faCertificate} className="text-[#c1ff00]"></FontAwesomeIcon>
        
           </div>
        <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left"> Lorem ipsum dolor sit amet</h1>
           
            </div>
            
</Box>
</Box>
</Fade>
            <Fade>
<Box className="border-[1px] p-5 md:flex mt-10">

<Box className="md:w-1/2 p-5 md:p-10 ">
<h1 className="text-[20px] tracking-wider uppercase text-left ">Advanced</h1>
<p className="text-left mt-2 text-[50px] font-[900] text-[#ff9100]">₹50000<span className="text-[15px] font-[600] text-white">/ m</span></p>
<p className="text-left text-[18px] font-[900] mt-5">
Eu feugiat pretium nibh ipsum consequat nisl. Aenean sed adipiscing diam donec adipiscing tristique risus.
</p>
<div className="justify-left flex mt-5">
<Button  sx={{
    color:"white",
    border:"1px solid #ff9100",
    background:"#ff9100",
    borderRadius:"999px",
    padding:"10px",
    marginTop:"10px",
 
    paddingLeft:"20px",
    fontFamily:"unset",
    fontWeight:"bold",

  }}  onClick={()=>{
    setGlobalState('requested',true)
    setGlobalState('subject',20)
  }}>
 
  Get Started
  <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
  </Button>
  </div>
</Box>
<Box className="md:w-1/2 p-5">
<div className="mt-5 flex gap-1 ">
                <div className=" p-5 pl-0 pb-0 text-[20px]">
           <FontAwesomeIcon icon={faCertificate} className="text-[#ff9100]"></FontAwesomeIcon>
        
           </div>
        <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left"> Lorem ipsum dolor sit amet</h1>
           
            </div>
            <div className="mt-5 flex gap-1 ">
                <div className=" p-5 pl-0 pb-0 text-[20px]">
           <FontAwesomeIcon icon={faCertificate} className="text-white"></FontAwesomeIcon>
        
           </div>
        <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left"> Lorem ipsum dolor sit amet</h1>
           
            </div>
            <div className="mt-5 flex gap-1 ">
                <div className=" p-5 pl-0 pb-0 text-[20px]">
           <FontAwesomeIcon icon={faCertificate} className="text-[#c1ff00]"></FontAwesomeIcon>
        
           </div>
        <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left"> Lorem ipsum dolor sit amet</h1>
           
            </div>
            
</Box>
</Box>
</Fade>
        </div>
    </div>
    </Fade>)
}