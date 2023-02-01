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
                <h1 className="text-[35px] tracking-wide uppercase ">The <span className="text-[#ff9100] font-[900]"> Problem </span></h1>
                <div className="md:w-1/2 mt-5 text-[20px] font-[900]">
                I know from my own experience that navigating the world of online marketing can be overwhelming and confusing, but that's where I come in. I and my team of experts can help you identify your target audience, create engaging and effective content, marketing campaigns, and measure and analyse the results to continuously improve your strategy and drive more business. 
                </div>
                <div className="md:w-1/2">

                </div>
            </div>
            <div className="md:flex ">
                
            <div className="md:w-1/2 ml-2 md:ml-0">
               
                <Slide triggerOnce>
            <div className="mt-5 flex  gap-1 ">
                <div className=" p-5 pl-0 pb-0 text-[20px]">
           <FontAwesomeIcon icon={faCertificate} className="text-[#ff9100]"></FontAwesomeIcon>
        
           </div>
        <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600]"> Increasing brand visibility and reputation
</h1>
           
            </div>
            <div className=" flex gap-1 ">
                <div className=" p-5 pl-0 pb-2 text-[20px]">
           <FontAwesomeIcon icon={faCertificate} className="text-[#c1ff00]"></FontAwesomeIcon>
        
           </div>
        <h1 className=" p-5 pl-0 text-[20px] pb-2 font-[600]"> Creating engaging content</h1>
           
            </div>
            
            <div className=" flex gap-1 ">
                <div className=" p-5 pl-0 pb-2 text-[20px]">
           <FontAwesomeIcon icon={faCertificate} className=""></FontAwesomeIcon>
        
           </div>
        <h1 className=" p-5 pl-0 text-[20px] pb-2 font-[600]"> Engaging with audience </h1>
           
            </div>
            </Slide>
          </div>
          <div className="md:w-1/2 md:mt-5 ml-2 md:ml-0">
            <Slide direction="right" triggerOnce>
          <div className=" flex gap-1 ">
                <div className=" p-5 pl-0 pb-2 text-[20px]">
           <FontAwesomeIcon icon={faCertificate} className="text-[#ff1]"></FontAwesomeIcon>
        
           </div>
        <h1 className=" p-5 pl-0 text-[20px] pb-2 font-[600]"> Managing multiple channels</h1>
           
            </div>
            <div className=" flex gap-1 ">
                <div className=" p-5 pl-0 pb-2 text-[20px]">
           <FontAwesomeIcon icon={faCertificate} className="text-[#2cf]"></FontAwesomeIcon>
        
           </div>
        <h1 className=" p-5 pl-0 text-[20px] pb-2 font-[600]"> Reaching the target audience
Budget constraints</h1>
           
            </div>
            <div className=" flex gap-1 ">
                <div className=" p-5 pl-0 pb-2 text-[20px]">
           <FontAwesomeIcon icon={faCertificate} className="text-[#ff9200]"></FontAwesomeIcon>
        
           </div>
        <h1 className=" p-5 pl-0 text-[20px] pb-2 font-[600]"> 
Budget constraints</h1>
           
            </div>
            </Slide>
             </div>
  
  
  
          </div>  
       
        </div>
        </Fade>
    )
}