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
            <div className="p-10 bg-[#ff9100] text-white font-[900+] flex justify-center" >
            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
            <AnimatedText
    type='words'
    interval={0.0100}
    className="text-[30px] md:text-[40px]"
    duration={0.8}
    animation={{
      ease: 'ease',
    }}
  >
 
We turn clicks into customers, and customers into loyal brand ambassadors.
</AnimatedText>
<FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>   
           
            </div>
            </Fade>
        </div>
    )
}