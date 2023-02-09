import React from 'react'
import "./About.css"
import vid from "../Assets/Movie.mp4";
import image from "../Assets/Logo.png"

const About = () => {
  return (
    <div className="home">
         
    <video src={vid} autoPlay loop muted></video>
    
    <div className="content">
    <h1>Welcome to </h1>
    <img className='Logoimg' src={image} alt="404" ></img>
    </div>
</div>
  )
}

export default About