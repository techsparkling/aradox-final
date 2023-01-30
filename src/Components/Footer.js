import React from "react";
import { Fade } from "react-awesome-reveal";

import SmallLogoWhite from "../AradoxLogos/Half Logo white.png"
export default function Footer(){
    return(
        <Fade>
        <div className="p-5 mt-10">
            <div className="md:flex">
                <img src={SmallLogoWhite} className="w-[70px]"></img>
            </div>

        </div>
        </Fade>
    )
}