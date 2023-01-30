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

export default function Contact(){
    const requested=useGlobalState("requested")[0]
    const subject=useGlobalState('subject')
    const [name,setName]=useState('')
   const[select,setSelect]=useState('')
   const [email,setEmail]=useState('')
   const [message,setMessage]=useState('')

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
          <MenuItem value="none"
         
          >
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
  <Button  sx={{
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
        <IconButton><WhatsAppIcon></WhatsAppIcon></IconButton>
    <IconButton><InstagramIcon></InstagramIcon></IconButton>
    
    <IconButton><TwitterIcon></TwitterIcon></IconButton>
    <IconButton><LinkedInIcon></LinkedInIcon></IconButton>

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
