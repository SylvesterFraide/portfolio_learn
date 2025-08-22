import React from "react";
import "./Home.css";
import { Hero } from "../Hero/Hero";

export const Home = () => {
  return (
    <div className="home">
      <Hero
        hello="hello"
        heroName="I'm"
        name="Sylvester Fraide"
        proffesion="Frontend Developer"
        description={
          <>
            I am a skilled Frontend Developer with a passion for creating
            <br />
            dynamic and responsive web applications.
          </>
        }
        hire="Hire Me"
      />
    </div>
  );
};
