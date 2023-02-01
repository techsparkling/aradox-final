import { Collapse, Divider,Box } from "@mui/material";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { useRef,useEffect,useState } from "react";

export default function Process(){
    const mainlineRef=useRef()
    const line1Ref=useRef()
    const line2Ref=useRef()

  const [mainline,setMainline]=useState()
  const [line1,setLine1]=useState()
  const [line2,setLine2]=useState()

  useEffect(()=>{
      const observermain=new IntersectionObserver((entries)=>{
        console.log(entries)
        const entry=entries[0]
     
        console.log(entry)
     
        setMainline(entry.isIntersecting)
       
         
        
      })
      const observer1=new IntersectionObserver((entries)=>{
        console.log(entries)
        const entry=entries[0]
     
        console.log(entry)
     
        setLine1(entry.isIntersecting)
       
         
        
      })
      const observer2=new IntersectionObserver((entries)=>{
        console.log(entries)
        const entry=entries[0]
     
        console.log(entry)
     
        setLine2(entry.isIntersecting)
       
         
        
      })
      observermain.observe(mainlineRef.current)
      observer1.observe(line1Ref.current)
      observer2.observe(line2Ref.current)
  },[])
  setTimeout(()=>{
    if(mainline){
      document.getElementsByClassName('line')[0].style.width="100%"
    
    }
    // else{
    //   document.getElementsByClassName('line')[0].style.width="0%"
      
    // }
   if(line1){
    document.getElementsByClassName('line')[1].style.width="100%"
   }
  //  else{
  //   document.getElementsByClassName('line')[1].style.width="0%"

  //  }
   if(line2){
    document.getElementsByClassName('line')[2].style.width="100%"
   }
  //  else{
  //   document.getElementsByClassName('line')[2].style.width="0%"

  //  }

  },50)

    return(
        <div className="text-white mt-[100px] " id="process">
            
            <Fade>
                <h1 className="text-[40px] font-[900] p-2 md:p-0">The Elite Journey to <span className="text-[#ff9100]"> Online Triumph. </span></h1>
                <div className="w-full flex justify-center">
            <p className="mt-5 p-5 md:w- text-[20px] md:w-1/2">All the action plan that you need.</p>
            </div>
            </Fade>
            <div className="pt-5 p-5 md:p-32 md:pt-10" >
          
                <Box  sx={{width:'100%'}} className="p-10 pb-0">
                
                    <Divider className="bg-[#ff9100] w-[0px] p-2  line"ref={mainlineRef}></Divider>
            
       
            </Box>
            <Fade>
            <Box className="border-[1px] p-3 md:p-5">
              <Box className="md:p-10  p-5 md:flex gap-10  align-middle content-center justify-start"> 
                <h1 className="text-[70px] md:text-[100px] font-[900] text-left text-[#ff9100]">01</h1>
                <h1 className="font-[900] text-left text-[20px] md:text-[25px] mt-8 ">Get in Touch to Elevate Your Digital Presence. Contact us today to start the conversation and take the first step towards online success.</h1>
              
              </Box>
              <div className="md:p-10 p-5 md:pt-0 md:pb-0">
              <Divider className="bg-white w-[5px]  mt-5  line"ref={line1Ref}></Divider>
              </div>
              <Box className="md:p-10  p-5 md:flex gap-10 justify-start align-middle content-center"> 
                <h1 className="text-[70px] md:text-[100px] font-[900] text-left ">02</h1>
                <h1 className="font-[900] text-left text-[20px] md:text-[25px] mt-8 ">During the consultation, we'll listen and understand your goals, pain points, and what you want to achieve in the digital space.</h1>
              
              </Box>
              <div className="md:p-10 p-5 md:pt-0 md:pb-0">
              <Divider className="bg-white w-[5px]  mt-5  line"ref={line2Ref}></Divider>
              </div>
              <Box className="md:p-10  p-5 md:flex gap-10 justify-start align-middle content-center"> 
                <h1 className="text-[70px] md:text-[100px] font-[900] text-left text-[#ff9100]">03</h1>
                <h1 className="font-[900] text-left text-[20px] md:text-[25px] mt-8 ">Relax, We've Got You Covered. Trust us to handle your digital marketing needs and achieve online success.</h1>
              
              </Box>
              <div className="md:p-10 p-5 md:pt-0 md:pb-0">
              <Divider className="bg-white w-[0px]  mt-5  line"></Divider>
              </div>
            </Box>
            </Fade>
            </div>
            
        </div>
    )
}