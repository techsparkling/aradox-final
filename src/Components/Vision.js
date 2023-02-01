import { Avatar } from "@mui/material";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Swiper from "swiper";
import photo from "../team/Anirudh Mahesh.png"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
export default function Vision(){
    return(
     <Fade>
        <div className="mt-5 p-5 md:p-28 md:pt-0 md:flex text-white">
            <div className=" p-5">
            <h1 className="text-[40px] text-left font-[900]">Our<span className="text-[#ff9100]"> Vision </span></h1>
            <div className="text-left text-[20px] font-[900] mt-5 md:w-[80%] flex gap-3">
           <p ><FontAwesomeIcon icon={faCertificate} className="text-[#ff9100]"></FontAwesomeIcon></p><p >To do marketing right !</p> </div>
           <div className="text-left text-[20px] font-[900] mt-5 md:w-[80%] flex gap-3">
           <p ><FontAwesomeIcon icon={faCertificate} className="text-[#ff9100]"></FontAwesomeIcon></p><p >To create prosperity, meaning and connection for all of us !</p> </div>
           <div className="text-left text-[20px] font-[900] mt-5 md:w-[80%] flex gap-3">
           <p ><FontAwesomeIcon icon={faCertificate} className="text-[#ff9100]"></FontAwesomeIcon></p><p >To help others grow and grow ourselves !</p> </div>
           <div className="text-left text-[20px] font-[900] mt-5 md:w-[80%] flex gap-3">
           <p ><FontAwesomeIcon icon={faCertificate} className="text-[#ff9100]"></FontAwesomeIcon></p><p >To value you and deliver a wow factor !</p> </div>
          
            </div>
            
            <div className="md:p-5 mt-5 md:mt-0">
                <div className="flex ">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-white text-[22px] md:text-[28px]" ></FontAwesomeIcon>
              <h1 className="text-[22px] md:text-[28px] text-left font-[900] w-[100%]"> <i>Marketing is about values that you provide for people and not selling
              <FontAwesomeIcon icon={faQuoteRight} className="text-white text-[22px] md:text-[28px] m-2" ></FontAwesomeIcon>
              </i></h1>
              
              
              </div>
               <div className="flex w-[100%]">
                
                <div className="flex  align-middle content-center md:w-1/2">
               <Avatar className="mt-5" sx={{width:80, height:80}} src={photo}></Avatar>
               <div className="mt-6 ml-5">
               <h1 className="font-[900] text-[20px] text-left">Anirudh <span className="text-[#ff9100]">M </span></h1>
               <p className="mt-2 font-[600]"><span className="text-[#ff9100]">CEO </span>, <span className="tracking-wider"> Aradox Media</span></p>
               </div>
               
             
               
               </div>
               </div>
            </div>
          
        </div>
        </Fade>
    )
}