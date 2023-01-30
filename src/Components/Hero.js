
import React from "react";
 import { useRef,useEffect,useState } from "react";
  import  { Navigation, Pagination ,Scrollbar, A11y, Autoplay} from 'swiper';
  import { Swiper, SwiperSlide } from "swiper/react";
  import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
  import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
    import Lottie from "lottie-react"
    
import First from "../Images/1st.json"
import Second from "../Images/10th.json"
    import 'swiper/css';

  import { useSwiper } from 'swiper/react';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
import { Button, IconButton } from "@mui/material";
import { bgcolor } from "@mui/system";
import { isHostComponent } from "@mui/base";
export default function Hero(){
  const myRef=useRef()
  
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
       <Swiper
     
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
    
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      autoplay={{delay:5000}}
    
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) =>  setTimeout(() => {
        // Override prevEl & nextEl now that refs are defined
        swiper.params.navigation.prevEl = navigationPrevRef.current
        swiper.params.navigation.nextEl = navigationNextRef.current

        // Re-init navigation
        swiper.navigation.destroy()
        swiper.navigation.init()
        swiper.navigation.update()
      })}
    >  <SwiperSlide>
        
            <div className="p-5 md:p-10 pt-10 md:pt-10">
                <h1 className="text-gray-500 text-left ">
                Range of Retained marketing Services
                </h1>
                <h1 className="text-[30px] md:text-[70px] text-white text-left">
                    A full-service digital<br></br> marketing <span className="text-[#ff9100]">agency.</span>

                </h1>
                <h1 className="text-gray-500 text-left mt-5 md:hidden">
                Range of Retained marketing Services
                </h1>
                <div>
                                   <div className=" top-[300px] flex gap-5 right-5 mt-10 md:mt-10">
  <IconButton sx={{
    color:"white",
    border:"1px solid #ff9100"

  }}>
  <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
  </IconButton>
  <IconButton ref={navigationNextRef} sx={{
    color:"white",
    border:"1px solid #ff9100",
    background:"#ff9100",
    
  }}>
  <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
  </IconButton>
        </div>
                </div>
            
            </div>
            <div className="pl-24 pr-24  bg-[#ff3700]">
            
                </div>
                </SwiperSlide>
                <SwiperSlide>
            <div className="p-5 md:p-10 pt-10 md:pt-10">
                <h1 className="text-gray-500 text-left ">
                Range of Retained marketing Services
                </h1>
                <h1 className="text-[30px] md:text-[70px] text-white text-left">
                    A full-service digital<br></br> marketing <span className="text-[#ff9100]">agency.</span>

                </h1>
                <div className=" top-[300px] flex gap-5 right-5 mt-10 md:mt-10">
  <IconButton ref={navigationPrevRef} sx={{
   
    color:"white",
    border:"1px solid #ff9100",
    background:"#ff9100",
  }}>
  <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
  </IconButton>
  <IconButton  sx={{
   
   color:"white",
   border:"1px solid #ff9100"
  }}>
  <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
  </IconButton>
        </div>
            </div>
            
                </SwiperSlide>
                </Swiper>
                <div className="bg-[#ff9100] holder mt-[100px]" ref={myRef}>
               <Lottie animationData={Second} loop={true}  ></Lottie>
              
                </div>
                <div id="black" ref={myRef} className="bg-[#020310a6] min-h-[52vh] md:min-h-[150vh]">
                  

</div>

        </div>
           
    )

}

  