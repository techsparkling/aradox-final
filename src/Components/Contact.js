import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Slide,Fade } from "react-awesome-reveal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Divider, TextField,Button ,Chip, IconButton, } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import PhoneIcon from '@mui/icons-material/Phone';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { setGlobalState,useGlobalState } from "./global";
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { toast } from "react-toastify";
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, set } from "firebase/database";
import {firebaseConfig} from "./firebaseconfig";
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
export default function Contact(){
    const requested=useGlobalState("requested")[0]
    const subject=useGlobalState('subject')
    const [name,setName]=useState('')
   const[select,setSelect]=useState('')
   const [email,setEmail]=useState('')
   const [message,setMessage]=useState('')
   


   function ValidateEmail(email) 
   {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
     {
       return (true)
     }
      else{
       return (false)}
   }
   function checkname(name){
    if(name!==""){
      return (true)
    }
    else{
      return(false)
    }
   }
   function checkmessage(message){
    if(message!==""){
      return (true)
    }
    else{
      return(false)
    }
   }
useEffect(()=>{
 
   if(subject[0]==20){
    setSelect(20)
   }
   else if(subject[0]==10){
    setSelect(10)
   }
   else if(subject[0]==30){
    setSelect(30)
   }
   else if(subject[0]==40){
    setSelect(40)
   }
   else if(subject[0]==50){
    setSelect(50)
   }
   else if(subject[0]=='none'){
    setSelect('none')
   }
   
},requested[0])
if(requested){

    return(
       
        <div  className=" fixed  top-0 z-[10]  contact w-full md:w-[400px] h-[100%]  right-0">
       <Fade >
        <div className="p-5 bg-white  right-0   fixed contact  w-full md:w-[400px] h-full right-0 text-[#ff9100]">
          
       <div className="text-[30px] text-right absolute right-5 "onClick={()=>{setGlobalState('requested',false)}}> <FontAwesomeIcon icon={faXmark} ></FontAwesomeIcon></div>
       <h1 className="text-[30px] font-[800] text-left text-[#ff9100] pb-3">Contact Us</h1>
       <Divider ></Divider>
       <div className="mt-5 p-2">
        
<TextField label=" Name" className="w-full text-[#ff9100]" value={name} onChange={(event)=>{
    
setName(event.target.value)
}} sx={{ '& label.Mui-focused': {
      color: '#ff9100',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '',
            
          },
      '&:hover fieldset': {
        borderColor: '#ff9100',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ff9100',
        
      },
    },
  }} inputProps={{ style: {  borderColor:"" } }}></TextField>
<div className="mt-5">
<TextField label="Email" className="w-full " value={email} onChange={(event)=>{
setEmail(event.target.value)
}} sx={{ '& label.Mui-focused': {
      color: '#ff9100',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '',
            
          },
      '&:hover fieldset': {
        borderColor: '#ff9100',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ff9100',
        
      },
    },
  }}></TextField>
</div>

<div className="mt-5 w-full">
<FormControl fullWidth sx={{}}>
<InputLabel id="demo-simple-select-helper-label" sx={
    {
       
        "&.Mui-focused": {
          color: "#ff9100",
        },
    }
}>Subject</InputLabel>
        <Select
        value={select}
        onChange={(event)=>{
       setGlobalState('subject',event.target.value)
         
        }}
         MenuProps={{
            sx: {
              "&& .Mui-selected": {
                backgroundColor: "#ff910047"
              }
            }
          }}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          labelstyle={{ color: '#ff0000' }}
          sx={{
            
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: '',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ff9100',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ff9100',
            },
            '.MuiSvgIcon-root ': {
              fill: "'#ff9100' !important",
            },
            
            textAlign:"left",
            "& .MuiSvgIcon-root": {
                textAlign:"left",
            },
            
          }}
          
          label="Subject"
   fullWidth
        >
        
          <MenuItem value="none">General Inquiry</MenuItem>
          <MenuItem value={10}>Regarding Free Plan Request</MenuItem>
          <MenuItem value={20}>Regarding Custom Plan Request</MenuItem>
          <MenuItem value={30}>Regarding Beginner Plan Request</MenuItem>
          <MenuItem value={40}>Regarding Intermediate Plan Request</MenuItem>
          <MenuItem value={50}>Regarding Advanced Plan Request</MenuItem>
        </Select>
        </FormControl>
        </div>
<div className="mt-5">
<TextField label="Message"multiline className="w-full border-2" value={message} onChange={(event)=>{
setMessage(event.target.value)
}}  rows={5}sx={{ '& label.Mui-focused': {
      color: '#ff9100',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ff9100',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '',
        
      },
      '&:hover fieldset': {
        borderColor: '#ff9100',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ff9100',
        
      },
    },
  }}></TextField>
  <Button onClick={()=>{
   if(ValidateEmail(email)&& checkname(name) && checkmessage(message)){
    let subject
    if(select=="none"){
    subject="General Inquiry"
  
    }
    else if(select==10){
      subject="Regarding Free Plan Request"
    }
    else if(select==20){
      subject="Regarding Custom Plan Request"
    }
    else if(select==30){
      subject="Regarding Beginner Plan Request"
    }
    else if(select==40){
      subject="Regarding Intermediate Plan Request"
    }
    else if(select==50){
      subject="Regarding Advanced Plan Request"
    }
    push(ref(database, 'new/'), {
      username: name,
      email: email,
      message:message,
      subject:subject,
    }).then(()=>{
      toast.success("Message Sent. You will get a reply shortly")
    })
   
  }
    
   
  
  
   else if(!ValidateEmail(email)&& email!==""){
    toast.error("Check your Email Id.")
   }
   else if( !checkname(name) && !checkmessage(message)){
    toast.error("Make sure to fill in all the fields.")
   }
  }}  sx={{
    color:"white",
    border:"1px solid #ff9100",
    background:"#ff9100",
    borderRadius:"999px",
    padding:"10px",
    marginTop:"20px",
    width:"100%",
    paddingLeft:"20px",
    fontFamily:"unset",
    fontWeight:"bold",

  }} className="hover:text-black">
 
 Send Message
 
  <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
  </Button>
  <div className="mt-5 bottom-5 absolute w-full left-0">
  <Divider  variant="middle">
    <Chip label="Find Us On" />
  </Divider>
  <div className="gap-5 w-full mt-5 flex justify-center place-content-center">
    <a href="tel:9790746705">
  <IconButton><PhoneIcon></PhoneIcon></IconButton></a>
  <a href="https://wa.me/9790746705">
        <IconButton><WhatsAppIcon></WhatsAppIcon></IconButton></a>
        <a href="https://www.instagram.com/aradoxmedia/?igshid=MDM4ZDc5MmU%3D">
    <IconButton><InstagramIcon></InstagramIcon></IconButton></a>
    <a href="mailto:aradoxthecompany@gmail.com">
    <IconButton><EmailIcon></EmailIcon></IconButton></a>
    <a href="https://www.linkedin.com/company/aradox-media/">
    <IconButton><LinkedInIcon></LinkedInIcon></IconButton>
    </a>
  </div>

  </div>
</div>
       </div>
        </div>
    </Fade>
  
        </div>
      
    )
}


}
