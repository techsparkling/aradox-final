import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Quote from './Components/Quote';
import Problem from './Components/Problem';
import Solution from './Components/Solution';
import Process from './Components/Process';
import Price from './Components/Price';
import Vision from './Components/Vision';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';
import { Loading } from './Components/Loading';
import { Fade, Slide } from 'react-awesome-reveal';
import FAQ from './Components/FAQ';
import GetStarted from './Components/GetStarted';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  
  SwiperCore.use([Autoplay])
 setTimeout(()=>{
  document.getElementById('loader').style.display="none"
  document.getElementById('content').style.display="block"
 }
 ,3500)

  return (
  
    <div className="App">
        <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick

rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
             <Contact></Contact>
             
      <Fade>
      <div id='loader'>
      <Loading></Loading>
      </div>
      </Fade>
      <div id='content' className='hidden' >
        <Fade>
 
<Header></Header>

<Hero></Hero>
</Fade>
<Quote></Quote>
<Problem></Problem>
<Solution></Solution>
<Process></Process>
<Price></Price>
<Vision></Vision>
<FAQ></FAQ>
<GetStarted></GetStarted>

</div>
    </div>
 
  );
}

export default App;
