import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@mui/material";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import bullet from"../AradoxLogos/Half Logo black.png"
export default function Problem(){





    return(
        <Fade  duration={2000}>
        <div className="text-white mt-[50px] md:mt-[200px] pl-0 md:pl-5 p-5 ml-5 text-left" id="about">
            <div >
                <h1 className="text-[25px] tracking-wide uppercase">The <span className="text-[#ff9100]"> Problem </span></h1>
                <div className="md:w-1/2 mt-5 text-[20px] font-[900]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="md:w-1/2">

                </div>
            </div>
            <div className="md:flex ">
                
            <div className="md:w-1/2">
               
                <Slide>
            <div className="mt-5 flex gap-1 ">
                <div className=" p-5 pl-0 pb-0 text-[20px]">
           <FontAwesomeIcon icon={faCertificate} className="text-[#ff9100]"></FontAwesomeIcon>
        
           </div>
        <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
           
            </div>
            <div className=" flex gap-1 ">
                <div className=" p-5 pl-0 pb-2 text-[20px]">
           <FontAwesomeIcon icon={faCertificate} className="text-[#c1ff00]"></FontAwesomeIcon>
        
           </div>
        <h1 className=" p-5 pl-0 text-[20px] pb-2 font-[600]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
           
            </div>
            
            <div className=" flex gap-1 ">
                <div className=" p-5 pl-0 pb-2 text-[20px]">
           <FontAwesomeIcon icon={faCertificate} className=""></FontAwesomeIcon>
        
           </div>
        <h1 className=" p-5 pl-0 text-[20px] pb-2 font-[600]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
           
            </div>
            </Slide>
          </div>
          <div className="md:w-1/2 md:mt-5">
            <Slide direction="right">
          <div className=" flex gap-1 ">
                <div className=" p-5 pl-0 pb-2 text-[20px]">
           <FontAwesomeIcon icon={faCertificate} className="text-[#ff1]"></FontAwesomeIcon>
        
           </div>
        <h1 className=" p-5 pl-0 text-[20px] pb-2 font-[600]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
           
            </div>
            <div className=" flex gap-1 ">
                <div className=" p-5 pl-0 pb-2 text-[20px]">
           <FontAwesomeIcon icon={faCertificate} className="text-[#2cf]"></FontAwesomeIcon>
        
           </div>
        <h1 className=" p-5 pl-0 text-[20px] pb-2 font-[600]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
           
            </div>
            </Slide>
             </div>
  
  
  
          </div>  
       
        </div>
        </Fade>
    )
}