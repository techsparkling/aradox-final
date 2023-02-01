import React from "react";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons"
import{faQuoteRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedText from 'react-animated-text-content';
import { Fade } from "react-awesome-reveal";
export default function Quote(){
    return(
        <div>
          <Fade  duration={2000}>
            <div className="p-12 bg-[#ff9100] text-white font-[900+] md:flex justify-left" >
            
          
 
 <h1   className="text-[30px] md:text-[30px] ">Our goal is to do marketing right. In Aradox we believe in understanding your business and handout right messages to right person at the right time. We help you to go omnichannel and easily scale your business with just few taps on the screen. <span>

 </span>
 </h1>


           
            </div>
            <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>   
            </Fade>
            
        </div>
    )
}