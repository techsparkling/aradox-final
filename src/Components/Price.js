import { Box } from "@mui/system";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { Button, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setGlobalState, useGlobalState } from "./global";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
export default function Price() {
  return (
    <Fade>
      <div className="mt-5 text-white " id="price">
        <h1 className="text-[40px] font-[900]">
          Our <span className="text-[#ff9100]"> Pricing </span>
        </h1>
        <div className="w-full flex justify-center">
          <p className="mt-5 p-5 md:w- text-[20px] md:w-1/2">
            View our plans and <span className="text-[#ff9100]"> subscription model.</span>
          </p>
        </div>
<div className="md:p-28 md:pt-5 md:pb-10 pb-0 p-5  justify-center gap-3">
<Fade>
<Box className="border-[1px] p-5 box w-full">
 
            <Box className=" p-5 md:p-10 ">
              <h1 className="text-[20px] tracking-wider uppercase text-left ">
                Freemium
              </h1>
              <p className="text-left mt-2 text-[50px] font-[900] text-[#ff9100]">
                Free
                <span className="text-[15px] font-[600] text-white">/ month</span>
              </p>
              <p className="text-left text-[18px] font-[900] mt-5">
              Unlock Your Potential with Our Free Consultation: Let's discuss your goals and develop a strategy to drive growth for your brand - all at no cost to you.
              </p>
              <div className="justify-left flex mt-5">
                <Button
                  sx={{
                    color: "white",
                    border: "1px solid #ff9100",
                    background: "#ff9100",
                    borderRadius: "999px",
                    padding: "10px",
                    marginTop: "10px",

                    paddingLeft: "20px",
                    fontFamily: "unset",
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    setGlobalState("requested", true);
                    setGlobalState("subject", 10);
                  }}
                >
                  Get Started
                  <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                </Button>
              </div>
            </Box>
            <Box className=" p-5 md:pt-0">
              <div className="mt-5 md:ml-7 md:mt-0 flex gap-1 ">
                <div className=" p-5 pl-0 pb-0 text-[20px]">
                  <FontAwesomeIcon
                    icon={faCertificate}
                    className="text-[#ff9100]"
                  ></FontAwesomeIcon>
                </div>
                <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                  {" "}
                  Consultation for Digital Marketing
                </h1>
              </div>
             
              
            </Box>
          </Box>
          </Fade>
</div>
<div className="md:p-28 md:pt-0  md:pb-10 pb-0  p-5  justify-center gap-3">
<Fade >
<Box className="border-[1px] p-5 box w-[100%]">
            <Box className=" p-5 md:p-10 ">
              <h1 className="text-[20px] tracking-wider uppercase text-left ">
                Custom
              </h1>
              
              <p className="text-left mt-2 text-[50px] font-[900] text-[#ff9100]">
                <span className="text-[15px]">As Low As</span> ₹10,000*
                
                <span className="text-[15px] font-[600] text-white">/ month</span>
              </p>
              <p className="text-left text-[18px] font-[900] mt-5">
              Our customized digital marketing plans start at just ₹10,000, providing you with an affordable way to drive growth and succeed in the digital space.
              </p>
              <div className="justify-left flex mt-5">
                <Button
                  sx={{
                    color: "white",
                    border: "1px solid #ff9100",
                    background: "#ff9100",
                    borderRadius: "999px",
                    padding: "10px",
                    marginTop: "10px",

                    paddingLeft: "20px",
                    fontFamily: "unset",
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    setGlobalState("requested", true);
                    setGlobalState("subject", 20);
                  }}
                >
                  Get Started
                  <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                </Button>
              </div>
            </Box>
          
          </Box>
          </Fade>
</div>
        <div className="md:p-28 md:pt-5 holder p-5 md:flex justify-center gap-3">
        <Fade className="basis-[100%]"> 
          
          <Box className="border-[1px] p-5 box h-full ">
            <Box className=" p-5 md:p-10 ">
              <h1 className="text-[20px] tracking-wider uppercase text-left ">
                Beginner
              </h1>
              <p className="text-left mt-2 text-[50px] font-[900] text-[#ff9100]">
                ₹25000
                <span className="text-[15px] font-[600] text-white">/ month</span>
              </p>
              <p className="text-left text-[18px] font-[900] mt-5 min-h-[200px]">
              Beginner's Boost: ₹25,000 for content, social media management, and monthly reports to jumpstart your brand's online success.
              </p>
              <div className="justify-left flex mt-5 ">
                <Button
                  sx={{
                    color: "white",
                    border: "1px solid #ff9100",
                    background: "#ff9100",
                    borderRadius: "999px",
                    padding: "10px",
                    marginTop: "10px",

                    paddingLeft: "20px",
                    fontFamily: "unset",
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    setGlobalState("requested", true);
                    setGlobalState("subject", 30);
                  }}
                >
                  Get Started
                  <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                </Button>
              </div>
            </Box>
            <Box className=" p-5">
              <div className="mt-5 flex gap-1 ">
                <div className=" p-5 pl-0 pb-0 text-[20px]">
                  <FontAwesomeIcon
                    icon={faCertificate}
                    className="text-[#ff9100]"
                  ></FontAwesomeIcon>
                </div>
                <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                  {" "}
               Content For You
                </h1>
              </div>
              <div className="mt-5 flex gap-1 ">
                <div className=" p-5 pl-0 pb-0 text-[20px]">
                  <FontAwesomeIcon
                    icon={faCertificate}
                    className="text-white"
                  ></FontAwesomeIcon>
                </div>
                <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                  {" "}
                  Social Media Management
                </h1>
              </div>
              <div className="mt-5 flex gap-1 ">
                <div className=" p-5 pl-0 pb-0 text-[20px]">
                  <FontAwesomeIcon
                    icon={faCertificate}
                    className="text-[#c1ff00]"
                  ></FontAwesomeIcon>
                </div>
                <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                  {" "}
                  Monthly Report
                </h1>
              </div>
            </Box>
          </Box>
        </Fade>
          <Fade className="basis-[100%]">
          
            <Box className="border-[1px] p-5 mt-10 md:mt-0 box h-full basis-1/3">
              <Box className=" p-5 md:p-10 ">
                <h1 className="text-[20px] tracking-wider uppercase text-left ">
                intermediate
                </h1>
                <p className="text-left mt-2 text-[50px] font-[900] text-[#ff9100]">
                  ₹40000
                  <span className="text-[15px] font-[600] text-white">/ month</span>
                </p>
                <p className="text-left text-[18px] font-[900] mt-5 min-h-[180px]">
                Intermediate Plan: ₹40,000 for comprehensive digital marketing, incl. content creation, social media management, optimization, basic ads, monthly reports.
                </p>
                <div className="justify-left flex mt-5 md:mt-10">
                  <Button
                    sx={{
                      color: "white",
                      border: "1px solid #ff9100",
                      background: "#ff9100",
                      borderRadius: "999px",
                      padding: "10px",
                      marginTop: "10px",

                      paddingLeft: "20px",
                      fontFamily: "unset",
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      setGlobalState("requested", true);
                      setGlobalState("subject", 40);
                    }}
                  >
                    Get Started
                    <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                  </Button>
                </div>
              </Box>
              
              <Box className=" p-5">
                <div className="mt-5 flex gap-1 ">
                  <div className=" p-5 pl-0 pb-0 text-[20px]">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="text-[#ff9100]"
                    ></FontAwesomeIcon>
                  </div>
                  <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                    {" "}
                   Content For You
                  </h1>
                </div>
                <div className="mt-5 flex gap-1 ">
                  <div className=" p-5 pl-0 pb-0 text-[20px]">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="text-white"
                    ></FontAwesomeIcon>
                  </div>
                  <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                    {" "}
                    Social Media Optimisation
                  </h1>
                </div>
                <div className="mt-5 flex gap-1 ">
                  <div className=" p-5 pl-0 pb-0 text-[20px]">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="text-[#c1ff00]"
                    ></FontAwesomeIcon>
                  </div>
                  <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                    {" "}
                    Social Media Management
                  </h1>
                </div>
                <div className="mt-5 flex gap-1 ">
                  <div className=" p-5 pl-0 pb-0 text-[20px]">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="text-[#ff9100]"
                    ></FontAwesomeIcon>
                  </div>
                  <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                    {" "}
                  Content Marketing
                  </h1>
                </div>
                <div className="mt-5 flex gap-1 ">
                  <div className=" p-5 pl-0 pb-0 text-[20px]">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="text-white"
                    ></FontAwesomeIcon>
                  </div>
                  <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                    {" "}
                    Basic Ads
                  </h1>
                </div>
                <div className="mt-5 flex gap-1 ">
                  <div className=" p-5 pl-0 pb-0 text-[20px]">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="text-[#c1ff00]"
                    ></FontAwesomeIcon>
                  </div>
                  <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                    {" "}
                   Monthly Report
                  </h1>
                </div>
              </Box>
            </Box>
          </Fade>
          <Fade className="basis-[100%]">
            <Box className="border-[1px] p-5  mt-10 md:mt-0 box h-full basis-1/3">
              <Box className=" p-5 md:p-10 ">
                <h1 className="text-[20px] tracking-wider uppercase text-left ">
                  Advanced
                </h1>
                <p className="text-left mt-2 text-[50px] font-[900] text-[#ff9100]">
                  ₹50000
                  <span className="text-[15px] font-[600] text-white">/ month</span>
                </p>
                <p className="text-left text-[18px] font-[900] mt-5 min-h-[180px]">
                Advanced Plan: ₹50,000 for full-fledged digital marketing, incl. content creation, social media management, optimization, targeted ads, monthly reports, and website upgrades.
                </p>
                <div className="justify-left flex mt-5">
                  <Button
                    sx={{
                      color: "white",
                      border: "1px solid #ff9100",
                      background: "#ff9100",
                      borderRadius: "999px",
                      padding: "10px",
                      marginTop: "10px",

                      paddingLeft: "20px",
                      fontFamily: "unset",
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      setGlobalState("requested", true);
                      setGlobalState("subject", 50);
                    }}
                  >
                    Get Started
                    <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                  </Button>
                </div>
              </Box>
              <Box className=" p-5">
              <div className="mt-5 flex gap-1 ">
                  <div className=" p-5 pl-0 pb-0 text-[20px]">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="text-[#ff9100]"
                    ></FontAwesomeIcon>
                  </div>
                  <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                    {" "}
                   Content For You
                  </h1>
                </div>
                <div className="mt-5 flex gap-1 ">
                  <div className=" p-5 pl-0 pb-0 text-[20px]">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="text-white"
                    ></FontAwesomeIcon>
                  </div>
                  <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                    {" "}
                    Social Media Optimisation
                  </h1>
                </div>
                <div className="mt-5 flex gap-1 ">
                  <div className=" p-5 pl-0 pb-0 text-[20px]">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="text-[#c1ff00]"
                    ></FontAwesomeIcon>
                  </div>
                  <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                    {" "}
                    Social Media Management
                  </h1>
                </div>
                <div className="mt-5 flex gap-1 ">
                  <div className=" p-5 pl-0 pb-0 text-[20px]">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="text-[#ff9100]"
                    ></FontAwesomeIcon>
                  </div>
                  <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                    {" "}
                  Content Marketing
                  </h1>
                </div>
                <div className="mt-5 flex gap-1 ">
                  <div className=" p-5 pl-0 pb-0 text-[20px]">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="text-white"
                    ></FontAwesomeIcon>
                  </div>
                  <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                    {" "}
                    Targeted Ads
                  </h1>
                </div>
                <div className="mt-5 flex gap-1 ">
                  <div className=" p-5 pl-0 pb-0 text-[20px]">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="text-[#c1ff00]"
                    ></FontAwesomeIcon>
                  </div>
                  <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                    {" "}
                   Monthly Report
                  </h1>
                </div>
                <div className="mt-5 flex gap-1 ">
                  <div className=" p-5 pl-0 pb-0 text-[20px]">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="text-[#ff9100]"
                    ></FontAwesomeIcon>
                  </div>
                  <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                    {" "}
                   Website/App
                  </h1>
                </div>
                <div className="mt-5 flex gap-1 ">
                  <div className=" p-5 pl-0 pb-0 text-[20px]">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="text-white"
                    ></FontAwesomeIcon>
                  </div>
                  <h1 className=" p-5 pl-0 text-[20px] pb-3 font-[600] text-left">
                    {" "}
                  + More
                  </h1>
                </div>
              </Box>
            </Box>
            
          </Fade>
        </div>
        
      </div>
    </Fade>
  );
}
