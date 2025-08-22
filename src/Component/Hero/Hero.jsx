import React from "react";
import "./Hero.css";
import image1 from "../../assets/image1.jpg";
import { Link } from "react-router-dom";

export const Hero = ({
  hello,
  heroName,
  name,
  proffesion,
  description,
  hire,
}) => {
  return (
    <section id="hero">
      <div className="heroContent">
        <span className="hello">{hello},</span>
        <span className="heroName">
          {heroName}, <span className="name">{name}</span> <br /> {proffesion}
        </span>
        <p className="heropar">{description}</p>
        <Link to="">
          {" "}
          <button className="herobtn"> {hire} </button>
        </Link>
      </div>
      <img src={image1} alt="profile" className="image1" />
    </section>
  );
};