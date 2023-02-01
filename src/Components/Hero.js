
import React from "react";
 import { useRef,useEffect,useState } from "react";
  import  { Navigation, Pagination ,Scrollbar, A11y, z} from 'swiper';
  import { Swiper, SwiperSlide } from "swiper/react";
  import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
  import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
    import Lottie from "lottie-react"
    import SwiperCore, { Autoplay } from 'swiper';
import First from "../Images/1st.json"
import Second from "../Images/10th.json"
    import 'swiper/css';

  import { useSwiper } from 'swiper/react';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
import { Button, IconButton } from "@mui/material";
import { bgcolor } from "@mui/system";
import { isHostComponent } from "@mui/base";
import { setGlobalState } from "./global";
export default function Hero(){
  const myRef=useRef()
  SwiperCore.use([Autoplay])
  const [myElementIsVisible,setMyElementIsVisible]=useState()
  useEffect(()=>{
      const observer=new IntersectionObserver((entries)=>{
        const entry=entries[0]
   
        setMyElementIsVisible(entry.isIntersecting)
      })
      observer.observe(myRef.current)
  },[])
    const swiper = useSwiper();
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    return(
        <div className="text-white">
                  
                  <div className="p-5 md:p-10 pt-10 md:pt-10 pb-0 md:pb-0">
          <h1 className="text-gray-500 text-left ">
               Most Frequently Asked Questions
                </h1>
                <h1 className="text-[40px] md:text-[90px] text-white text-left pb-0 mb-0">
                Why <span className="text-[#ff9100]">invest?</span>

                </h1></div>
       <Swiper
     
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
    
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
  
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      
     
      

      
      onSlideChange={() => console.log('slide change')}
      
      onSwiper={(swiper) =>  setTimeout(() => {
        // Override prevEl & nextEl now that refs are defined
      
      })}
    >  <SwiperSlide>
        
            <div className="ml-5 md:ml-10">
                
                <h1 className="text-gray-500 text-left text-[30px] tracking-wider ">
                In a website without traffic?
                </h1>
                <div>

                </div>
              
            </div>
           
                </SwiperSlide>
               
        
                <SwiperSlide>
        
            <div className="ml-5 md:ml-10">
                
                <h1 className="text-gray-500 text-left text-[30px] tracking-wider ">
                In a social media without audience?

                </h1>
                <div>

                </div>
              
            </div>
           
                </SwiperSlide>
                <SwiperSlide>
        
        <div className="ml-5 md:ml-10">
            
            <h1 className="text-gray-500 text-left text-[30px] tracking-wider ">
            In a video without views?

            </h1>
            <div>

            </div>
          
        </div>
       
            </SwiperSlide>
            <SwiperSlide>
        
        <div className="ml-5 md:ml-10">
            
            <h1 className="text-gray-500 text-left text-[30px] tracking-wider ">
            In a journey without growth?

            </h1>
            <div>

            </div>
          
        </div>
       
            </SwiperSlide>
            <div className="flex mt-5 justify-left ml-5 md:ml-10 " > <a href="#about"><Button  className="justify-self-left hover:text-white" sx={{
    color:"white",

    border:"1px solid #ff9100",
    backgroundColor:"#ff9100",
    borderRadius:"999px",
    padding:"10px",
    marginTop:"10px",
 
    paddingLeft:"20px",
    fontFamily:"unset",
    fontWeight:"bold",

  }}

  
  >
 
How We Could Help
  <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
  </Button> </a></div>
                {/* <div className="mt-5  flex gap-5  ml-7 md:ml-12">
  <IconButton ref={navigationPrevRef} sx={{
    color:"white",
    border:"1px solid #ff9100"

  }}>
  <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
  </IconButton>
  <IconButton ref={navigationNextRef} sx={{
    color:"white",
    border:"1px solid #ff9100",

    
  }}>
  <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
  </IconButton>
        </div> */}
                </Swiper>
                
                <div className="bg-[#ff9100] holder mt-[100px]" ref={myRef}>
               <Lottie animationData={Second} loop={true}  ></Lottie>
              
                </div>
                <div id="black" ref={myRef} className="bg-[#020310a6] min-h-[32vh] md:min-h-[100vh]">
                  

</div>
        </div>
           
    )

}

  