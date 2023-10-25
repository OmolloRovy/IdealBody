import React from "react";
import "./Hero.css";
import Header from "./Header"; // Import the Header component
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
const Hero = () => {
  const transition ={type:'spring', duration:3}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
     <div className="hero" id="home">
     <div className="blur hero-blur"></div>
     <div className="left-h">
       <Header /> {/* Use the Header component */}
       {/* the best ad*/}
       <div className="the-best-add">
       <motion.div
         initial={{ left: mobile? "165px": '238px' }}
         whileInView={{ left: '8px' }}
         transition={{ ...transition, type: 'tween' }}
         className="best-ad"
       ></motion.div>
       <span>The Best Fitness Club In town</span>
       </div>
     {/* Hero Heading */}
     <div className="hero-text">
       <div>
         <span className="stroke-text">Shape </span>
         <span> your</span>
       </div>
       <div>
         <span>ideal body</span>
       </div>
       <div>
         <span>
           In here we will help you to shape and build your ideal body and
           live up your life to fullest
         </span>
       </div>
     </div>
     {/* figures*/}
     <div className="figures">
       <div>
         <span>
         <NumberCounter end={140} start={100} delay='4' preFix="+"/>
         </span>
         <span> Expert Coaches</span>

       </div>
       <div>
         <span>
         <NumberCounter end={978} start={800} delay='4' preFix="+"/>
         </span>
         <span>Members Joined</span>
       </div>
       <div>
         <span>
         <NumberCounter end={50} start={20} delay='4' preFix="+"/>
         </span>
         <span>Fittness Programs</span>
       </div>
     </div>
     {/* hero-buttons*/}
     <div className='hero-buttons'>
       <button className="btn" onClick={()=>{
        alert("!Let's GET FIT");
        }}> Get Started</button>
       <button className="btn"onClick={()=>{
        alert("HURRAY! LET'S GET ON WITH IT");
        }}> Learn More</button>
     </div>
     </div>
   <div className="right-h">
       <button className="btn" onClick={()=>{
        alert("You Have Succesfully joined Ideal Fit HURRAY!");
        }}>Join Now</button>

       <motion.div
         initial={{ right: '-1rem' }}
         whileInView={{ right: '4rem' }}
         transition={transition}
         className="heart-rate">
         <img src={Heart} alt="" />
         <span>Heart rate</span>
         <span> 116 bpm</span>
       </motion.div>
       {/* hero images*/}

       <img src={hero_image} alt="" className="hero-image" />
       <motion.img
       initial={{right:'37rem'}}
       whileInView={{ right: '28rem' }}
       transition={transition}
       src={hero_image_back} alt="" className="hero-image-back" />

       {/* calories*/}
       <motion.div 
       initial={{right:'11rem'}}
       whileInView={{ right: '25rem' }}
       transition={transition}
       className="calories">
         <img src={Calories} alt="" />

         <span> Calories Burned</span>
         <span>220 kcal</span>
       </motion.div>
     </div>
    </div>
      
  );
};

export default Hero;
