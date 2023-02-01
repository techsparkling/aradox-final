import React, { useState, useRef, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Collapse, Box, Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function FAQ() {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const line0Ref = useRef();
  const line1Ref = useRef();
  const line2Ref = useRef();
  const line3Ref = useRef();
  const [line0, setline0] = useState();
  const [line1, setLine1] = useState();
  const [line2, setLine2] = useState();
  const [line3, setLine3] = useState();
  useEffect(() => {
    const observermain = new IntersectionObserver((entries) => {
      console.log(entries);
      const entry = entries[0];

      console.log(entry);

      setline0(entry.isIntersecting);
    });
    const observer1 = new IntersectionObserver((entries) => {
      console.log(entries);
      const entry = entries[0];

      console.log(entry);

      setLine1(entry.isIntersecting);
    });
    const observer2 = new IntersectionObserver((entries) => {
      console.log(entries);
      const entry = entries[0];

      console.log(entry);

      setLine2(entry.isIntersecting);
    });
    const observer3 = new IntersectionObserver((entries) => {
      console.log(entries);
      const entry = entries[0];

      console.log(entry);

      setLine3(entry.isIntersecting);
    });
    observermain.observe(line0Ref.current);
    observer1.observe(line1Ref.current);
    observer2.observe(line2Ref.current);
    observer3.observe(line3Ref.current);
  }, []);
  setTimeout(() => {
    if (line0) {
      document.getElementById("line0").style.width = "100%";
    } 
    // else {
    //     document.getElementById("line0").style.width = "0%";
    // }
    if (line1) {
        document.getElementById("line1").style.width = "100%";
    } 
    // else {
    //     document.getElementById("line1").style.width = "0%";
    // }
    if (line2) {
        document.getElementById("line2").style.width = "100%";
    } 
    // else {
    //     document.getElementById("line2").style.width = "0%";
    // }
    if (line3) {
        document.getElementById("line3").style.width = "100%";
      } 
      // else {
      //   document.getElementById("line3").style.width = "0%";
      // }
  }, 50);

  setTimeout(() => {
    if (question1) {
      document.getElementsByClassName("icon")[0].style.transform =
        "rotate(180deg)";
    } else {
      document.getElementsByClassName("icon")[0].style.transform = "unset";
    }
    if (question2) {
      document.getElementsByClassName("icon")[1].style.transform =
        "rotate(180deg)";
    } else {
      document.getElementsByClassName("icon")[1].style.transform = "unset";
    }
    if (question3) {
        document.getElementsByClassName("icon")[2].style.transform =
          "rotate(180deg)";
      } else {
        document.getElementsByClassName("icon")[2].style.transform = "unset";
      }
      if (question4) {
        document.getElementsByClassName("icon")[3].style.transform =
          "rotate(180deg)";
      } else {
        document.getElementsByClassName("icon")[3].style.transform = "unset";
      }
  }, 50);

  return (
    <Fade>
      <div className="text-white mt-20">
        <h1 className="text-[40px] font-[900]">
          Frequently Asked<span className="text-[#ff9100]"> Questions </span>
        </h1>
        <div className="w-full flex justify-center">
          <p className="mt-5 p-5 md:w- text-[20px] md:w-1/2">
         To guide you in the world of Digital Marketing
          </p>
        </div>
        <div className="p-5 md:p-28">
          <Box
            className=" p-5 flex"
            onClick={() => {
              setQuestion1(!question1);
            }}
          >
            <div className=" md:w-1/2 ">
              <h1 className="font-[900] text-[25px] text-left">What are the benefits of using digital media for marketing?</h1>
            </div>
            <div className="w-1/2 text-right ">
              <KeyboardArrowDownIcon
                className="text-white text-[25px] text-right icon"
                fontSize="large"
              ></KeyboardArrowDownIcon>
            </div>
          </Box>

          <Collapse in={question1}>
            <Box className="p-5 pt-0 ">
              <h1 className="text-left text-[20px]">
              Benefits of using digital media for marketing include increased reach, lower costs, more precise targeting, and the ability to track and measure results.
              </h1>
            </Box>
          </Collapse>
          <div className="p-5 pt-0"     ref={line0Ref}>
            <Divider
              className="bg-gray-500  mt-5  line "
         
              id="line0"
            ></Divider>
          </div>
          <Box
            className=" p-5 flex"
            onClick={() => {
              setQuestion2(!question2);
            }}
          >
            <div className="w-1/2">
              <h1 className="font-[900] text-[25px] text-left ">What is the role of digital media in marketing?</h1>
            </div>
            <div className="w-1/2 text-right ">
              <KeyboardArrowDownIcon
                className="text-white text-[25px] text-right icon"
                fontSize="large"
              ></KeyboardArrowDownIcon>
            </div>
          </Box>

          <Collapse in={question2}>
            <Box className="p-5 pt-0 ">
              <h1 className="text-left text-[20px]">
              Digital media plays a critical role in marketing as it allows companies to reach a wider audience through targeted and personalized campaigns.
              </h1>
            </Box>
          </Collapse>
          <div className="p-5 pt-0" ref={line1Ref}>
            <Divider className="bg-gray-500  mt-5  line " id="line1"></Divider>
          </div>
          <Box
            className=" p-5 flex"
            onClick={() => {
              setQuestion3(!question3);
            }}
          >
            <div className="w-1/2">
              <h1 className="font-[900] text-[25px] text-left ">Is digital marketing worth it?</h1>
            </div>
            <div className="w-1/2 text-right ">
              <KeyboardArrowDownIcon
                className="text-white text-[25px] text-right icon"
                fontSize="large"
              ></KeyboardArrowDownIcon>
            </div>
          </Box>

          <Collapse in={question3}>
            <Box className="p-5 pt-0 ">
              <h1 className="text-left text-[20px]">
              Yes it is. its far more effective than traditional marketing and cost effective.
              </h1>
            </Box>
          </Collapse>
          <div className="p-5 pt-0" ref={line2Ref}>
            <Divider className="bg-gray-500  mt-5  line " id="line2"></Divider>
          </div>
          <Box
            className=" p-5 flex"
            onClick={() => {
              setQuestion4(!question4);
            }}
          >
            <div className="w-1/2">
              <h1 className="font-[900] text-[25px] text-left ">How is it going to suit us?</h1>
            </div>
            <div className="w-1/2 text-right ">
              <KeyboardArrowDownIcon
                className="text-white text-[25px] text-right icon"
                fontSize="large"
              ></KeyboardArrowDownIcon>
            </div>
          </Box>

          <Collapse in={question4}>
            <Box className="p-5 pt-0 ">
              <h1 className="text-left text-[20px]">
                Contact Us
              and we will discuss how digital marketing can help you.
              </h1>
            </Box>
          </Collapse>
          <div className="p-5 pt-0" ref={line3Ref}>
            <Divider className="bg-gray-500  mt-5  line " id="line3"></Divider>
          </div>
        </div>
      </div>
     
    </Fade>
  );
}
