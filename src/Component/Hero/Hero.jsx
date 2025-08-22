import React from "react";
import "./Hero.css";
import image1 from "../../assets/image1.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section id="hero">
      <div className="heroContent">
        <span className="hello">Hello,</span>
        <span className="heroName">I'm, <span className="name">Sylvester Fraide</span> <br /> Frontend Developer </span>
        <p className="heropar">I am a skilled Frontend Developer with a passion for creating <br /> dynamic and responsive web applications.</p>
        <Link to=""> <button className="herobtn"> Hire Me </button></Link>
      </div>
      <img src={image1} alt="profile" className="image1" />
    </section>
  );
};
