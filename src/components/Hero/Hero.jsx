import React from "react";
import "./Hero.css";
import Header from "./Header/Header";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
    return ( <
        div className = "hero" >
        <
        div className = "left-h" >
        <
        Header / >
        <
        div className = "the-best-ad" >
        <
        span > The Best Fitness Club in Town < /span>{" "} <
        /div>{" "} <
        div className = "hero-text" >
        <
        div >
        <
        span className = "stroke-text" > Shape < /span> <span> Your </span >
        <
        /div>{" "} <
        div >
        <
        span > Ideal Body < /span>{" "} <
        /div>{" "} <
        div >
        <
        span >
        in here we will help you shape and build your ideal body and live life to the fullest { " " } <
        /span>{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "figures" >
        <
        div >
        <
        span > +140 < /span> <span> Expert coaches </span >
        <
        /div>{" "} <
        div >
        <
        span > +978 < /span> <span> Members Joined </span >
        <
        /div>{" "} <
        div >
        <
        span > +50 < /span> <span> Fitness programs </span >
        <
        /div>{" "} <
        /div>{" "} <
        div className = "hero-buttons" >
        <
        button className = "btn" > Get Started < /button>{" "} <
        button className = "btn" > Learn More < /button>{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "right-h" >
        <
        button className = "btn" > Join Now < /button>{" "} <
        div className = "heart-rate" >
        <
        img src = { Heart }
        alt = "Heart" / >
        <
        span > Heart Rate: 116 bpm < /span>{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "hero-images" >
        <
        img src = { hero_image }
        alt = "Hero"
        className = "hero-image" / >
        <
        img src = { hero_image_back }
        alt = "Hero Back"
        className = "hero-image-back" /
        >
        <
        div className = "calories" >
        <
        img src = { Calories }
        alt = "Calories" / >
        <
        div >
        <
        span > Calories Burned < /span> <span> 220 kcal </span > { " " } <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
};

export default Hero;