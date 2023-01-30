import { Avatar } from "@mui/material";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Swiper from "swiper";
import photo from "../team/Anirudh Mahesh.png"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button, IconButton } from "@mui/material";
export default function Vision(){
    return(
     <Fade>
        <div className="mt-5 p-5 md:p-28 md:pt-0 md:flex text-white">
            <div classname=" p-5">
            <h1 className="text-[40px] text-left font-[900]">Our<span className="text-[#ff9100]"> Vision </span></h1>
            <p className="text-left text-[20px] font-[900] mt-5 md:w-[80%]">Eu feugiat pretium nibh ipsum consequat nisl. Aenean sed adipiscing diam donec adipiscing tristique risus.</p>
            </div>
            <div className="md:p-5 mt-5 md:mt-0">
              <i> <h1 className="text-[22px] md:text-[28px] text-left font-[900] w-[100%]">Eu feugiat pretium nibh ipsum consequat nisl. Aenean sed adipiscing diam donec adipiscing tristique risus.</h1>
              </i>
               <div className="flex w-[100%]">
                
                <div className="flex  align-middle content-center md:w-1/2">
               <Avatar className="mt-5" sx={{width:80, height:80}} src={photo}></Avatar>
               <div className="mt-6 ml-5">
               <h1 className="font-[900] text-[20px]">Anirudh <span className="text-[#ff9100]">Mahesh </span></h1>
               <p className="mt-2 font-[600]"><span className="text-[#ff9100]">CEO </span>,  Aradox Media</p>
               </div>
               
             
               
               </div>
               </div>
            </div>
          
        </div>
        </Fade>
    )
}