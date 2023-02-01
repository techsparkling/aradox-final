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
<Slide triggerOnce>
                    <Box className=" md:w-[80%] text-[black] rounded-xl p-5 bg-[#ff9100] ">
                        
                        <div className="md:flex gap-3  content-center mt-2">
                            <FontAwesomeIcon icon={faThumbsUp} className='text-[30px]'></FontAwesomeIcon>
                            <h1 className="text-[22px] font-[900] mt-2 md:mt-0">Social media management
</h1>
                        </div>
                        <div className="text-[18px] mt-2 ">
                            <h1>
                            Effortlessly Manage Omnichannel Social Success. Partner with us for organized, professional presence.
                            </h1>
                        </div>
                        
                    </Box>
                    </Slide>
                   <Slide triggerOnce>
                    
                    <Box className=" md:w-[80%] text-[black] rounded-xl mt-5 md:mt-10 md:ml-16 p-5 bg-[aliceblue]">
                        <div className="md:flex gap-3  content-center mt-2">
                            <FontAwesomeIcon icon={faSatellite} className='text-[30px]'></FontAwesomeIcon>
                            <h1 className="text-[22px] font-[900] mt-2 md:mt-0">Digital Ads</h1>
                        </div>
                        <div className="text-[18px] mt-2">
                            <h1>
                            Unleash Online Visibility with Our Multi-Platform Ad Campaigns.
                            </h1>
                        </div>
                    </Box>
                    </Slide>
                    <Slide triggerOnce>
                    <Box className=" md:w-[80%] text-[black] rounded-xl mt-5 md:mt-10  p-5 bg-[antiquewhite]">
                        <div className="md:flex gap-3  content-center mt-2">
                            <FontAwesomeIcon icon={faPen} className='text-[30px]'></FontAwesomeIcon>
                            <h1 className="text-[22px] font-[900] mt-2 md:mt-0">Content Creation
</h1>
                        </div>
                        <div className="text-[18px] mt-2">
                            <h1>
                            Unleash Online Visibility with Our Multi-Platform Ad Campaigns.
                            </h1>
                        </div>
                    </Box>
                    </Slide>
                </div>
                <div className="md:w-1/2">
                    <Fade duration={2000}>
                    <h1 className="text-[35px] tracking-wide uppercase ">The <span className="text-[#ff9100] font-[900]"> Solution </span></h1>
                         <div className=" mt-5 text-[20px] font-[900]">
                         Elevate your brand's online presence and establish a positive reputation with our expert digital marketing solutions. Our team of experts will collaborate with you to design a tailored strategy, utilizing our three specialized services to drive engagement and growth. Say goodbye to underperforming marketing efforts and embrace the future of digital marketing with us. Let's take your brand to new heights.
                </div>
                </Fade>
                </div>
                </div>
        

             </div>
        </div>
    )
}