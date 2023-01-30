import { faPen, faSatellite, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/system";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

export default function Solution(){
    return(
        <div>
             <div className="text-white mt-[50px] md:mt-[100px] p-5 pl-0 ml-5 text-left">
                <div className="flex  flex-col-reverse md:flex-row">
                <div className="md:w-1/2 mt-5 md:mt-0">
<Slide>
                    <Box className=" md:w-[80%] text-[black] rounded p-5 bg-[#ff9100] ">
                        
                        <div className="md:flex gap-3  content-center mt-2">
                            <FontAwesomeIcon icon={faThumbsUp} className='text-[30px]'></FontAwesomeIcon>
                            <h1 className="text-[22px] font-[900] mt-2 md:mt-0">Social media management
</h1>
                        </div>
                        <div className="text-[18px] mt-2">
                            <h1>
                            Eu feugiat pretium nibh ipsum consequat nisl. Aenean sed adipiscing.
                            </h1>
                        </div>
                        
                    </Box>
                    </Slide>
                   <Slide>
                    
                    <Box className=" md:w-[80%] text-[black] rounded mt-5 md:mt-10 md:ml-16 p-5 bg-[aliceblue]">
                        <div className="md:flex gap-3  content-center mt-2">
                            <FontAwesomeIcon icon={faSatellite} className='text-[30px]'></FontAwesomeIcon>
                            <h1 className="text-[22px] font-[900] mt-2 md:mt-0">Ads</h1>
                        </div>
                        <div className="text-[18px] mt-2">
                            <h1>
                            Eu feugiat pretium nibh ipsum consequat nisl. Aenean sed adipiscing.
                            </h1>
                        </div>
                    </Box>
                    </Slide>
                    <Slide>
                    <Box className=" md:w-[80%] text-[black] rounded mt-5 md:mt-10  p-5 bg-[antiquewhite]">
                        <div className="md:flex gap-3  content-center mt-2">
                            <FontAwesomeIcon icon={faPen} className='text-[30px]'></FontAwesomeIcon>
                            <h1 className="text-[22px] font-[900] mt-2 md:mt-0">Content
</h1>
                        </div>
                        <div className="text-[18px] mt-2">
                            <h1>
                            Eu feugiat pretium nibh ipsum consequat nisl. Aenean sed adipiscing.
                            </h1>
                        </div>
                    </Box>
                    </Slide>
                </div>
                <div className="md:w-1/2">
                    <Fade duration={2000}>
                         <h1 className="text-[25px] tracking-wide uppercase">The <span className="text-[#ff9100]"> Solution </span> </h1>
                         <div className=" mt-5 text-[20px] font-[900]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                </Fade>
                </div>
                </div>
        

             </div>
        </div>
    )
}