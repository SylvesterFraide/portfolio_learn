import React from "react";
import "./Home.css";
import { Hero } from "../Hero/Hero";
import { About } from './About'

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

      <About 
        skillTitle="What I do"
        skillsDesc="I am a skilled and passionate developer with expertise in web and mobile application development."
        h1="UI/UX Design"
        p1="Creating user-friendly interfaces and experiences."
        h2="Web Development"
        p2="Building responsive and interactive websites."
        h3="App Development"
        p3="Creating mobile applications for iOS and Android."
      />
    </div>
  );
};
